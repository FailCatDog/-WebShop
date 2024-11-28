<template>
    <div class="container-input">
      <i class="icon-font icon-sousuo"></i>&nbsp;
      <input type="text" placeholder="Search" name="text" class="input">
    </div>
</template>

<style scoped>
.container-input {
  position: relative;
}

.input {
  width: 200px;
  height: 30px;
  padding: 10px 0px 10px 50px; /* 左侧留出空间给图标 */
  border-radius: 9999px;
  border: solid 2px #333;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  outline: none;
  opacity: 0.8;
}

.icon-font {
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  position: absolute; /* 绝对定位让图标在输入框中 */
  top: 50%;
  left: 20px; 
  transform: translateY(-50%);
  font-size: 35px; 
  color: #4e3edf;
}

.input:focus {
  opacity: 1;
  width: 300px;
}
</style>

<script>
export default {
    name: 'SearchBar',
}
</script>