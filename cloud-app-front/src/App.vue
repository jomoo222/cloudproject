<template>
  <item-list></item-list>
  <!-- <Css-Test></Css-Test> -->
</template>

<script>
import ItemList from './components/ItemList.vue'
// import CssTest from './components/CssTest.vue'
export default {
  name: 'App',
  components: {
    ItemList,
    // CssTest
  }
}
</script>

<style>
  body{
    text-align: center;
    background-color: #f6f6f6;
  }
  input{
    border-style: groove;
    width: 200px;
  }
  button{
    border-style: groove;
  }
  .shadow{
    box-shadow:5px 10px 10px rgba(0,0,0,0.03);
  }

</style>
