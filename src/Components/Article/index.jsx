import Card from "../UI/Card";
import img1 from "../../assets/img/bgNN.svg";
import img2 from "../../assets/img/bgBl.svg";
import cartImg from "../../assets/img/cart.svg";

function Article() {
    return (
        <>
            <div className="article-wrapper">
                <p>Главная &gt;&gt; Гостиные &gt;&gt; Коллекции <b>&gt;&gt; Мелисса</b></p>
                <div className="navigate">

                <div className="nav1 navs">
                <img src={img2} alt="img" />
                    <a>Композиции</a>
                </div>
                <div className="nav2 navs">
                    <img src={img1} alt="img" />

                    <a>Модульный ряд</a>
                </div>
                </div>


                <article>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </article>
            </div>

            <div className="cart">
<img src={cartImg} alt="cart" />
            </div>
        </>


    );
}

export default Article;