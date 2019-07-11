"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.useValue = exports.ContextProvider = exports.Button = exports.StatusBar = exports.Modal = exports.Alert = exports.ActivityIndicator = exports.SectionList = exports.FlatList = exports.Switch = exports.Slider = exports.Picker = exports.ScrollView = exports.TextInput = exports.Image = exports.Text = exports.View = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _htmlTags = _interopRequireDefault(require("html-tags"));

var N = _interopRequireWildcard(require("react-native"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Box = (0, _styledComponents.default)('div')(function (_ref) {
    var css = _ref.css;
    return transformCss(css);
});

_htmlTags.default.forEach(function (tag) {
    module.exports[tag.charAt(0).toUpperCase() + tag.slice(1)] = function (props) {
        return _react.default.createElement(Box, _extends({
            as: tag
        }, props));
    };
});

var View = function View(props) {
    return _react.default.createElement(Box, _extends({
        as: N.View
    }, props));
};

exports.View = View;

var Text = function Text(props) {
    return _react.default.createElement(Box, _extends({
        as: N.Text
    }, props));
};

exports.Text = Text;

var Image = function Image(props) {
    return _react.default.createElement(Box, _extends({
        as: N.Image
    }, props));
};

exports.Image = Image;

var TextInput = function TextInput(props) {
    return _react.default.createElement(Box, _extends({
        as: N.TextInput
    }, props));
};

exports.TextInput = TextInput;

var ScrollView = function ScrollView(props) {
    return _react.default.createElement(Box, _extends({
        as: N.ScrollView
    }, props));
};

exports.ScrollView = ScrollView;

var Picker = function Picker(props) {
    return _react.default.createElement(Box, _extends({
        as: N.Picker
    }, props));
};

exports.Picker = Picker;

var Slider = function Slider(props) {
    return _react.default.createElement(Box, _extends({
        as: N.Slider
    }, props));
};

exports.Slider = Slider;

var Switch = function Switch(props) {
    return _react.default.createElement(Box, _extends({
        as: N.Switch
    }, props));
};

exports.Switch = Switch;

var FlatList = function FlatList(props) {
    return _react.default.createElement(Box, _extends({
        as: N.FlatList
    }, props));
};

exports.FlatList = FlatList;

var SectionList = function SectionList(props) {
    return _react.default.createElement(Box, _extends({
        as: N.SectionList
    }, props));
};

exports.SectionList = SectionList;

var ActivityIndicator = function ActivityIndicator(props) {
    return _react.default.createElement(Box, _extends({
        as: N.ActivityIndicator
    }, props));
};

exports.ActivityIndicator = ActivityIndicator;

var Alert = function Alert(props) {
    return _react.default.createElement(Box, _extends({
        as: N.Alert
    }, props));
};

exports.Alert = Alert;

var Modal = function Modal(props) {
    return _react.default.createElement(Box, _extends({
        as: N.Modal
    }, props));
};

exports.Modal = Modal;

var StatusBar = function StatusBar(props) {
    return _react.default.createElement(Box, _extends({
        as: N.StatusBar
    }, props));
};

exports.StatusBar = StatusBar;

var Button = function Button(_ref2) {
    var children = _ref2.children,
        _ref2$css = _ref2.css,
        css = _ref2$css === void 0 ? {
            color: "black"
        } : _ref2$css,
        props = _objectWithoutProperties(_ref2, ["children", "css"]);

    var color = css.color,
        fontFamily = css.fontFamily,
        fontSize = css.fontSize,
        fontWeight = css.fontWeight,
        lineHeight = css.lineHeight,
        letterSpacing = css.letterSpacing,
        textAlign = css.textAlign,
        fontStyle = css.fontStyle,
        textShadow = css.textShadow,
        cssprops = _objectWithoutProperties(css, ["color", "fontFamily", "fontSize", "fontWeight", "lineHeight", "letterSpacing", "textAlign", "fontStyle", "textShadow"]);

    return _react.default.createElement(Box, _extends({
        as: N.TouchableOpacity
    }, props, {
            css: _objectSpread({}, cssprops)
        }), _react.default.createElement(Box, {
            as: N.Text,
            css: {
                color: color,
                fontFamily: fontFamily,
                fontSize: fontSize,
                fontWeight: fontWeight,
                lineHeight: lineHeight,
                letterSpacing: letterSpacing,
                textAlign: textAlign,
                fontStyle: fontStyle,
                textShadow: textShadow
            }
        }, children));
}; //Context


exports.Button = Button;
var HooksContext = (0, _react.createContext)();

var ContextProvider = function ContextProvider(_ref3) {
    var children = _ref3.children,
        value = _ref3.value;
    return _react.default.createElement(HooksContext.Provider, {
        value: value
    }, children);
};

exports.ContextProvider = ContextProvider;

var useValue = function useValue() {
    var value = (0, _react.useContext)(HooksContext);
    return value;
}; //CSS


exports.useValue = useValue;
var initCss = {
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
    jCont: "center" // flexWr, flexDir, flexGr, flexSh, flexBs, jSelf, aSelf,
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

};

var transformCss = function transformCss(_ref4) {
    var font = _ref4.font,
        lineH = _ref4.lineH,
        letS = _ref4.letS,
        _ref4$textA = _ref4.textA,
        textA = _ref4$textA === void 0 ? initCss.textA : _ref4$textA,
        bg = _ref4.bg,
        bgImg = _ref4.bgImg,
        bgSize = _ref4.bgSize,
        bgPos = _ref4.bgPos,
        bgRep = _ref4.bgRep,
        _ref4$aItems = _ref4.aItems,
        aItems = _ref4$aItems === void 0 ? initCss.aItems : _ref4$aItems,
        aCont = _ref4.aCont,
        jItems = _ref4.jItems,
        _ref4$jCont = _ref4.jCont,
        jCont = _ref4$jCont === void 0 ? initCss.jCont : _ref4$jCont,
        flexWr = _ref4.flexWr,
        flexDir = _ref4.flexDir,
        flexGr = _ref4.flexGr,
        flexSh = _ref4.flexSh,
        flexBs = _ref4.flexBs,
        jSelf = _ref4.jSelf,
        aSelf = _ref4.aSelf,
        gridCg = _ref4.gridCg,
        gridRg = _ref4.gridRg,
        gridAf = _ref4.gridAf,
        gridAc = _ref4.gridAc,
        gridAr = _ref4.gridAr,
        gridTc = _ref4.gridTc,
        gridTr = _ref4.gridTr,
        gridTa = _ref4.gridTa,
        m = _ref4.m,
        mt = _ref4.mt,
        mr = _ref4.mr,
        mb = _ref4.mb,
        ml = _ref4.ml,
        mx = _ref4.mx,
        my = _ref4.my,
        p = _ref4.p,
        pt = _ref4.pt,
        pr = _ref4.pr,
        pb = _ref4.pb,
        pl = _ref4.pl,
        px = _ref4.px,
        py = _ref4.py,
        vAlign = _ref4.vAlign,
        size = _ref4.size,
        width = _ref4.width,
        height = _ref4.height,
        bdT = _ref4.bdT,
        bdR = _ref4.bdR,
        bdL = _ref4.bdL,
        bdB = _ref4.bdB,
        bdColor = _ref4.bdColor,
        bdWidth = _ref4.bdWidth,
        bdStyle = _ref4.bdStyle,
        bdRa = _ref4.bdRa,
        boxSh = _ref4.boxSh,
        textSh = _ref4.textSh,
        pos = _ref4.pos,
        props = _objectWithoutProperties(_ref4, ["font", "lineH", "letS", "textA", "bg", "bgImg", "bgSize", "bgPos", "bgRep", "aItems", "aCont", "jItems", "jCont", "flexWr", "flexDir", "flexGr", "flexSh", "flexBs", "jSelf", "aSelf", "gridCg", "gridRg", "gridAf", "gridAc", "gridAr", "gridTc", "gridTr", "gridTa", "m", "mt", "mr", "mb", "ml", "mx", "my", "p", "pt", "pr", "pb", "pl", "px", "py", "vAlign", "size", "width", "height", "bdT", "bdR", "bdL", "bdB", "bdColor", "bdWidth", "bdStyle", "bdRa", "boxSh", "textSh", "pos"]);

    return _objectSpread({
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
        width: size ? size : width,
        height: size ? size : height,
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
        position: pos
    }, props);
};