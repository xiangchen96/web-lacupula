import React from "react"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div className="text-6xl">
      <p className="font-bold">Pide la mejor comida China de Caleta...</p>
      <p className="font-light">¡desde casa!</p>
      <div className="py-2 w-full overflow-hidden" style={{ maxHeight: 450 }}>
        <img src="rice.gif" />
      </div>
    </div>
  </Layout>
)

export default IndexPage
