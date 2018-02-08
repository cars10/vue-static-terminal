<template>
    <div>
        <h1>Static terminal test</h1>
        <div class="grid">
            <div class="col">
                <static-terminal></static-terminal>
            </div>
            <div class="col">
                <static-terminal></static-terminal>
            </div>
            <div class="col">
                <static-terminal></static-terminal>
            </div>
        </div>

    </div>
</template>

<style>
    * {
        font-family: sans-serif;
    }

    .grid {
        display: flex;
    }

    .col {
        flex: 1;
        margin: 20px;
    }
</style>

<script>
    import StaticTerminal from './components/StaticTerminal.vue'

    export default {
        components: {
            StaticTerminal
        }
    }
</script>
