import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
    absolute: {
      position: 'absolute',
    },
    aiCenter: {
      alignItems: 'center',
    },
    aiEnd: {
      alignItems: 'flex-end',
    },
    aiStart: {
      alignItems: 'flex-start',
    },
    alignSelfCenter: {
      alignSelf: 'center',
    },
    alignSelfEnd: {
      alignSelf: 'flex-end',
    },
    alignSelfStart: {
      alignSelf: 'flex-start',
    },
    autoWidthAdjust: {
      flexBasis: 'auto',
      flexGrow: 1,
      flexShrink: 1,
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    disabledAction: {
      opacity: 0.4,
    },
    equalAspectRatio: {
      aspectRatio: 1,
    },
    fixedBottom: {
      bottom: 0,
      position: 'absolute',
    },
    fixedLeft: {
      left: 0,
      position: 'absolute',
    },
    fixedRight: {
      position: 'absolute',
      right: 0,
    },
    fixedTop: {
      position: 'absolute',
      top: 0,
    },
    flex0: {
      flex: 0,
    },
    flex1: {
      flex: 1,
    },
    flexColumn: {
      flexDirection: 'column',
    },
    flexColumnCenter: {
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    flexColumnReverse: {
      flexDirection: 'column-reverse',
    },
    flexGrow0: {
      flexGrow: 0,
    },
    flexGrow1: {
      flexGrow: 1,
    },
    flexRow: {
      flexDirection: 'row',
    },
    flexRowCenter: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    flexRowReverse: {
      flexDirection: 'row-reverse',
    },
    flexShrink0: {
      flexShrink: 0,
    },
    flexShrink1: {
      flexShrink: 1,
    },
    fullHeight: {
      height: '100%',
    },
    fullWidth: {
      width: '100%',
    },
    halfHeight: {
      height: '50%',
    },
    halfWidth: {
      width: '50%',
    },
    hide: {
      display: 'none',
    },
    invertHorizontal: {
      transform: [{ scaleX: -1 }],
    },
    invertVertical: {
      transform: [{ scaleY: -1 }],
    },
    invisible: {
      opacity: 0,
    },
    jcCenter: {
      justifyContent: 'center',
    },
    jcEnd: {
      justifyContent: 'flex-end',
    },
    jcStart: {
      justifyContent: 'flex-start',
    },
    mB0: {
      marginBottom: 0,
    },
    mBAuto: {
      marginBottom: 'auto',
    },
    mLAuto: {
      marginLeft: 'auto',
    },
    mRAuto: {
      marginRight: 'auto',
    },
    mT0: {
      marginTop: 0,
    },
    mTAuto: {
      marginTop: 'auto',
    },
    mhAuto: {
      marginHorizontal: 'auto',
    },
    mvAuto: {
      marginVertical: 'auto',
    },
    noWrap: {
      flexWrap: 'nowrap',
    },
    pB0: {
      paddingBottom: 0,
    },
    pT0: {
      paddingTop: 0,
    },
    relative: {
      position: 'relative',
    },
    spread: {
      justifyContent: 'space-between',
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
    transparent: {
      backgroundColor: 'transparent',
    },
    visible: {
      opacity: 1,
    },
    visibleAction: {
      opacity: 0.8,
    },
    wdAuto: {
      width: 'auto',
    },
    wrap: {
      flexWrap: 'wrap',
    },
  });

export default commonStyles;
