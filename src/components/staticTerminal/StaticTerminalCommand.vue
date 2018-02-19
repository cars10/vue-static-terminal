<template>
  <div class="static_terminal__command_with_prompt">
    <span class="static_terminal__prompt" v-html="prompt"></span>
    <span class="static_terminal__command" v-html="command"></span>
  </div>
</template>

<script>
  export default {
    props: {
      prompt: {
        default: '$'
      },
      command: {}
    }
  }
</script>
