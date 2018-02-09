<template>
    <div class="static_terminal__command">
        <span class="prompt" v-html="prompt"></span>
        <span class="command" v-html="command"></span>
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