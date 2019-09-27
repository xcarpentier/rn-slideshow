import * as React from 'react'
import { View, StyleSheet, Dimensions, ButtonProps } from 'react-native'
import { SlideComponent } from './SlideComponent'
import { Slide } from './Slide'
import { Footer } from './Footer'
import { DotContainer } from './DotContainer'
import Animated from 'react-native-reanimated'
import { Theme, ThemeProvider, DEFAULT_THEME } from './theming'

const { width } = Dimensions.get('window')
const { Value, Extrapolate, event, divide, set, block } = Animated

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
})

const getSlideInterpolate = (
  animatedScroll: Animated.Value<number>,
  i: number,
) => {
  const inputRange = [i - 1 * width, i * width, (i + 1) * width]
  const outputRange = i === 0 ? [0, 0, 150] : [-300, 0, 150]

  return animatedScroll.interpolate({
    inputRange,
    outputRange,
    extrapolate: Extrapolate.CLAMP,
  })
}

export interface OnBoardProps {
  slides: Slide[]
  callToActions?: ButtonProps[]
  theme?: Theme
}

export function Slideshow({ slides, callToActions, theme }: OnBoardProps) {
  const animatedScroll = new Value(0)

  const animatedDot = new Value(0)

  const onScroll = event([
    {
      nativeEvent: ({ contentOffset }: any) =>
        block([
          set(animatedScroll, contentOffset.x),
          set(animatedDot, divide(contentOffset.x, width)),
        ]),
    } as any,
  ])

  return (
    <ThemeProvider theme={{ ...DEFAULT_THEME, ...theme }}>
      <View style={styles.container}>
        <Animated.ScrollView
          horizontal
          bounces={false}
          scrollsToTop={false}
          pagingEnabled
          decelerationRate="fast"
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          onScroll={onScroll}
        >
          {slides.map((slide, i) => (
            <SlideComponent
              key={slide.title}
              translateX={getSlideInterpolate(animatedScroll, i)}
              {...slide}
            />
          ))}
        </Animated.ScrollView>
        <DotContainer {...{ slides, animatedDot }} />
        <Footer buttons={callToActions || []} />
      </View>
    </ThemeProvider>
  )
}
