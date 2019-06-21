<template>
    <Form ref="formInline" :model="formItem" :label-width="80" :rules="ruleInline">
        <FormItem label="OrgName">
            <Select v-model="formItem.orgName">
                <Option value="Org1">Org1</Option>
                <Option value="Org2">Org2</Option>
                <Option value="Org3">Org3</Option>
            </Select>
        </FormItem>
        <FormItem label="EnrollmentID">
            <Input v-model="formItem.enrollmentID" placeholder="Enter enrollmentID..."/>
        </FormItem>
        <FormItem label="ClassName" prop="className">
            <Input v-model="formItem.className" placeholder="Enter className..."/>
        </FormItem>
        <FormItem label="key" prop="key">
            <Input v-model="formItem.key" placeholder="Enter key..."/>
        </FormItem>
        <FormItem label="Data" prop="tmpData">
            <Input v-model="formItem.tmpData" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter your json data..."/>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit">Submit</Button>
            <Button style="margin-left: 8px" @click="cancer">Cancel</Button>
        </FormItem>
    </Form>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        data () {
            return {
                formItem: {
                    orgName: '',
                    enrollmentID: '',
                    className: '',
                    key: '',
                    tmpData:'',
                    data:''
                },
                ruleInline: {
                    className: [
                        { required: true, message: 'Please fill in the className', trigger: 'blur' }
                    ],
                    key: [
                        { required: true, message: 'Please fill in the key.', trigger: 'blur' },
                    ],
                    tmpData: [
//                        { required: true, message: 'Please fill in the data.', trigger: 'blur' },
                        { required:true, message: 'Please fill json data', trigger: 'blur' }
                    ]
                },
            }
        },
        computed:{
            ...mapState({
                userData:state=>state.userData
            })
        },
        methods:{
            handleSubmit() {
                this.$refs['formInline'].validate((valid) => {
                    if (valid) {
                        this.submit();
                    }
                })
            },
            submit(){
                try{
                    this.formItem.data = JSON.parse(this.formItem.tmpData);
                }catch(e) {
                    this.$Message.error("Please input json data");
                    return;
                }
                this.$Loading.start();
                this.$http.post('/api/invoke',this.formItem)
                    .then(response => {
                        if(response.data && response.data.code === 200){
                            this.$log.info('Received items from server.'+JSON.stringify(response));
                            this.$Loading.finish();
                            alert(response.data.msg);
                            this.$router.push("/blockchain/list");
                        }else{
                            alert(response.data.msg);
                        }

                    }).catch(err=>{
                    this.$Loading.error();
                    alert(err.message);
                })
            },
            cancer(){
                this.$router.push("/blockchain/list");
            }
        },
        created(){
            this.formItem.orgName = this.userData.orgName;
            this.formItem.enrollmentID = this.userData.enrollmentID;
            this.$log.info("userData"+this.userData.orgName);
        }
    }
</script>
