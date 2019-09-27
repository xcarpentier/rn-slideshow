import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { Slide } from './Slide'
import { Row } from './Row'
import Animated from 'react-native-reanimated'
import { useTheme } from './theming'

const { Extrapolate } = Animated

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
    top: undefined,
    height: '35%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  dotContainer: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    justifyContent: 'center',
  },
  dotActive: {
    opacity: 1,
  },
  dot: {
    marginHorizontal: 5,
    marginBottom: 38,
    width: 7,
    height: 7,
    borderRadius: 3.5,
  },
})

const getDotInterpolate = (
  animatedDot: Animated.Value<number>,
  index: number,
) => {
  const inputRange = [index - 1, index, index + 1]
  const outputRange = [0, 1, 0]

  return animatedDot.interpolate({
    inputRange,
    outputRange,
    extrapolate: Extrapolate.CLAMP,
  })
}

const getDotInterpolateScale = (
  animatedDot: Animated.Value<number>,
  index: number,
) => {
  const inputRange = [index - 1, index, index + 1]
  const outputRange = [1, 1.2, 1]

  return animatedDot.interpolate({
    inputRange,
    outputRange,
    extrapolate: Extrapolate.CLAMP,
  })
}

interface DotContainer {
  slides: Slide[]
  animatedDot: Animated.Value<number>
}
export function DotContainer({ slides, animatedDot }: DotContainer) {
  const slideRange: number[] = [...Array(slides.length).keys()]
  const theme = useTheme()
  return (
    <>
      <View style={styles.container} pointerEvents="none">
        <Row style={styles.dotContainer}>
          {slideRange.map(level => (
            <View
              key={`dot-${level}`}
              style={[styles.dot, { backgroundColor: theme.primaryColorLLL }]}
            />
          ))}
        </Row>
        <Row style={styles.dotContainer}>
          {slideRange.map(level => (
            <Animated.View
              key={`dotOverlay-${level}`}
              style={[
                styles.dot,
                styles.dotActive,
                { backgroundColor: theme.primaryColor },
                {
                  opacity: getDotInterpolate(animatedDot, level),
                  transform: [
                    {
                      scaleX: getDotInterpolateScale(animatedDot, level),
                    },
                    {
                      scaleY: getDotInterpolateScale(animatedDot, level),
                    },
                  ],
                } as any,
              ]}
            />
          ))}
        </Row>
      </View>
    </>
  )
}
