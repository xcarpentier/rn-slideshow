import * as React from 'react'

export interface SliderContextParam {
  moveTo?(page: number): void
}

export const SliderContext = React.createContext<SliderContextParam>({})
