import React from 'react'
import '../styles/Contact.scss'
import vasap from '../assets/vasap.svg'
import gram from '../assets/gram.svg'
import book from '../assets/book.svg'
import downRek from '../assets/downRek.svg'
import line50 from "../assets/line50.svg";
import regime from "../assets/regime.svg";
import ogonbaeva from "../assets/ogonbaeva.svg";
import erkindik from "../assets/erkindik.svg";
import umetalieva from "../assets/umetalieva.svg";
import _line from "../assets/_line.svg";

const Contact = () => {
    return (
        <div className='contact'>
            <h4>Главная / Контакты</h4>
            <h1>Контакты</h1>
            <div className='under-contact'>
                <p>Будем рады видеть вас у нас в офисе, ответить на любые вопросы, показать интересующий вас товар. </p>
                <div className='socials'>
                    <h2>Мы в соц сетях:</h2>
                    <img src={vasap} alt='' />
                    <img src={gram} alt='' />
                    <img src={book} alt='' />
                    <img src={downRek} alt='' />
                </div>
            </div>



            {/* ФИЛИАЛЫ  */}
            <div className="filials">
                <div className="pointer">
                    <h1>Филиалы</h1>
                    <img src={line50} />
                </div>
                <div style={{ display: "flex" }} className="last-two">
                    <div className="contacts">
                        <img src={regime} />
                        <img src={_line} className="_line" />
                        <img src={ogonbaeva} />
                        <img src={_line} className="_line" />
                        <img src={erkindik} />
                        <img src={_line} className="_line" />
                        <img src={umetalieva} />
                        <img src={_line} className="_line" />
                    </div>
                    <div className="map">
                        <div class="mapouter">
                            <div class="gmap_canvas">
                                <iframe
                                    width="1137px"
                                    height="484px"
                                    id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=Kyrgyzstan улица Атая Огонбаева, 222&t=&z=18&ie=UTF8&iwloc=&output=embed"
                                    frameborder="0"
                                    scrolling="no"
                                    marginheight="0"
                                    marginwidth="0"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact