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
        default: '<svg width="10" height="10" style="fill: #d3d3d3"><circle cx="50%" cy="50%" r="5"></circle></svg>\n' +
        '<svg width="10" height="10" style="fill: #fff"><circle cx="50%" cy="50%" r="5"></circle></svg>'
      }
    }
  }
</script>
