import AvoCard from '@components/AvoCard/AvoCard'
import React from 'react'
import { Container } from './styles'

const ListOfAvos = ({ avos }: { avos: TProduct[] }) => {
  return (
    <Container>
      {avos.map((av) => (
        <AvoCard key={av.id} avo={av} />
      ))}
    </Container>
  )
}

export default ListOfAvos
