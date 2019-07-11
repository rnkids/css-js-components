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
      jCont: "center",
      aItems: "center",
      bg: "black"
    }}>
      <Button css={{
        fontSize: 20,
        color: 'white',
        bg: "darkgreen",
        size: 80,
        border: "1px solid black",
        bdRa: 50,
        pos: "absolute",
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
```jsx
//fonts - text
  fontFamily: font, 
  lineHeight: lineH, 
  letterSpacing: letS, 
  textAlign: textA,
//colors
  backgroundColor: bg,
//background
  backgroundImage: bgImg, 
  backgroundSize: bgSize, 
  backgroundPosition: bgPos, 
  backgroundRepeat: bgRep,
//flexbox
  alignItems: aItems, 
  alignContent: aCont, 
  justifyItems: jItems, 
  justifyContent: jCont, 
  flexWrap: flexWr, 
  flexDirection: flexDir, 
  flexGrow: flexGr, 
  flexShrink: flexSh, 
  flexBasis: flexBs, 
  justifySelf: jSelf, 
  alignSelf: aSelf,
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
  //border
  borderTop: bdT, 
  borderRight: bdR, 
  borderBottom: bdB, 
  borderLeft: bdL,
  borderColor: bdColor, 
  borderWidth: bdWidth, 
  borderStyle: bdStyle, 
  borderRadius: bdRa,
  //shadow
  boxShadow: boxSh,
  textShadow: textSh,
  //position
  position: pos,
```

Created by Le Quy Sang