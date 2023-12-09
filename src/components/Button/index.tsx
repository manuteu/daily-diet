import React from 'react'
import { TypeColorProps, ButtonVariantProps, Container, Content, Text } from './styles'
import { TouchableOpacityProps } from 'react-native'

type Props = {
  variant: ButtonVariantProps
  type: TypeColorProps;
  title: string;
  icon?: React.ReactNode
} & TouchableOpacityProps

export default function Button({ variant, type, title, icon, ...rest }: Props) {
  return (
    <Container {...rest} type={type} variant={variant}>
      <Content>
        {icon}
        <Text variant={variant}>{title}</Text>
      </Content>
    </Container>
  )
}