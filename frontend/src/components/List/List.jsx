import React, { useContext } from 'react'
import MainContext from '../../context/context'
import Item from '../Item/Item'
import "./List.css"
const List = () => {
    const { data, setData, addToBasket } = useContext(MainContext)
    return (
        <div className='container'>
            <div className="row">
                {
                    data.map((item, index) => {
                        return (
                            <div className='col-3 mb-5' key={index}>
                                <Item item={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default List