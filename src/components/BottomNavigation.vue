<template>
    <div class="bn">
      <div>
        <router-link to="Main" tag="a" >主页</router-link>
      </div>
      <div>
        <router-link to="Enshrine" tag="a">收藏</router-link>
      </div>
      <div>
          <router-link to="Mine" tag="a">我的</router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'BottomNavigation'
}
</script>

<style scoped>
  .bn{
    height: 2rem;
    background-color: blueviolet;
    left: 0px;
    bottom: 0px;
    position: fixed;
    width: 100%;
    display: inline-flex;
  }
  .bn div{
    flex: 4rem;
    display: inline-block;
  }
</style>
