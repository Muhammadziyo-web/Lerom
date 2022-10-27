import cardImg from '../../assets/img/image_4.png'

function Card() {
    function MouseOver(event) {
        event.target.style.background = 'red';
    }
    return (
        <div className="card" onMouseEnter={
            (e) => {
                console.log(e.target);
            }
        }>
            <img src={cardImg} />
            <p className='product-id'>АН-2801</p>
            <p className='product-sizes'>в 1462    ш 360     г 352</p>
            <p className='color'>Цвет: <span id='product-color'>дуб</span></p>
            <span className='colors-ex'>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
            </span>
            <h3 id='price'>6 284 ₽ </h3>
        </div>
    );
}

export default Card;