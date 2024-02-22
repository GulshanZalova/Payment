import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Item.css'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import MainContext from '../../context/context';


const Item = ({ item }) => {
    const { addToBasket } = useContext(MainContext)
    const createRating = () => {
        let stars = []
        for (let j = 0; j < Math.floor(item.rating); j++) {
            stars.push("tam")
        }
        if (item.rating - Math.floor(item.rating) != 0) {
            stars.push("yarim")
        }
        else {
            stars.push("bos")
        }
        return stars
    }
    return (
        <div className="card" >
            <img className="card-img-top" src={item.thumbnail} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className='card-text'>{item.price} AZN</p>
                <Link to={`/${item.id}`}>Detail</Link> <br />
                <div>
                    {
                        createRating().map((item, index) => {
                            return (item == "tam" ? <FaStar key={index} className='star' /> : item == "yarim" ? <FaStarHalfAlt key={index} className='star' /> : <FaRegStar key={index} className='star' />)
                        })
                    }
                </div>
                <button className='btn btn-warning mt-2' onClick={() => {
                    addToBasket(item)
                }}>Add To Basket</button>
            </div>
        </div>
    )
}

export default Item