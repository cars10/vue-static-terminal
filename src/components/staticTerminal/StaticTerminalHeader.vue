<template>
  <div class="static_terminal__header">
    <span v-html="text"></span>
    <span class="flex-right" v-html="toolbar"></span>
  </div>
</template>

<style>
  .static_terminal__header {
    padding: 4px 8px 4px 6px;
    background-color: #555;
    border-radius: inherit;
    display: flex;
    flex-direction: row;
  }

  .flex-right {
    margin-left: auto;
  }
</style>

<script>
  export default {
    props: {
      text: {},
      toolbar: {
        default: '<span style="color: lightgrey;">&#9679;</span>&nbsp;&nbsp;<span>&#9679;</span>'
      }
    }
  }
</script>
