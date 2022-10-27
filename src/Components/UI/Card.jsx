import React, { useEffect, useState } from 'react';
import cardImg from '../../assets/img/image_4.png'

function Card() {

    let [card, setCard] = useState('')
    useEffect(() => {
        const el = document.querySelector('.card');
        setCard(el)
    }, [])

    return (
        <div className="card" onMouseOver={
            (e) => {
                e.target.matches('.card')? e.target.height='300px':console.log('false');;
            }
        }>
            <img src={cardImg} className='card-img' />
            <p className='product-id'>АН-2801</p>
            <p className='product-sizes'>в 1462    ш 360     г 352</p>
            <p className='color'>Цвет: <span id='product-color'>дуб</span></p>
            <span className='colors-ex'>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
            </span>
            <h3 id='price'>6 284 ₽ </h3>

            <button className='card-btn'>Купить</button>
        </div>
    );
}

export default Card;