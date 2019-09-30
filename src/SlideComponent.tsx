import * as React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Animated from 'react-native-reanimated'
import { Slide } from './Slide'
import { useTheme } from './theming'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    width,
    height: '100%',
    overflow: 'hidden',
  },
  image: {
    height: '70%',
    width: '100%',
  },
  titleContainer: {
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
  },
})

export function SlideComponent({
  imageSource,
  title,
  translateX,
}: Slide & { translateX?: Animated.Node<number> }) {
  const animatedStyle = {
    transform: [{ translateX }],
  }
  const theme = useTheme()
  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styles.image, animatedStyle as any]}
        source={imageSource}
        resizeMode="cover"
      />
      <View style={styles.titleContainer}>
        <Text
          style={{
            color: theme.onBackgroundTextColor,
            fontSize: theme.fontSize,
            fontFamily: theme.fontFamily,
          }}
        >
          {title || ''}
        </Text>
      </View>
    </View>
  )
}
