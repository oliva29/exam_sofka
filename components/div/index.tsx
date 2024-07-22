import { View, DimensionValue, StyleProp, ViewStyle, TextStyle, ImageStyle } from "react-native";


export interface SpacingPropsType {
    m?:  DimensionValue | undefined;
    mt?: DimensionValue | undefined;
    mr?: DimensionValue | undefined;
    mb?: DimensionValue | undefined;
    ml?: DimensionValue | undefined;
    mx?: DimensionValue | undefined;
    my?: DimensionValue | undefined;
    ms?: DimensionValue | undefined;
    p?:  DimensionValue | undefined;
    pt?: DimensionValue | undefined;
    pr?: DimensionValue | undefined;
    pb?: DimensionValue | undefined;
    pl?: DimensionValue | undefined;
    px?: DimensionValue | undefined;
    py?: DimensionValue | undefined;
    ps?: DimensionValue | undefined;
}

interface PropsDiv extends SpacingPropsType {
    children: React.ReactNode;   
    bg?: string,
    flex?: number
    style?: StyleProp<ViewStyle | TextStyle | ImageStyle>; 
};

export default function Div(props: PropsDiv){
    const { mb, ml, mr, mt, mx, my, m } = props;
    const { pb, pl, pr, pt, px, py, p } = props;
    const { children, bg , flex, styles } = props;
    const stylesView = {
        marginBottom: mb,
        marginLeft: ml,
        marginRight: mr,
        marginTop: mt,
        marginHorizontal: my,
        marginVertical: mx,
        margin: m,
        paddingBottom: pb,
        paddingLeft: pl,
        paddingRight: pr,
        paddingTop: pt,
        paddingHorizontal: px,
        paddingVertical: py,
        padding: p, 
        backgroundColor: bg,
        ...styles
    }

    const stylesWithFlex = flex ? {...stylesView, flex} : stylesView;
    
    return (
        <View style={stylesWithFlex}>
            {children}
        </View>
    )
}