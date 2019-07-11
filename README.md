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
Then use css={{stylesObject}} with CSS alias 

```jsx
import React from "react";
import { Button, Text, View } from "css-js-components";
const App = () => {
  return (
    <View css={{
      flex: 1,
      jC: "center",
      alignItems: "center",
      bg: "black"
    }}>
      <Button css={{
        fontSize: 20,
        color: 'white',
        bg: "darkgreen",
        size: 80,
        border: "1px solid black",
        bR: 50,
        position: "absolute",
        right: 30,
        bottom: 30,
      }}
        onPress={() => { console.log('PRESS') }}
      >PRESS</Button>
      <Text css={{
        color: "white",
        fontSize: 30,
      }}>HELLO</Text>
    </View>
  );
};

export default App;

```
## CSS alias
The right key alias the left css

```jsx

  //fonts - text
  fontFamily: font, 
  lineHeight: lineH, 
  letterSpacing: letS, 
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
  gridColumnGap: gridCg, 
  gridRowGap: gridRg, 
  gridAutoFlow: gridAf, 
  gridAutoColumns: gridAc, 
  gridAutoRows: gridAr, 
  gridTemplateColumns: gridTc, 
  gridTemplateRows: gridTr, 
  gridTemplateAreas: gridTa,
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
  verticalAlign: vAlign,
  width, height: size,

```

Created by Le Quy Sang