<template>
    <div>
        <Button type="primary" @click="toAddPage">Add</Button>
        <Table :columns="historyColumns" :data="historyData"></Table>
        <Page :total="dataCount" :page-size="pageSize" show-total class="paging" @on-change="changepage"></Page>
    </div>
</template>
<style scoped>
    .paging{
        float:right;
        margin-top:10px;
    }
</style>
<script>
    export default {
        data () {
            return {
                formItem: {
                    orgName: 'Org1',
                    enrollmentID: 'randy13',
                    selector:{},
                },
                ajaxHistoryData:[],
                // 初始化信息总条数
                dataCount:0,
                // 每页显示多少条
                pageSize:10,
                historyColumns: [
                    {
                        title: 'productId',
                        key: 'key'
                    },
                    {
                        title: 'productName',
                        key: 'productName'
                    }
                ],
                historyData: []
            }
        },
        methods:{
            changepage(index){
                var _start = ( index - 1 ) * this.pageSize;
                var _end = index * this.pageSize;
                this.historyData = this.ajaxHistoryData.slice(_start,_end);
            },
            getList(){
                this.$http.post('/api/query',this.formItem)
                    .then(response => {
                        this.$log.info('Received items from server.'+JSON.stringify(response));
                        let datas = JSON.parse(response.data.data);
                        let ret = []
                        for(let i = 0; i < datas.data.length ; i++){
                            ret.push(datas.data[i].record.data);
                        }
                        // 保存取到的所有数据
                        this.ajaxHistoryData = ret;
                        this.dataCount = ret.length;
                        // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
                        if(this.dataCount < this.pageSize){
                            this.historyData = this.ajaxHistoryData;
                        }else{
                            this.historyData = this.ajaxHistoryData.slice(0,this.pageSize);
                        }
                    });
            },
            toAddPage(){
                this.$router.push("/blockchain/add");
            },
        },

        created(){
            this.getList();
        }
    }
</script>
