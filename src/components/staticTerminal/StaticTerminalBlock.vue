<template>
    <div>
        <static-terminal-command :prompt="commandBlock.prompt" :command="commandBlock.command"></static-terminal-command>
        <static-terminal-result :result="commandBlock.result"></static-terminal-result>
    </div>
</template>

<script>
    import StaticTerminalCommand from './StaticTerminalCommand.vue'
    import StaticTerminalResult from './StaticTerminalResult.vue'

    export default {
        props: [
            'commandBlock'
        ],
        components: {
            StaticTerminalCommand,
            StaticTerminalResult
        }
    }
</script>