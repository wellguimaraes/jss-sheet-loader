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
        rules: [
            {
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
                }]
        },
    }
}
```
