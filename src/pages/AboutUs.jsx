import React from 'react'
import '../styles/AboutUs.scss'
import realPhoto from '../assets/realPhoto.svg'
import ogonbaeva1 from '../assets/ogonbaeva1.svg'
import erkindik1 from '../assets/erkindik1.svg'
import umetalieva1 from '../assets/umetalieva1.svg'
import wasap from '../assets/wasap.svg'
import inst from '../assets/inst.svg'
import fac from '../assets/fac.svg'
import fig from '../assets/fig.svg'
import hz from '../assets/hz.svg'
import hznaet from '../assets/hznaet.svg'
import buton from '../assets/buton.svg'
import the1 from '../assets/the1.png'
import the2 from '../assets/the2.png'
import the3 from '../assets/the3.png'
import the4 from '../assets/the4.png'
import the5 from '../assets/the5.png'
import the6 from '../assets/the6.png'
import the7 from '../assets/the7.png'
import the8 from '../assets/the8.png'
import the9 from '../assets/the9.png'
import the10 from '../assets/the10.png'
import the11 from '../assets/the11.png'
import the12 from '../assets/the12.png'
import the13 from '../assets/the13.png'
import the14 from '../assets/the14.png'
import the15 from '../assets/the15.png'
import the16 from '../assets/the16.png'
import the17 from '../assets/the17.png'
import the18 from '../assets/the18.png'
import the19 from '../assets/the19.png'
import the20 from '../assets/the20.png'

const AboutUs = () => {
    return (
        <div className='about-us'>
            {/* UNDER NAVBAR  */}
            <div className='under-navbar'>
                <img src={realPhoto} alt='' />
                <div className='text'>
                    <h2>О нас</h2>
                    <p>Компания “KANZLER” (Канцлер) начала работу в 1999 году в качестве поставщика в Кыргызскую Республику от концерна BASF AG профессиональных носителей информации для телерадиокомпаний. В 2003 году начинает работу компания Bürger (Бюргер), осуществляя поставки расходных материалов для типографий Кыргызстана от ведущих производителей Европы. </p>
                </div>
            </div>
            {/* BLACK TEXT  */}
            <div className='black-text'>
                <p>Сейчас компании поставляют товары более чем от 30 европейских производителей. Основные направления — бумага и расходные материалы для полиграфии, канцелярские товары, промо-сувениры, поставки элитного кофе и чая, немецкого премиум пива.</p>
            </div>
            {/* DIRECTIONS */}
            <div className='directions'>
                <div className='lef'>
                    <h2>Где можно приобрести</h2>
                    <p>Весь ассортимент товаров можно приобрести в офисе компаний, который находится в самом центре столице г. Бишкек. Офис занимает площадь более 470 м2.
                    </p>
                    <p>                        Оригинальные магазины Канцлер только по трём адресам.</p>
                </div>
                <div className='righ'>
                    <img src={ogonbaeva1} alt='' />
                    <img src={erkindik1} alt='' />
                    <img src={umetalieva1} alt='' />
                </div>
            </div>
            {/* ASSORTIMENT  */}
            <div className='assortiment'>
                <div className='lev'>
                    <h2>Ассортимент</h2>
                    <p>Благодаря доверию наших клиентов и качеству товаров, ассортимент продуктов, поставляемых компаниями Kanzler&Bürger, постоянно расширяется: на сегодняшний день предлагается более 6000 наименований различных продуктов.</p>
                    <div className='lev-socials'>
                        <img src={wasap} alt='' />
                        <img src={inst} alt='' />
                        <img src={fac} alt='' />
                    </div>
                </div>
                <img src={fig} alt='' />
            </div>
            {/* CONSTANT CLIENTS  */}
            <div className='constant-clients'>
                <div>
                    <img src={hz} alt='' />
                </div>
                <div>
                    <h1>Наши постоянные клиенты</h1>
                    <p>Постоянными клиентами компаний стали типографии, издательские дома, дизайнеры, художники, телекомпании, а также более 2000 других успешных компаний нашей страны.</p>
                </div>
            </div>
            {/* DOSTAVKA  */}
            <div className='dos-tavka'>
                <div className='lefft'>
                    <h2>Доставка по стране</h2>
                    <p>Крупногабаритные грузы, большие заказы, а также доставки по республикам Кыргызстан, Таджикистан, Узбекистан осуществляются со склада, который находится в промышленной зоне Бишкека и занимает 6000 м3.</p>
                    <p>На склад компании товары, в свою очередь, доставляются авиа-, авто- или ж/д транспортом из Евросоюза.</p>
                    <img src={buton} alt='' />
                </div>
                <img src={hznaet} alt='' />
            </div>
            {/* POSTAVSHIKI  */}
            <div className='postavshiki'>
                <h2>Наши поставщики</h2>
                <p>"Качественная канцелярия мировых брендов: Staedtler, Scneider, Faber-Castell, Brunnen, Pentel, ErichKrause, BrunoVisconti, Axent, Невская Палитра, ГАММА, Cordenons, Heyda, KnorrPrandell, STEWO, Diplomat, Fellowes."</p>
            </div>
            {/* BRANDS  */}
            <div className='brands'>
                <img src={the1} />
                <img src={the2} />
                <img src={the3} />
                <img src={the4} />
                <img src={the5} />
                <img src={the6} />
                <img src={the7} />
                <img src={the8} />
                <img src={the9} />
                <img src={the10} />
                <img src={the11} />
                <img src={the12} />
                <img src={the13} />
                <img src={the14} />
                <img src={the15} />
                <img src={the16} />
                <img src={the17} />
                <img src={the18} />
                <img src={the19} />
                <img src={the20} />
            </div>
        </div>
    )
}

export default AboutUs