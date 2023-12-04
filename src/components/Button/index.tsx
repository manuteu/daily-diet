import React from 'react'
import { ButtonTypeStyleProps, ButtonVariantProps, Container, Content, Text } from './styles'
import Plus from '@icons/Plus'

interface Props {
  variant: ButtonVariantProps
  type: ButtonTypeStyleProps
}

export default function Button({ variant, type, ...rest }: Props) {
  return (
    <Container {...rest} type={type} variant={variant}>
      <Content>
        <Plus />
        <Text variant={variant}>Nova refeição</Text>
      </Content>
    </Container>
  )
}