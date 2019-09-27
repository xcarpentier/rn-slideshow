import * as React from 'react'
import {
  StyleSheet,
  ViewProps,
  Button,
  NativeSyntheticEvent,
  NativeTouchEvent,
  ButtonProps,
} from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import Animated from 'react-native-reanimated'
import { Slide } from './Slide'
import { Row } from './Row'
import { useTheme } from './theming'

const styles = StyleSheet.create({
  footer: {
    ...StyleSheet.absoluteFillObject,
    top: undefined,
    backgroundColor: 'white',
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'space-around',
    width: '100%',
    paddingBottom: 15 + getBottomSpace(),
    backgroundColor: 'transparent',
  },
  dotActive: {
    backgroundColor: 'red',
    opacity: 1,
  },
  dot: {
    marginHorizontal: 5,
    marginBottom: 38,
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: 'pink',
  },
})

interface FooterProps {
  buttons: ButtonProps[]
}

export function Footer({ buttons }: FooterProps) {
  const theme = useTheme()
  return (
    <Row style={styles.buttonContainer}>
      {buttons.map((buttonProps: ButtonProps, i: number) => (
        <Button
          color={theme.primaryColor}
          key={`${buttonProps.title}-${i}`}
          testID={buttonProps.title}
          {...{ ...buttonProps }}
        />
      ))}
    </Row>
  )
}
