<template>
  <div>
    <ul>
      <li>
        <span class="simpleImageBox">
        </span>
      </li>
      <li>
        <span class="simpleImageBox">
        </span>
      </li>
      <li>
        <span class="simpleImageBox">
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 125px;
  height: 125px;
  line-height: 125px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 20px;
}
.simpleImageBox{
  /* line-height: 125px; */
  display: flex;
  width: 80px;
  height: 100px;
  line-height: 100px;
  margin-top:0.7rem;
  margin-right:0.9rem;
}
</style>