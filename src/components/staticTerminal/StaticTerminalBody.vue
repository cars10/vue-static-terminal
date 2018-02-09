<template>
    <div class="static_terminal__body">
        <static-terminal-block v-for="command in commands"
                               :command="command"></static-terminal-block>
    </div>
</template>

<style scoped>
    .static_terminal__body {
        min-height: 50px;
        padding: 4px 6px;
    }
</style>

<script>
    import StaticTerminalBlock from './StaticTerminalBlock.vue'

    export default {
        props: [
            'commands',
            'size'
        ],
        components: {
            StaticTerminalBlock
        }
    }
</script>