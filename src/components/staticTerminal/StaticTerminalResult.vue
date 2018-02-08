<template>
    <div>
        {{ this.result }}
    </div>
</template>

<script>
    export default {
        props: {
            result: {
                default: 'file1 file2'
            }
        }
    }
</script>