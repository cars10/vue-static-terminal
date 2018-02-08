<template>
    <div class="static_terminal__command">
        <span class="prompt">{{ this.prompt }}</span>
        <span class="command">{{ this.command }}</span>
    </div>
</template>

<script>
    export default {
        props: {
            prompt: {
                default: '$'
            },
            command: {
                default: 'ls'
            }
        }
    }
</script>