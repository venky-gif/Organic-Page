import React from 'react'
import desImg from './assets/des.jpg'

const des = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-80 flex items-center justify-center"
      style={{ backgroundImage: `url(${desImg})`, backgroundSize: 'cover' }}
    >
      <div className="text-white text-center">
        <h2 className="font-bold mb-4 text-5xl font-sans">Fresh & Non-GMO Products</h2> 
        <h4 className="text-xl">Explore our amazing features and much more!</h4> 
        
      </div>
    </div>
  )
}

export default des
