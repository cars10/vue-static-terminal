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
// globally
Vue.use(VueStaticTerminal)

// per component
export default {
  components: {VueStaticTerminal}
}
```

Use the component:

#### Empty terminal
```html
<vue-static-terminal></vue-static-terminal>
```

```javascript
export default {}
```

#### Simple example
```html
<vue-static-terminal :header="terminal.header"
                     :prompt="terminal.prompt"
                     :commands="terminal.commands"></vue-static-terminal>
```
```javascript
export default {
  data: () => {
    return {
      terminal: {
        header: {
          text: 'some Terminal',
          toolbar: '&#x2715;'
        },
        prompt: '/ >',
        commands: [
          {command: 'ls', result: 'file1 file2'},
          {command: 'whoami', result: 'root'}
        ]
      }
    }
  }
}
```

Visit [the wiki](https://github.com/cars10/vue-static-terminal/wiki/Examples) for more examples.

## API

The component accepts the following three props:

* `header` - type: object
* `prompt` - type: string
* `commands` - type: array of objects

None of these are required, neither are their respective attributes. All attributes can contain html entities.

### header

type: object

| Attribute | Type | Default | Example   |
| --------- | ---- | ------- | --------- |
| text      | string | `''`    | `'xterm'` |
| toolbar   | string | `<span style="color: lightgrey;">&#9679;</span>&nbsp;&nbsp;<span>&#9679;</span>` <span style="color: lightgrey;">&#9679;</span>&nbsp;&nbsp;<span>&#9679;</span> | `'- X'`   |


### prompt

type: string

| Default | Example |
| ------- | ------- |
| `'$'`     | `'$>'` |

### commands

type: array of objects

| Attribute | Type | Default | Example |
| --------- | ---- | ------- | ------- |
| prompt    | string | `undefined`. The global `prompt` will be used | `'$>'`
| command   | string | `''` | `'whoami'` | 
| result    | string | `''` | `'root'` |

