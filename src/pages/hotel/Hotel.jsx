import { faCircle, faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import './hotel.css'

const Hotels = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false)
    const photos = [
        {
            src: "https://ben.com.vn/tin-tuc/wp-content/uploads/2020/09/hinh-nen-anime-dep-cho-pc.png"
        },
        {
            src: "https://ben.com.vn/tin-tuc/wp-content/uploads/2020/09/hinh-nen-anime-dep-min.jpg"
        },
        {
            src: "https://ben.com.vn/tin-tuc/wp-content/uploads/2020/09/hinh-nen-phong-canh-anime.jpg"
        },
        {
            src: "https://ben.com.vn/tin-tuc/wp-content/uploads/2020/09/hinh-nen-pc-anime.jpg"
        },
        {
            src: "https://ben.com.vn/tin-tuc/wp-content/uploads/2020/09/hinh-nen-may-tinh-dep-anime.jpg"
        },
        {
            src: "https://ben.com.vn/tin-tuc/wp-content/uploads/2020/09/hinh-nen-may-tinh-anime-min.jpg"
        },
    ]

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    }
    const onClose = () => {
        console.log('close')
        setOpen(!open)
    }
    const changeSlide =() => {
        if(slideNumber+1 >= photos.length){
            return setSlideNumber(0);
        }else{
            return setSlideNumber(slideNumber+1)
        }
    }
    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                {open && <div className="slider">
                        <FontAwesomeIcon icon={faCircleXmark} onClick={onClose} className="close" />
                        <FontAwesomeIcon icon={faCircleArrowLeft} className = "arrow"/>
                        <div className="slideWrapper">
                            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                        </div>
                        <FontAwesomeIcon icon={faCircleArrowRight} onClick={() => changeSlide()} className = "arrow" />
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon = {faLocation}/>
                        <span>Elton St 125 New work</span>
                    </div>
                    <span className="hotelDistance">
                        Exellent location - 500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $114 at this property and get a free aiport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((p,i) => (
                            <div className="hotelImgWrapper" key={i}>
                                <img onClick={() => handleOpen(i)} src={p.src} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
                            <p className="hotelDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quo necessitatibus consequatur commodi modi repellat eaque doloremque a sunt iusto saepe maiores quae hic voluptate quia quas aspernatur, cumque non unde, ullam, tenetur officia dolorum labore odio? Dolore, beatae. Praesentium repellat aut doloribus, facere veniam ipsa rem veritatis laboriosam dolore!</p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay</h1>
                            <span>
                                Located in the real heart of krakow, this property has an excellent location score of 9.8!
                            </span>
                            <h2>
                                <b>$935</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>        
        </div>
    )
}

export default Hotels