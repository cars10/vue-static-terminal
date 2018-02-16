<template>
  <div>
    <h1>Static terminal test</h1>
    <div class="row">
      <div class="col">
        Empty default
        <static-terminal></static-terminal>
      </div>

      <div class="col">
        Some commands
        <static-terminal :commands="basicExample"></static-terminal>
      </div>

      <div class="col">
        Custom prompt
        <static-terminal :commands="basicExample" :prompt="'#'"></static-terminal>
      </div>
    </div>

    <div class="row">
      <div class="col" style="box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);">
        <static-terminal :header="customExample.header" :commands="customExample.commands"
                         :prompt="customExample.prompt"></static-terminal>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<style>
  * {
    font-family: sans-serif;
  }

  .row {
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
            text: 'someTerm',
            toolbar: '&#x2501;&nbsp;&nbsp;&#x2716;'
          },
          prompt: '<svg width="15" height="10" style="fill: #fff"><rect width="10" height="10"></rect><polygon points="10 0, 10 10, 15 5"></polygon></svg>',
          commands: [
            {
              command: 'whoami',
              result: 'root'
            },
            {
              command: 'uname -r',
              result: '4.15.1-2-ARCH'
            },
            {
              command: 'ls -a',
              result: '<strong>.</strong>&nbsp;&nbsp;<strong>..</strong>&nbsp;&nbsp;README.MD&nbsp;&nbsp;.gitignore&nbsp;&nbsp;<strong>src</strong>'
            },
            {
              command: 'asdf',
              result: 'command not found: asdf'
            },
            {
              prompt: '<svg width="15" height="10" style="fill: #fff"><rect width="10" height="10"></rect><polygon points="10 0, 10 10, 15 5"></polygon><line x1="2" y1="2" x2="8" y2="8" style="stroke:#f00; stroke-width:2"></line><line x1="2" y1="8" x2="8" y2="2" style="stroke:#f00; stroke-width:2"></line></svg>'
            }
          ]
        },
      }
    },
    components: {
      StaticTerminal
    }
  }
</script>
