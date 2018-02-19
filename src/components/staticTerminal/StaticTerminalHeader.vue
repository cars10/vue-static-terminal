<template>
  <div class="static_terminal__header">
    <span class="static_terminal__header__text" v-html="text"></span>
    <span class="static_terminal__header__toolbar" v-html="toolbar"></span>
  </div>
</template>

<style>
  .static_terminal__header {
    padding: 4px 8px 4px 6px;
    background-color: #555;
    border-radius: 2px 2px 0 0;
    display: flex;
    flex-direction: row;
  }

  .static_terminal__header__toolbar {
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
