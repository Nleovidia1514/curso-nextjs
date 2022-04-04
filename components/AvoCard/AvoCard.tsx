import Link from 'next/link'
import React from 'react'
import { Card, Image, Section, SectionName, SectionPrice } from './styles'

const AvoCard = ({ avo }: { avo: TProduct }) => {
  return (
    <Link href={`/product/${avo.id}`}>
      <Card>
        <Image src={avo.image} />
        <Section>
          <SectionName>{avo.name}</SectionName>
          <SectionPrice>{avo.price} $</SectionPrice>
        </Section>
      </Card>
    </Link>
  )
}

export default AvoCard
