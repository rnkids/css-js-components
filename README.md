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
Then use css={{stylesObject}}

```jsx
import React from 'react';
import { View, Button } from 'css-js-components';

export default function App() {
  return (
    <View css={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Button css={{
        position: "absolute",
        bottom: 20,
        fontSize: 30,
        color: 'red',
        border: "1px solid black",
        borderRadius: 50,
      }}
        onPress={() => { }}
      >Press ME</Button>
    </View>
  );
}

```

Created by Le Quy Sang