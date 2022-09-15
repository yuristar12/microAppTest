<template>
  <button @click="toChildrenServe">跳转子服务</button>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    toChildrenServe() {
      this.$router.push({ name: 'children' })
    },
  },
}
</script>

<style lang="less" scoped></style>
