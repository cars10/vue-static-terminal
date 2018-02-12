<template>
    <div>
        <h1>Static terminal test</h1>
        <div class="grid">
            <div class="col">
                Empty default
                <static-terminal></static-terminal>
            </div>

            <div class="col">
                Some commands
                <static-terminal :commands="basicExample"></static-terminal>
            </div>

            <div class="col">
                Fully custom
                <static-terminal :header="customExample.header" :commands="customExample.commands"></static-terminal>
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
                    {
                        command: 'whoami',
                        result: 'root'
                    },
                    {
                        command: 'uname -r',
                        result: '4.15.1-2-ARCH'
                    },
                    {
                        command: 'ls /',
                        result: '<table><tr align="left"><th>bin</th><th>dev</th><th>home</th><th>lib64</th><th>mnt</th><th>proc</th><th>run</th><th>srv</th><th>tmp</th><th>var</th></tr><tr align="left"><th>boot</th><th>etc</th><th>lib</th><th>lost+found</th><th>opt</th><th>root</th><th>sbin</th><th>sys</th><th>usr</th></tr></table>'
                    }
                ],
                customExample: {
                    header: {
                        text: 'My Terminal',
                        toolbar: '&#x2501;&nbsp;&nbsp;&#x2716;'
                    },
                    commands: [
                        {
                            prompt: '<svg width="15" height="10" style="fill: #fff"><rect width="10" height="10"></rect><polygon points="10 0, 10 10, 15 5"></polygon></svg>',
                            command: 'whoami',
                            result: 'root'
                        },
                        {
                            prompt: '<svg width="15" height="10" style="fill: #fff"><rect width="10" height="10"></rect><polygon points="10 0, 10 10, 15 5"></polygon></svg>',
                            command: 'uname -r',
                            result: '4.15.1-2-ARCH'
                        },
                        {
                            prompt: '<svg width="15" height="10" style="fill: #fff"><rect width="10" height="10"></rect><polygon points="10 0, 10 10, 15 5"></polygon></svg>',
                            command: 'ls -a',
                            result: 'README.MD .gitignore'
                        },
                    ]
                },
            }
        },
        components: {
            StaticTerminal
        }
    }
</script>
