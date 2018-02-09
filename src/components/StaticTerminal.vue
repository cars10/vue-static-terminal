<template>
    <div class="static_terminal">
        <static-terminal-header></static-terminal-header>
        <static-terminal-body :commands="commands"></static-terminal-body>
    </div>
</template>

<style scoped>
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
        props: ['commands'],
        components: {
            StaticTerminalHeader,
            StaticTerminalBody
        }
    }
</script>
