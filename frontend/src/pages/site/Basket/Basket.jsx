import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios'
const Basket = () => {
    const { basketItems, setBasketItems, addToBasket, removeFromBasket, deleteItemFromBasket } = useContext(MainContext)
    let totalPrice = 0
    const publishKey="pk_test_51OmLmPDEw5jujyaHVkRz7lFlScFspXxom4DdylzwFt1sFn02XQllLNTodG3v7tzt24DxIQWMKUROuWx51cFN8ttW00Be0y6TE3"
    // const createOrder = (items, totalPrice) => {
    //     axios.post("http://localhost:3000/orders", { items: items, totalPrice: totalPrice, status: "pending" }).then(res => {
    //         console.log(res)
    //     })
    // }

    const handleCheckOut= async()=>{
        const productsContent={
            products:basketItems
        }
        const stripe= await loadStripe(publishKey)

        
      const res = await axios.post(`http://localhost:5000/payment`, productsContent);
    //   console.log(res.)
    //   if (!res.ok) {
    //     console.log("Ödeme işlemi başarısız oldu.");
    //   }
    //   const session = await res.data.json();

      const result = await stripe.redirectToCheckout({
        sessionId: res.data.id,
      });
   console.log(result)
      if (result.error) {
        throw new Error(result.error.message);
      }
    }


    return (
        <React.Fragment>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">image</th>
                        <th scope="col">title</th>
                        <th scope="col">price</th>
                        <th scope="col">Decrease</th>
                        <th scope="col">Count</th>
                        <th scope="col">Increase</th>
                        <th scope="col">totalPrice</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        basketItems.map((item, index) => {
                            totalPrice += item.totalPrice
                            return (<tr key={index}>
                                <th scope="row">{item._id}</th>
                                <th scope="row"><img src={item.product.thumbnail} width={"100px"} height={"100px"} alt="" /></th>
                                <td>{item.product.title}</td>
                                <td>{item.product.price} AZN</td>
                                <td><button disabled={item.count == 1 ? true : false} className='btn btn-danger' onClick={() => {
                                    removeFromBasket(item)
                                }}>-</button></td>
                                <td>{item.count}</td>
                                <td><button className='btn btn-primary' onClick={() => {
                                    addToBasket(item)
                                }}>+</button></td>
                                <td>{item.totalPrice} AZN</td>
                                <td><button className='btn btn-danger' onClick={() => {
                                    deleteItemFromBasket(item)
                                }}>Delete</button></td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
            <h1>Total Price:{totalPrice}AZN</h1>
            <button onClick={() => {
                handleCheckOut()
            }}>CheckOut</button>
        </React.Fragment>
    )
}

export default Basket