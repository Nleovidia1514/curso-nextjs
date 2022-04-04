import Link from 'next/link'
import React from 'react'
import { Anchor, Nav } from './styles'

export default function Navbar() {
  return (
    <Nav>
      <Link href="/">
        <Anchor>Home</Anchor>
      </Link>
      <Link href="/about">
        <Anchor>About</Anchor>
      </Link>
    </Nav>
  )
}
