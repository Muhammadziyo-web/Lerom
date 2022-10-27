import React, { useEffect, useState } from 'react';
import cardImg from '../../assets/img/image_4.png'
import color1 from '../../assets/img/Rectangle 37.png'
import color2 from '../../assets/img/Rectangle 38.png'
import color3 from '../../assets/img/Rectangle 39.png'
import color4 from '../../assets/img/Rectangle 40.png'
import color5 from '../../assets/img/Rectangle 41.png'
import color6 from '../../assets/img/Rectangle 42.png'

function Card() {

    let [card, setCard] = useState('')
    useEffect(() => {
        const el = document.querySelector('.card');
        setCard(el)
    }, [])

    return (
        <div className="card" onMouseOver={
            (e) => {
                e.target.matches('.card') ? e.target.height = '300px' : console.log('false');;
            }
        }>
            <img src={cardImg} className='card-img' />
            <p className='product-id'>АН-2801</p>
            <p className='product-sizes'>в 1462    ш 360     г 352</p>
            <p className='color'>Цвет: <span id='product-color'>дуб</span></p>
            <span className='colors-ex'>
                <span><img src={color1} alt="img" /></span>
                <span><img src={color2} alt="img" /></span>
                <span><img src={color3} alt="img" /></span>
                <span><img src={color4} alt="img" /></span>
                <span><img src={color5} alt="img" /></span>
                <span><img src={color6} alt="img" /></span>
                <span><img src={color3} alt="img" /></span>
                <span><img src={color4} alt="img" /></span>
                <span><img src={color5} alt="img" /></span>
            </span>
            <h3 id='price'>6 284 ₽ </h3>

            <button className='card-btn'>Купить</button>
        </div>
    );
}

export default Card;