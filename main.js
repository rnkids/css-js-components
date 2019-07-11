import React, { createContext, useContext } from "react";
import styled from 'styled-components'
import tags from 'html-tags'
import * as N from 'react-native'

const Box = styled('div')(({ css }) => transformCss(css));

tags.forEach(tag => {
    module.exports[tag.charAt(0).toUpperCase() + tag.slice(1)] = props => <Box as={tag} {...props} />
})

export const View = props => <Box as={N.View} {...props} />;
export const Text = props => <Box as={N.Text} {...props} />;
export const Image = props => <Box as={N.Image} {...props} />
export const TextInput = props => <Box as={N.TextInput} {...props} />
export const ScrollView = props => <Box as={N.ScrollView} {...props} />
export const Picker = props => <Box as={N.Picker} {...props} />
export const Slider = props => <Box as={N.Slider} {...props} />
export const Switch = props => <Box as={N.Switch} {...props} />
export const FlatList = props => <Box as={N.FlatList} {...props} />
export const SectionList = props => <Box as={N.SectionList} {...props} />
export const ActivityIndicator = props => <Box as={N.ActivityIndicator} {...props} />
export const Alert = props => <Box as={N.Alert} {...props} />
export const Modal = props => <Box as={N.Modal} {...props} />
export const StatusBar = props => <Box as={N.StatusBar} {...props} />

export const Button = ({ children, css = { color: "black" }, ...props }) => {
    const { color, fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textAlign, fontStyle, textShadow, ...cssprops } = css;
    return (
        <Box as={N.TouchableOpacity} {...props} css={{ ...cssprops }}>
            <Box as={N.Text} css={{ color, fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textAlign, fontStyle, textShadow }} >{children}</Box>
        </Box>
    )
}

//Context
const HooksContext = createContext();

export const ContextProvider = ({ children, value }) => {
    return <HooksContext.Provider value={value}>{children}</HooksContext.Provider>;
};

export const useValue = () => {
    const value = useContext(HooksContext);
    return value;
};

//CSS
const initCss = {
    //fonts
    // font, lineH, letS, 
    textA: "center",
    //colors
    // bg: "white",
    //background
    // bgImg, bgSize, bgPos, bgRep,
    //flexbox
    aItems: "center",
    // aCont, jItems, 
    jCont: "center",
    // flexWr, flexDir, flexGr, flexSh, flexBs, jSelf, aSelf,
    //grid
    // gridCg, gridRg, gridAf, gridAc, gridAr, gridTc, gridTr, gridTa,
    //space
    // m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py,
    //layout
    // vAlign, size, width, height,
    //borders
    // bdT, bdR, bdL, bdB, bdColor, bdWidth, bdStyle, bdRadius,
    //shadow
    // boxSh, textSh, ...props
}

const transformCss = ({
    //fonts
    font, lineH, letS, textA = initCss.textA,
    //colors
    bg,
    //background
    bgImg, bgSize, bgPos, bgRep,
    //flexbox
    aItems = initCss.aItems, aCont, jItems, jCont = initCss.jCont, flexWr, flexDir, flexGr, flexSh, flexBs, jSelf, aSelf,
    //grid
    gridCg, gridRg, gridAf, gridAc, gridAr, gridTc, gridTr, gridTa,
    //space
    m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py,
    //layout
    vAlign, size, width, height,
    //borders
    bdT, bdR, bdL, bdB, bdColor, bdWidth, bdStyle, bdRa,
    //shadow
    boxSh, textSh,
    //position
    pos,
    ...props
}) => ({
    //fonts - text
    fontFamily: font, lineHeight: lineH, letterSpacing: letS, textAlign: textA,
    //colors
    backgroundColor: bg,
    //background
    backgroundImage: bgImg, backgroundSize: bgSize, backgroundPosition: bgPos, backgroundRepeat: bgRep,
    //flexbox
    alignItems: aItems, alignContent: aCont, justifyItems: jItems, justifyContent: jCont, flexWrap: flexWr, flexDirection: flexDir, flexGrow: flexGr, flexShrink: flexSh, flexBasis: flexBs, justifySelf: jSelf, alignSelf: aSelf,
    //grid
    gridColumnGap: gridCg, gridRowGap: gridRg, gridAutoFlow: gridAf, gridAutoColumns: gridAc, gridAutoRows: gridAr, gridTemplateColumns: gridTc, gridTemplateRows: gridTr, gridTemplateAreas: gridTa,
    //spaces
    margin: m, marginTop: mt, marginRight: mr, marginBottom: mb, marginLeft: ml,
    marginX: mx, marginY: my,
    padding: p, paddingTop: pt, paddingRight: pr, paddingBottom: pb, paddingLeft: pl, paddingX: px, paddingY: py,
    //layout
    verticalAlign: vAlign,
    width: size ? size : width,
    height: size ? size : height,
    //border
    borderTop: bdT, borderRight: bdR, borderBottom: bdB, borderLeft: bdL,
    borderColor: bdColor, borderWidth: bdWidth, borderStyle: bdStyle, borderRadius: bdRa,
    //shadow
    boxShadow: boxSh,
    textShadow: textSh,
    //position
    position: pos,
    ...props
})