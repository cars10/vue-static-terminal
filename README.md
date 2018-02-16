# vue-static-terminal

> A fully customizable static terminal component for vue.js

![Screenshot](screenshot.png?raw=true "Screenshot")

## Installation

### Via npm

First add it to your `package.json`:

```bash
npm install vue-static-terminal --save
# or yarn
yarn add vue-static-terminal
```

Then import the component js:

```javascript
import VueStaticTerminal from 'vue-static-terminal'
```

And the styles. Alternatively copy the styles to your project and customize them.

```javascript
import 'vue-static-terminal/dist/vue-static-terminal.css'
```

### Manually via `<script>` tag

If you don't use npm you can download the minified version in `dist/vue-static-terminal.min.js` and the css in `dist/vue-static-terminal.css`, then add it to your site:

```html
<link rel="stylesheet" href="vue-static-terminal.css">
<script src="vue-static-terminal.min.js"></script>
```

Loading the minified version will automatically register the component `VueStaticTerminal` globally on the browsers `window` object.

## Usage

Load the component:

```javascript
Vue.use(VueStaticTerminal)
```

Use the component:

```html
# Empty example
<vue-static-terminal></vue-static-terminal>
```

## Examples

Also see [the codepen with examples](https://codepen.io/cars10/pen/KQXxdQ).

Empty terminal
```html
<vue-static-terminal></vue-static-terminal>
```

Some commands
```html
<vue-static-terminal :commands="commands"></vue-static-terminal>
```
```javascript
export default {
  data: () => {
    return {
      commands: [
        {command: 'ls', result: 'file1 file2'},
        {command: 'whoami', result: 'root'}
      ]
    }
  }
}
```

Complex example with customization. This is the code for the example in the screenshot.
```html
<vue-static-terminal :header="terminal.header" 
                     :commands="terminal.commands"
                     :prompt="terminal.prompt"></vue-static-terminal>
```
```javascript
export default {
  data: () => {
    return {
      terminal: {
        header: {
          text: 'someTerm',
          toolbar: '&#x2501;&nbsp;&nbsp;&#x2716;'
        },
        prompt: '<svg width="15" height="10" style="fill: #fff"><rect width="10" height="10"></rect><polygon points="10 0, 10 10, 15 5"></polygon></svg>',
        commands: [
            {command: 'whoami', result: 'root'},
            {command: 'uname -r', result: '4.15.1-2-ARCH'},
            {command: 'ls -a', result: '<strong>.</strong>&nbsp;&nbsp;<strong>..</strong>&nbsp;&nbsp;README.MD&nbsp;&nbsp;.gitignore&nbsp;&nbsp;<strong>src</strong>'},
            {command: 'asdf', result: 'command not found: asdf'},
            {prompt: '<svg width="15" height="10" style="fill: #fff"><rect width="10" height="10"></rect><polygon points="10 0, 10 10, 15 5"></polygon><line x1="2" y1="2" x2="8" y2="8" style="stroke:#f00; stroke-width:2"></line><line x1="2" y1="8" x2="8" y2="2" style="stroke:#f00; stroke-width:2"></line></svg>'}
        ]
      }
    }
  }
}
```
