import React from 'react';


function content(props) {

  const Products =[
    {name:"Macbook", price:"966$"},
    {name:"Oneplus", price:"266$"},
    {name:"Iphone", price:"766$"}
  ]

  

  
  
  

  return (
    <div>
      <h2>Product name:{Products.name}</h2>
      
   {
    Products.map(product=><li>{product.name}</li>)
   }
  
 
    
    </div>
  );
}


export default content;