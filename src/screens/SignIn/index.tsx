import React from 'react'
import { Container, Slogan, Title } from './styles'
import backgroundImg from '../../assets/background.png'
import Button from '../../components/Button'

export default function SignIn() {
  return (
    <Container source={backgroundImg}>
      <Title>IgniteFleet</Title>
      <Slogan>Gestão de uso de veículos</Slogan>

      <Button title='Entrar com Google' />
    </Container>
  )
}