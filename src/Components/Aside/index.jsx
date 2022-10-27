import React, { useEffect, useState } from 'react';
import imgPercent from '../../assets/img/backgroundImg.png'

function Aside() {




    return (
        <>
            <div className="aside-wrapper">


                <div className="aside-wrp none">

                    <aside>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Новинки
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <ul className="accordion-body">
                                        <li><a href="#">Link1</a></li>
                                        <li><a href="#">Link2</a></li>
                                        <li><a href="#">Link3</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Гостинные
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <ul className="accordion-body">
                                        <li><a href="#">Link1</a></li>
                                        <li><a href="#">Link2</a></li>
                                        <li><a href="#">Link3</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Прихожие
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <ul className="accordion-body">
                                        <li><a href="#">Link1</a></li>
                                        <li><a href="#">Link2</a></li>
                                        <li><a href="#">Link3</a></li>
                                    </ul>                        </div>
                            </div>
                        </div>

                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Спальни
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <ul className="accordion-body">
                                            <li><a href="#">Мелисса 2021</a></li>
                                            <li><a href="#">Карина</a></li>
                                            <li><a href="#">Камелия 2021</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Детские
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <ul className="accordion-body">
                                        <li><a href="#">Link1</a></li>
                                        <li><a href="#">Link2</a></li>
                                        <li><a href="#">Link3</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Кровати
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <ul className="accordion-body">
                                        <li><a href="#">Link1</a></li>
                                        <li><a href="#">Link2</a></li>
                                        <li><a href="#">Link3</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="accordion" id="accordionPanelsStayOpenExample">

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        Матрасы
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                    <ul className="accordion-body">
                                        <li><a href="#">Link1</a></li>
                                        <li><a href="#">Link2</a></li>
                                        <li><a href="#">Link3</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </aside>
                    <button className="download">Скачать каталог<i class="fa-solid fa-cloud-arrow-down"></i></button>
                </div>

                <div className="percent">
                    <img src={imgPercent} alt='img' />
                    <h1>Рассрочка<span> без %</span></h1>
                    <button>Подробнее</button>
                </div>

            </div>
        </>
    );
}

export default Aside;