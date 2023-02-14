import React from "react"
import { featured } from "./data"

const FeaturedCard = () => {
  return (
    <>
      <div className='content grid5 mtop' style={{display: 'flex', padding: 50, paddingLeft:10, paddingRight:10, justifyContent: "space-between"}}>
        {featured.map((items, index) => (
          <div className='box' key={index}>
            <img src={items.cover} alt='' />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
            &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard