<template>
  <div>
    <h1>User from Server</h1>
    Welcome {{userData.userName}}
    <button @click="logout">logout</button>
    <h1>Items from Server</h1>
    <h1>Submit Data to Blockchain</h1>
    <input type="textarea"v-model="requestModel"/>
    <button @click="toAddPage">Submit</button>

    <ul>
      <li v-for="item in items" :key="item.id">{{item.name}}</li>
    </ul>
    <h1>Set badge count</h1>
    <p>Click buttons below to set app badge count (calling Electron via preload script)</p>
    <button @click="increase">
      Increase
    </button>
    <button @click="decrease" :disabled="count <= 0">
      Decrease
    </button>
    <h1>File dialog</h1>
    <button @click="open">Show Open Dialog</button>
    <button @click="save">Show Save Dialog</button>
    <p><strong>Selected File(s)</strong>: {{selectedFile}}</p>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
export default {
  data() {
    return {
      items: [],
      count: 0,
      selectedFile: 'None',
      requestModel:''
    }
  },
  created() {
//    this.$http.get('/api/items')
//      .then(response => {
//        this.items = response.data;
//        this.$log.info('Received items from server.')
//      });
  },
  computed:{
      ...mapState({
        userData:state=>state.userData
      })
  },
  methods: {
    increase() {
      this.count++;
      this.$interop.setBadgeCount(this.count);
    },
    decrease() {
      if (this.count > 0) {
        this.count--;
        this.$interop.setBadgeCount(this.count);      
      }
    },
    open() {
      this.$interop.showOpenDialog({
        properties: ['openFile', 'multiSelections']
      }, filePaths => this.selectedFile = filePaths);
    },
    save() {
      this.$interop.showSaveDialog({},
        filename => this.selectedFile = filename);
    },
    submit(){
      let param = {};
      param.orgName = "Org1";
      param.enrollmentID = this.enrollmentID;
      param.enrollmentSecret = this.enrollmentSecret;
      this.$http.post('/api/enroll',param)
          .then(response=>{
              if(response.code === 200){
                  this.userCount ++;
              }
              alert(response.msg);
          })
    },
    getItems(){
        this.$http.get('/api/items')
          .then(response => {
            this.items = response.data;
            this.$log.info('Received items from server.')
          });
    },
    logout(){
        this.$store.dispatch('setUserData',);
        this.$router.push("/");
    },
      toAddPage(){
          this.$router.push("/blockchain/add");
      }
  }
}
</script>
