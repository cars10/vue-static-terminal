<template>
    <div>
        <h1>Static terminal test</h1>
        <div class="grid">
            <div class="col">
                <static-terminal :command-blocks="basicExample" :size="{height: '100px', width: '200px'}"></static-terminal>
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
        data: () => {
            return {
                basicExample: [
                    {command: 'whoami', result: 'root'},
                    {command: 'ls -a', result: 'README.MD .gitignore'},
                ]
            }
        },
        components: {
            StaticTerminal
        }
    }
</script>
