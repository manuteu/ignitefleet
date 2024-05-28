import { View, Text, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { Container, Loading, Title } from './styles'

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
}

export default function Button({ title, isLoading, ...rest }: Props) {
  return (
    <Container
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      {isLoading
        ? <Loading />
        : <Title>{title}</Title>
      }
    </Container>
  )
}