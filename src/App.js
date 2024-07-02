import React from 'react'
import Card from './Component/Card'
import "./App.css"

const App = () => {
  const image1= "https://ng.jumia.is/cms/0-6-anniversary/2024/Collections/Thunbmails/Artboard_1_copy_6.png"
  const image2= "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/3576032/1.jpg?8520"
  const image3= "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/190096/1.jpg?6874"
  const image4= "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/0871212/1.jpg?3612"
  return (
    <>
     <main>
      <h1>All Products</h1>
      <div className='card-container'>
      <Card image={image1} name="Addidas DML1" price="75,000" description="A nice white Addidas Sneeker"/>
      <Card image={image2} name="Nice facecap" price="25,000" description="A beautiful facecap"/>
      <Card image={image3} name="kids school shoe" price="55,000" description="A beautiful kids school shoe"/>
      <Card image={image4} name="Babygirl ball dress" price="45,000" description="Girl's Party Princess Dress Ball Gown"/>
      </div>
    


    </main>
    
     
    </>
  )
}

export default App
