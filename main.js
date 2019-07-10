import React from 'react'
import styled from 'styled-components'
import tags from 'html-tags'
import * as N from 'react-native'

const Box = styled('div')(({ css }) => css);

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