import React from "react"
// import Heading from "./Heading"
import "./Cards.css"
import CardUI from "./CardUI"

const Featured = () => {
  return (
    <>
      <section className='featured background' style={{display: 'flex', justifyContent: "space-between"}}>
        <div className='container' style={{display: 'flex', justifyContent: "space-between"}}>
          {/* <Heading title='Featured Property Types' subtitle='Find All Type of Property.' /> */}
          <CardUI />
        </div>
      </section>
    </>
  )
}

export default Featured