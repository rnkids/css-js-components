# css-js-components
 react, react-native styled by css prop
## Usage


```jsx
//IMPORT
//react
import { Div, Button, Img, H1 } from 'css-js-components';
//react-native react-native-web 
import { View, Button } from 'css-js-components';

```
Then use css={{stylesObject}} with some CSS alias 

```jsx
import React from "react";
import { Button, Text, View, _css } from "css-js-components";
import * as N from 'react-native'

const App = () => {

    return (
        <View css={{
            flex: 1,
            jC: "center",
            alignItems: "center",
        }}>
            <Button css={{
                fontSize: 20,
                color: 'white',
                bg: "darkgreen",
                jC: "center",
                textAlign: "center",
                size: 80,
                border: "1px solid black",
                bR: 50,
                position: "absolute",
                right: 50,
                bottom: 50,
            }}
                onPress={() => { console.log('PRESS') }}
            >PRESS</Button>
            <Text css={{
                color: "blue",
                fontSize: 30,
            }}>HELLO</Text>
        </View>
    );
};

App.navigationOptions = {
    headerTitle: (
        <N.Image
            source={{ uri: "http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43c038.png" }}
            //use in inline _css
            style={_css({
                width: 30,
                height: 30,
            })}
        />
    )
};


export default App;

```
## CSS alias
The right key alias the left css

```jsx

  //fonts - text
  fontFamily: fF, 
  lineHeight: lH, 
  letterSpacing: lS, 
//border
  borderRadius: bR,
//background colors
  backgroundColor: bg,
  backgroundImage: bgImg, 
  backgroundSize: bgSize, 
  backgroundPosition: bgPos, 
  backgroundRepeat: bgRep,
//flexbox
  justifyItems: jI, 
  justifyContent: jC, 
  justifySelf: jS, 
  //grid
  gridColumnGap: gCg, 
  gridRowGap: gRg, 
  gridAutoFlow: gAf, 
  gridAutoColumns: gAc, 
  gridAutoRows: gAr, 
  gridTemplateColumns: gTc, 
  gridTemplateRows: gTr, 
  gridTemplateAreas: gTa,
  //spaces
  margin: m, 
  marginTop: mt, 
  marginRight: mr, 
  marginBottom: mb, 
  marginLeft: ml,
  marginX: mx, 
  marginY: my,
  padding: p, 
  paddingTop: pt, 
  paddingRight: pr, 
  paddingBottom: pb, 
  paddingLeft: pl, 
  paddingX: px, 
  paddingY: py,
  //layout
  verticalAlign: vA,
  width, height: size,

```

Created by Le Quy Sang