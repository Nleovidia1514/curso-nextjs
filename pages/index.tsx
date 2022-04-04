import ListOfAvos from '@components/ListOfAvos/ListOfAvos'
import { DocumentContext } from 'next/document'
import React, { useEffect, useState } from 'react'
import fetch from 'isomorphic-unfetch'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    fetch('/api/avo')
      .then((res) => res.json())
      .then(({ data }) => {
        setProductList(data)
      })
  }, [])

  useEffect(() => {}, [])
  return (
    <div className="padding">
      <ListOfAvos avos={productList} />
    </div>
  )
}

// export async function getServerSideProps(context: DocumentContext) {
//   const res = await fetch('http://localhost:3000/api/avo')
//   const { data: avos } = await res.json()

//   return {
//     props: {
//       avos,
//     }
//   }
// }

export default HomePage
