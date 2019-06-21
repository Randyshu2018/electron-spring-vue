<template>
  <Form ref="formInline" :model="formInline" :rules="ruleInline" :label-width="150">
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
    <FormItem label="EnrollmentSecret" prop="enrollmentSecret">
      <Input type="password" v-model="formInline.enrollmentSecret" placeholder="please input enrollmentSecret"/>
      <Icon type="ios-lock-outline" slot="prepend"></Icon>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit">Register</Button>
      <Button  @click="toLoginPage">Signin</Button>
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
                enrollmentID: '',
                enrollmentSecret:''
            },
            ruleInline: {
                orgName: [
                    { required: true, message: 'Please fill in the orgName', trigger: 'blur' }
                ],
                enrollmentID: [
                    { required: true, message: 'Please fill in the enrollmentID.', trigger: 'blur' },
                    { type: 'string', min: 6, message: 'The enrollmentID length cannot be less than 6 bits', trigger: 'blur' }
                ],
                enrollmentSecret: [
                    { required: true, message: 'Please fill in the enrollmentSecret.', trigger: 'blur' },
                    { type: 'string', min: 6, message: 'The enrollmentSecret length cannot be less than 6 bits', trigger: 'blur' }
                ]
            },
        }
    },
    created:function () {

    },
    computed: {

        ...mapState([
                     'userData'
                 ]),
    }
    ,
    mounted(){
      console.log(this.userData);
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
                    this.register();
                }
            })
        },
        register(){
            this.$http.post('/api/enroll',this.formInline)
                .then(response => {
                    this.$log.info('Received items from server.'+JSON.stringify(response));
                    if(response && response.data.code === 200){
                        alert(response.data.msg);
                        this.$router.push("/login");
                    }else{
                        alert(response.data.msg);
                    }
                }).catch(err=>{
                    alert(err.message);
                })
        },
        toLoginPage(){
            this.$router.push("/login");
        }
    }
}
</script>
