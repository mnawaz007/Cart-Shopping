import { useState } from 'react'
import cart from '/public/cart.jpg'
export default function Cart() {

  let [products, setProducts] = useState([
    {
      id: 1,
      title: "Krunch Burger 1",
      image: "krunch.png",
      price: 220,
      quantity: 3,
      description: "This is a longer card with supporting text below as a natural lead-in to additional content."
    },
    {
      id: 2,
      title: "Zinger Burger 2",
      image: "krunch.png",
      price: 530,
      quantity: 5,

      description: "This is a longer card with supporting text below as a natural lead-in to additional content."
    },
    {
      id: 3,
      title: "Mighty Zinger Burger 3",
      image: "krunch.png",
      price: 810,
      quantity: 6,

      description: "This is a longer card with supporting text below as a natural lead-in to additional content."
    },
    {
      id: 4,
      title: "Mighty Zinger Burger 4",
      image: "krunch.png",
      price: 410,
      quantity: 10,

      description: "This is a longer card with supporting text below as a natural lead-in to additional content."
    },
    {
      id: 5,
      title: "Mighty Zinger Burger 5",
      image: "krunch.png",
      price: 510,
      quantity: 12,

      description: "This is a longer card with supporting text below as a natural lead-in to additional content."
    },
    {
      id: 6,
      title: "Mighty Zinger Burger 6",
      image: "krunch.png",
      price: 610,

      quantity: 15,
      description: "This is a longer card with supporting text below as a natural lead-in to additional content."
    }
  ]);

  function updateQty(id, dx) {
    let nProducts = [...products]; // making copy of products array
    let index = nProducts.find(item => item.id === id); // find the item that is being clicked
    index.quantity += dx;  // adding or removing qty as per event condition (dx parameter)
    setProducts(nProducts); // update the state of products array
  }

  // function for deleting entire object
  function deleteItem(id) {
    // filter to filter out object by id number
    let index = products.filter(item => item.id !== id);    //(!== is for not showing that object)
    setProducts(index);  // update the state of products array


    //below code is not working
    if (index.length === 0) {
      return (
        <>
          <h1>No Products Found In Yor Cart</h1>
          <img src={cart} alt="cart" />
        </>
      )
    }

  }



  return (
    <>
    <div className="container">  
      <h1>Shopping cart</h1>
      <div className='row '>
       
        {
          products.map((product) => (
            <div className="col-md-6 col-lg-4"  key={product.id}>

              <div className='card'>

                <img className='img img-thumbnail rounded img-fluid' src={cart}></img>

                <div className='card-body'>
                  <button type="button" className="btn btn-sm btn-outline-success">price = {product.price}</button>

                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, quisquam!</p>
                  <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                    {/* Remove button */}
                    <button type="button" className="btn btn-sm btn-danger" onClick={() => updateQty(product.id, -1)} disabled={product.quantity === 1} >Remove</button>
                                        {/*  button */}
                    <button type="button" className="btn btn-sm btn-warning" disabled  >QTY= {product.quantity}</button>
                          {/* add button */}
                    <button type="button" className="btn btn-sm btn-success" onClick={() => updateQty(product.id, 1)} >Add</button>
                    <br />
                     {/* delete item button */}
                    <button type="button" className="btn btn-sm btn-sm btn-warning mx-3" onClick={() => deleteItem(product.id)} >Delete</button>
                         {/* total price .... */}
                  </div>
                    <h3 className="text-success text-center mt-3">Rs/{product.quantity * product.price}</h3>
                </div>
              </div>
            </div>)
          )}
         
      </div>
      </div>

    </>

  )
}