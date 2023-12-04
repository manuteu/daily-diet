import { View, Text } from 'react-native'
import React from 'react'
import { Svg, Path } from 'react-native-svg'

export default function Plus() {
  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 7C0.25 6.68934 0.50184 6.4375 0.8125 6.4375H13.1875C13.4982 6.4375 13.75 6.68934 13.75 7C13.75 7.31066 13.4982 7.5625 13.1875 7.5625H0.8125C0.50184 7.5625 0.25 7.31066 0.25 7Z" fill="white" />
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M7 0.25C7.31066 0.25 7.5625 0.50184 7.5625 0.8125V13.1875C7.5625 13.4982 7.31066 13.75 7 13.75C6.68934 13.75 6.4375 13.4982 6.4375 13.1875V0.8125C6.4375 0.50184 6.68934 0.25 7 0.25Z" fill="white" />
    </Svg>
  )
}