<template>
  <div class="static_terminal__body">
    <static-terminal-block v-for="(command, _, index) in commands" :command="command"
                           :key="index" :prompt="prompt"></static-terminal-block>
  </div>
</template>

<style>
  .static_terminal__body {
    min-height: 50px;
    padding: 4px 6px;
  }
</style>

<script>
  import StaticTerminalBlock from './StaticTerminalBlock.vue'

  export default {
    props: {
      commands: {
        default: () => {
          return [{}]
        }
      },
      prompt: {}
    },
    components: {
      StaticTerminalBlock
    }
  }
</script>
