import React from 'react'
import { Avatar, Container, Header, Text } from './styles'
import PercentCard from '@components/PercentCard'
import Logo from '@components/Logo'
import AvatarPng from '@assets/avatar.png'
import Button from '@components/Button'

export default function Home() {
  return (
    <Container>
      <Header>
        <Logo />
        <Avatar source={AvatarPng}/>
      </Header>
      <PercentCard />
      <Text>Refeições</Text>
      <Button />
    </Container>
  )
}