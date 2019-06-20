<template>
    <Form :model="formItem" :label-width="80">
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
        <FormItem label="ClassName">
            <Input v-model="formItem.className" placeholder="Enter className..."/>
        </FormItem>
        <FormItem label="key">
            <Input v-model="formItem.key" placeholder="Enter key..."/>
        </FormItem>
        <FormItem label="Data">
            <Input v-model="formItem.tmpData" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter your json data..."/>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="submit">Submit</Button>
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
                }
            }
        },
        computed:{
            ...mapState({
                userData:state=>state.userData
            })
        },
        methods:{
            submit(){
                this.formItem.data = JSON.parse(this.formItem.tmpData);
                this.$http.post('/api/invoke',this.formItem)
                    .then(response => {
                        this.$log.info('Received items from server.'+JSON.stringify(response));
                        alert(response.data.msg);
                        this.$router.push("/blockchain/list");
                    });
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
