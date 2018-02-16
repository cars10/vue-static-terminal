<template>
  <div>
    <static-terminal-command :prompt="command.prompt" :command="command.command"></static-terminal-command>
    <static-terminal-result :result="command.result"></static-terminal-result>
  </div>
</template>

<script>
  import StaticTerminalCommand from './StaticTerminalCommand.vue'
  import StaticTerminalResult from './StaticTerminalResult.vue'

  export default {
    props: [
      'command'
    ],
    components: {
      StaticTerminalCommand,
      StaticTerminalResult
    }
  }
</script>
