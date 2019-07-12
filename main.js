import React, { createContext, useContext } from "react";
import styled from 'styled-components'
import tags from 'html-tags'
import * as N from 'react-native'

const Box = styled('div')(({ css }) => _css(css));

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

export const _css = ({
    //fonts
    fF, lH, lS,
    //colors
    bg,
    //background
    bgImg, bgSize, bgPos, bgRep,
    //flexbox
    jI, jC, fD, jS,
    //grid
    gCg, gRg, gAf, gAc, gAr, gTc, gTr, gTa,
    //space
    m, mt, mr, mb, ml, mx, my, p, pt, pr, pb, pl, px, py,
    //layout
    vA, size,
    //borders
    bR,
    //position
    ...props
}) => {

    const obj = {
        //fonts - text
        fontFamily: fF, lineHeight: lH, letterSpacing: lS,
        //colors
        backgroundColor: bg,
        //background
        backgroundImage: bgImg, backgroundSize: bgSize, backgroundPosition: bgPos, backgroundRepeat: bgRep,
        //flexbox
        justifyItems: jI,
        justifyContent: jC,
        flexDirection: fD,
        justifySelf: jS,
        //grid
        gridColumnGap: gCg, gridRowGap: gRg, gridAutoFlow: gAf, gridAutoColumns: gAc, gridAutoRows: gAr, gridTemplateColumns: gTc, gridTemplateRows: gTr, gridTemplateAreas: gTa,
        //spaces
        margin: m, marginTop: mt, marginRight: mr, marginBottom: mb, marginLeft: ml,
        marginX: mx, marginY: my,
        padding: p, paddingTop: pt, paddingRight: pr, paddingBottom: pb, paddingLeft: pl, paddingX: px, paddingY: py,
        //layout
        verticalAlign: vA,
        //border
        borderRadius: bR,
        ...(size ? { width: size, height: size } : null),
        //position
        ...props
    }

    Object.keys(obj).forEach(key => (obj[key] === undefined || !obj[key]) && delete obj[key]);

    return obj;
}