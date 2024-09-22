import React,{useState} from 'react'
import { useCart } from '../components/ContextProvider';


const Shoppingcart = () => {
  const { cart,data } = useCart();
  // const [products, setProducts] = useState(data)
  // const cartDispla =(id)= products.filter((product)=>{
  //   product.id === id
  //   setProducts(cartDispla)
  // });
  return (
    <div>
      <h1>Shopping Cart</h1>
      {/* {cartDispla} */}
      {/* <ul style={{border:"2px solid #000",width:"500px",textAlign:"center"}}></ul>
      {
        data.map((item,idx)=>{
          return(
            <div key={idx}>
              <img src={item.imageUrl} alt="" />
            </div>
          )
        })
      } */}
      
    </div>
  )
}

export default Shoppingcart
