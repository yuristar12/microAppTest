<template>
  <div>
    子服务
    <micro-app
      name="children"
      baseroute="/children"
      url="http://192.168.31.148:8101/"
    ></micro-app>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped></style>
