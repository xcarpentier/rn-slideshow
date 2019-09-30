import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { Slideshow } from './src/index'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Slideshow
        callToActions={[
          { title: 'Log in', onPress: () => alert('Tap on login') },
          { title: 'Sign in', onPress: () => alert('Tap on sign in') },
        ]}
        slides={[
          {
            title: 'Photo 1',
            imageSource: {
              uri:
                'https://a0.muscache.com/im/pictures/d0e6c96e-b81c-4e90-85d2-f1188a708e55.jpg?aki_policy=xx_large',
            },
          },
          {
            title: 'Photo 2',
            imageSource: {
              uri:
                'https://a0.muscache.com/im/pictures/4347c99f-b45c-4d3e-8b25-04590ff6bcbe.jpg?aki_policy=xx_large',
            },
          },
          {
            title: 'Photo 3',
            imageSource: {
              uri:
                'https://a0.muscache.com/im/pictures/861f6982-9fee-4de2-a7c3-2e2545f7f9ba.jpg?aki_policy=xx_large',
            },
          },
          {
            title: 'Photo 4 with more',
            imageSource: require('./assets/local_image.png'),
          },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
