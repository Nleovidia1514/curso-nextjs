import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'

const ProductPage = () => {
  const {
    query: { id },
  } = useRouter()

  const [product, setProduct] = useState<TProduct>()

  useEffect(() => {
    if (id) {
      fetch(`/api/avo/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data)
        })
    }
  }, [id])

  return (
    <section>
      <h1>Página producto: {id}</h1>
      <h1>{product?.name}</h1>
      <img src={product?.image}></img>
    </section>
  )
}

export default ProductPage
