<template>
  <div class="static_terminal__body">
    <div class="static_terminal__command_with_result" v-for="(command, _, index) in commands" :v-key="index">
      <static-terminal-command :prompt="command.prompt || prompt" :command="command.command"></static-terminal-command>
      <static-terminal-result :result="command.result"></static-terminal-result>
    </div>
  </div>
</template>

<style>
  .static_terminal__body {
    min-height: 50px;
    padding: 4px 6px;
  }
</style>

<script>
  import StaticTerminalCommand from './StaticTerminalCommand.vue'
  import StaticTerminalResult from './StaticTerminalResult.vue'

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
      StaticTerminalCommand,
      StaticTerminalResult
    }
  }
</script>
