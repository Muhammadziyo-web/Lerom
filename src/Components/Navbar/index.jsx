import logo from '../../assets/img/logo.svg'





function Navbar() {
    return (
        <>
            <div className="containers container1">

                {/* Left Part started*/}
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

                {/* Center Part started */}
                <img src={logo} alt='logo' className='site-logo' />
                {/* Center Part ended */}

                {/* Right Part started */}
                <div className="right-wrapper">
                    <div className="sale-phone">
                        <p> Отдел продаж:</p>
                        <i class="fa-solid fa-phone"></i>
                        <p className="numbers"> <span>8 (495) 664-54-57</span><span>8 (929) 928-86-35</span></p>
                    </div>

                    <div className="sale-phone">
                        <p> Звонки по Росии:</p>
                        <i class="fa-solid fa-phone"></i>
                        <p className="numbers"> <span> 8-800-000-00-00 </span><span className='c-red'>Бесплатно</span></p>
                    </div>

                </div>

                <i class="fa-solid fa-bars"></i>
                {/* Right Part ended */}
            </div>

            <nav >
                <div className='containers container2'>

                    <ul>
                        <li><a href="#" id='current'>Каталог<i class="fa-solid fa-caret-down"></i></a></li>
                        <li><a href="#">О нас</a></li>
                        <li><a href="#">3D-моделирование</a></li>
                        <li><a href="#">Покупателю</a></li>
                        <li><a href="#">Доставка и оплата</a></li>
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