import React from 'react'
import { Svg, Path } from 'react-native-svg'

type Props = {
  color: string
}

export default function Arrow({ color }: Props) {
  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M13.5303 0.46967C13.8232 0.762563 13.8232 1.23744 13.5303 1.53033L1.53033 13.5303C1.23744 13.8232 0.762563 13.8232 0.46967 13.5303C0.176777 13.2374 0.176777 12.7626 0.46967 12.4697L12.4697 0.46967C12.7626 0.176777 13.2374 0.176777 13.5303 0.46967Z" fill={color} />
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 1C2.5 0.585786 2.83579 0.25 3.25 0.25H13C13.4142 0.25 13.75 0.585786 13.75 1V10.75C13.75 11.1642 13.4142 11.5 13 11.5C12.5858 11.5 12.25 11.1642 12.25 10.75V1.75H3.25C2.83579 1.75 2.5 1.41421 2.5 1Z" fill={color} />
    </Svg>
  )
}