<template>
  <div class="static_terminal">
    <static-terminal-header :text="header.text" :toolbar="header.toolbar"></static-terminal-header>
    <static-terminal-body :prompt="prompt" :commands="commands"></static-terminal-body>
  </div>
</template>

<style>
  .static_terminal {
    background-color: #333;
    border-radius: 2px;
    color: #fff;
    font-family: monospace;
  }
</style>

<script>
  import StaticTerminalHeader from './staticTerminal/StaticTerminalHeader.vue'
  import StaticTerminalBody from './staticTerminal/StaticTerminalBody.vue'

  export default {
    props: {
      header: {
        default: () => {
          return {}
        }
      },
      prompt: {},
      commands: {}
    },
    components: {
      StaticTerminalHeader,
      StaticTerminalBody
    }
  }
</script>
