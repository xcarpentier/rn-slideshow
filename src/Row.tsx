import * as React from 'react'
import { ViewProps, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export const Row = (props: ViewProps & { children?: React.ReactNode }) => (
  <View {...props} style={[styles.row, props.style]} />
)
