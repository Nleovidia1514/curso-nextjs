import Link from 'next/link'
import React from 'react'
import { Anchor, Container, Grid } from './styles'

const Footer = () => {
  return (
    <Container>
      <Grid>
        <div>
          <h4>Nosotros</h4>
          <Link href={'/about'}>
            <Anchor>Conoce más</Anchor>
          </Link>
        </div>
        <div>
          <h4>Servicios</h4>
          <Link href={'/'}>
            <Anchor>Todos los productos</Anchor>
          </Link>
        </div>
        <div>
          <h4>Hecho para</h4>
          <p>Platzi y su curso de Next.JS de Platzi dictado por @jonalvarezz</p>
        </div>
      </Grid>
    </Container>
  )
}

export default Footer
