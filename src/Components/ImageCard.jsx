import React from 'react'
import '../Styles/ImageCard.css'
const ImageCard = ({data,name,price}) => {
    
  return (
    <div className='card-main-div'>
      <img src={data} alt='Image'/>
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  )
}

export default ImageCard
