<template>
    <div class="static_terminal__body">
        <static-terminal-block v-for="commandBlock in commandBlocks"
                               :commandBlock="commandBlock"></static-terminal-block>
    </div>
</template>

<style scoped>
    .static_terminal__body {
        min-height: 50px;
        padding: 4px 6px;
    }

    .static_terminal__body--fixed {
        overflow: scroll
    }
</style>

<script>
    import StaticTerminalBlock from './StaticTerminalBlock.vue'

    export default {
        props: [
            'commandBlocks',
            'size'
        ],
        components: {
            StaticTerminalBlock
        }
    }
</script>