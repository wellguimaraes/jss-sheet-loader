# JSS Loader for Webpack
Create and load jss with no pain

## Install it
`npm i jss-sheet-loader --save`

## Use it

JSS file (you can use .jss extension and make your editor/IDE handle it like .js):
```js
import myColors from 'path/to/my/colors.js';

export default {
  myElement: {
    color: myColors.orange,
    margin: 10
  }
}
```

JS file:
```jsx
import styles from 'path/to/jss/file.jss';

// ...

<div className={styles.myElement}>Some content</div>
```

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
            // Don't forget to install them!
            'jss-nested'
          ]
        }
      } ]
    } ]
  }
}
```

## Keywords injection

Combined with `jss-expand` plugin, you can use the following syntax:

```
export default {
  myElement: {
    border    : [2, solid, black],
    display   : flex,
    flexAlign : flexEnd
    color     : red,
  }
}
```

You actually don't need to declare `var solid = "solid"` or any other css keyword, just set loader option `injectKeywords` to true and the magic is done:

```js
{
  //...
  {
    // ...
    use    : [ {
      loader : 'jss-sheet-loader',
      options: {
        injectKeywords: true,
        plugins: [
          // ...
        ]
      }
    } ]
  }
}
```