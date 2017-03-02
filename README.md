# JSS Sheet Loader for Webpack
Create and load jss with no extra pain

## Install it
`npm i jss-sheet-loader --save`

## Use it
Webpack config file:
```js
{
  //...
  module   : {
    rules: [ {
      test   : /\.jss$/,
      exclude: /node_modules/,
      use    : [ {
        loader : 'jss-sheet-loader',
        options: {
          plugins: [
            // List here the plugins you wanna use
            // Don't forget to install them !
            'jss-nested'
          ]
        }
      } ]
    } ]
  }
}
```

JSS file (you can use .jss extension and make your editor/IDE handle it like .js):
```js
import myColors from 'path/to/my/colors.js';

export default {
  lorem: {
    color: myColors.orange,
    margin: 10
  }
}
```

JS file:
```jsx
import styles from 'path/to/jss/file.jss';

// ...

<div className={styles.lorem}>Some content</div>
```
