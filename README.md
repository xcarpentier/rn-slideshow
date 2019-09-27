# rn-slideshow

Slideshow with expo, theming, customizable footer, etc

# Install

`yarn add rn-slideshow`

# Usage

```tsx
import React from 'react'
import { Slideshow } from 'rn-slideshow'

export default function App() {
  return (
    <View style={styles.container}>
      <OnBoard
        theme={{ primaryColor: 'green', primaryColorLLL: 'lightgreen' }}
        callToActions={[
          { title: 'Log in', onPress: () => {} },
          { title: 'Sign in', onPress: () => {} },
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
        ]}
      />
    </View>
  )
}
```
