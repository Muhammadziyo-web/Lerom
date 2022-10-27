import { Route, Routes, NavLink } from "react-router-dom";
import Card from "../UI/Card";
import img1 from "../../assets/img/bgNN.svg";
import img2 from "../../assets/img/bgBl.svg";
import cartImg from "../../assets/img/cart.svg";
import Module from "../Module";
import Compozite from "../Compozites";

function Article() {
    return (
        <>
            <div className="article-wrapper">
                <p className="mobile-none">Главная &gt;&gt; Гостиные &gt;&gt; Коллекции <b>&gt;&gt; Мелисса</b></p>
                <div className="navigate">

                    <NavLink to={'/composite'} className='navlink1'>
                        <div className="nav1 navs">
                            <img src={img2} alt="img" />
                            <a>Композиции</a>
                        </div>
                    </NavLink>
                    <NavLink to={'module'} className='navlink'>


                        <div className="nav2 navs">
                            <img src={img2} alt="img" />

                            <a>Модульный ряд</a>
                        </div>
                    </NavLink>
                </div>

                <Routes>
                    <Route path="/module" element={<Module/>} />
                    <Route path="/" element={<Module/>}/>
                        <Route path="/composite" element={<Compozite/>}/>
                </Routes>

            </div>

            <div className="cart">
                <img src={cartImg} alt="cart" />
            </div>
        </>


    );
}

export default Article;