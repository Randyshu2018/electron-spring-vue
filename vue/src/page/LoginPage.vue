<template>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" :label-width="100">
      <FormItem label="OrgName" prop="orgName" >
        <Select v-model="formInline.orgName" placeholder="please choose organization">
          <Option value="Org1">Org1</Option>
          <Option value="Org2">Org2</Option>
          <Option value="Org3">Org3</Option>
        </Select>
      </FormItem>
      <FormItem label="EnrollmentID" prop="enrollmentID">
        <Input type="text" v-model="formInline.enrollmentID" placeholder="please input enrollmentID"/>
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit">Signin</Button>
        <Button  @click="toEnrollPage">Register</Button>
      </FormItem>
    </Form>
</template>

<script>
import {  mapState,mapGetters,mapActions } from 'vuex'

export default {
    data() {
        return {
            formInline: {
                orgName: '',
                enrollmentID: ''
            },
            ruleInline: {
                orgName: [
                    { required: true, message: 'Please fill in the orgName', trigger: 'blur' }
                ],
                enrollmentID: [
                    { required: true, message: 'Please fill in the enrollmentID.', trigger: 'blur' },
                    { type: 'string', min: 6, message: 'The enrollmentID length cannot be less than 6 bits', trigger: 'blur' }
                ]
            },
        }
    },
    computed: {
        ...mapState([
            'userData'
        ]),
    },
    methods:{
        ...mapActions([
            'setUserData'
        ]),
        ...mapGetters([
            'getUser'
        ]),
        handleSubmit() {
            this.$refs['formInline'].validate((valid) => {
                if (valid) {
                    this.isUserExist();
                }
            })
        },
        isUserExist(){
            this.$http.post('/api/userIsExist',this.formInline)
                .then(response => {
                    this.$log.info('Received items from server.'+JSON.stringify(response));
                    if(response && response.data.code === 200){
                        this.$store.dispatch('setUserData',this.formInline);
                        this.$router.push("/blockchain/list");
                    }else{
                        alert(response.data.msg);
                    }
                });
        },
        toEnrollPage(){
            this.$router.push("/register");
        }
    }
}
</script>
