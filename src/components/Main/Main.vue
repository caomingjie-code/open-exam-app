<template>
    <div class="Main">
      <div class="headImg">
        图片区域
      </div>
      <!--试题区域-->
      <div>
        <div class="jht">
          精华题
        </div>
        <div v-for="jhtData in jhtDatas" v-key="jhtData.id" v-on:click="">
          {{jhtData.title}}
        </div>
      </div>

    </div>
</template>

<script>
export default {
  name: 'Main',
  data: function () {
    return {
      name: 'cmj',
      jhtDatas:[
        {title:"在并发情况下,Elasticsearch 如果保证读写一致?",id:"1"}
        ]
    }
  },
  methods:{

  },
  computed: {
    nameC: function () {
      return this.name + '123'
    }
  },
  created() {
    var url = "articles";
    this.$http.post(url).then(response=>{

    })
  }
}
</script>
<style>
  .headImg{
    width: 100%;
    height: 10rem;
    background-color: blue;
  }
  .jht{
    left: 0px;
    margin-left: 0px;
    text-align: left ;
  }
</style>
