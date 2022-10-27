import React, { useEffect, useState } from 'react';
import logo from '../../assets/img/logo.svg'






function Navbar() {
    let [menu, setMenu] = useState('')
    useEffect(() => {
        const el = document.querySelector('.menu-wrapper');
        setMenu(el)
        console.log(el);
    }, [])

    let [aside, setAside] = useState('')
    useEffect(() => {
        const el = document.querySelector('.aside-wrp');
        setAside(el)
        console.log(el);
    }, [])

    let [close, setClose] = useState('')
    useEffect(() => {
        // 👇️ use document.getElementById()
        const el = document.querySelector('.menu-wrapper');
        setClose(el)
    }, [])

    return (
        <>
            <div className="containers container1">

                <img src={logo} alt='logo' className='site-logo' />

                {/* Left Part started*/}
                <div className="menu-wrapper">
                    <i class="fa-solid fa-xmark" onClick={() => {

                        close.style.transform = 'translateY(-150vh)'
                        close.style.boxShadow = 'none'
                    }}></i>
                    <div className="left-wrapper">
                        <div className="work-times">
                            <i class="fa-solid fa-clock"></i>
                            <p>Пн-Пт с 10:00 до 20:00
                                Сб-Вс с 10:00 до 19:00</p>
                        </div>
                        <div className="our-salone">
                            <i class="fa-solid fa-compass"></i>
                            <a href="#">
                                Наши салоны
                            </a>
                        </div>
                    </div>
                    {/* Left Part ended */}
                    <ul className='mobile-nav'>
                        <li><a href="#" className='nn'>О нас</a></li>
                        <li><a href="#" className='nn'>3D-моделирование</a></li>
                        <li><a href="#" className='nn'>Покупателю</a></li>
                        <li><a href="#" className='nn'>Доставка и оплата</a></li>
                    </ul>
                    {/* Center Part started */}
                    {/* Center Part ended */}

                    {/* Right Part started */}
                    <div className="right-wrapper">
                        <div className="sale-phone first-numbers">
                            <p> Отдел продаж:</p>
                            <div className="wrap">
                                <i class="fa-solid fa-phone"></i>
                                <p className="numbers"> <span>8 (495) 664-54-57</span><span>8 (929) 928-86-35</span></p>
                            </div>
                        </div>

                        <div className="sale-phone">
                            <p> Звонки по Росии:</p>
                            <div className="wrap">
                                <i class="fa-solid fa-phone"></i>
                                <p className="numbers"> <span> 8-800-000-00-00 </span><span className='c-red'>Бесплатно</span></p>
                            </div>
                        </div>

                    </div>
                </div>

                <i class="fa-solid fa-bars" onClick={
                    () => {

                        menu.style.transform = 'translateY(0)'
                        menu.style.boxShadow = '0px 0px 10000px black'

                    }
                }></i>
                {/* Right Part ended */}
            </div>

            <nav >
                <div className='containers container2'>

                    <ul>
                        <li><a href="#" id='current' onClick={
                            ()=>{
                                if(window.innerWidth<850){
                                    aside.classList.toggle('none');
                                    console.log('sdfsd');
                                }
                            }
                        }>Каталог<i class="fa-solid fa-caret-down"></i></a></li>
                        <li><a href="#" className='nn'>О нас</a></li>
                        <li><a href="#" className='nn'>3D-моделирование</a></li>
                        <li><a href="#" className='nn'>Покупателю</a></li>
                        <li><a href="#" className='nn'>Доставка и оплата</a></li>
                    </ul>

                    <div className="search">
                        <input type="text" placeholder='Поиск по сайту...' />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>

            </nav>





        </>
    );
}

export default Navbar;