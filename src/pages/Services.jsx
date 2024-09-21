import AboutImg from "../assets/img/drawing.jpg"

import Gallery1 from "../assets/img/gallery1.jpg"
import Gallery2 from "../assets/img/gallery2.jpg"
import Gallery3 from "../assets/img/gallery3.jpg"
import Gallery4 from "../assets/img/gallery4.jpg"
import Gallery5 from "../assets/img/gallery5.jpg"
import Gallery6 from "../assets/img/gallery6.jpg"
import Gallery7 from "../assets/img/gallery7.jpg"
import Gallery8 from "../assets/img/gallery8.jpg"

import "../assets/css/Services.css"

const Services = () => {
    const serviceList = [
        [
            {
                img: Gallery1,
                title: "hotel de luna",
                type: "big"
            },
            {
                img: Gallery2,
                title: "Upside Down De Lito",
                type: "small"
            },
        ],
        [
            {
                img: Gallery3,
                title: "Tangkad mo tol",
                type: "small"
            },
            {
                img: Gallery4,
                title: "Rest House ni Bossing",
                type: "big"
            }
        ],
        [
            {
                img: Gallery5,
                title: "Tahanan ni Idol",
                type: "big"
            },
            {
                img: Gallery6,
                title: "Viewspectaculous",
                type: "small"
            }
        ],
        [
            {
                img: Gallery7,
                title: "Beach Arc",
                type: "small"
            },
            {
                img: Gallery8,
                title: "Very large building",
                type: "big"
            }
        ],
    ]
    return (
        <div className="main-service-container">
            <div className="service-hero">
                <img src={AboutImg} alt="service-hero" />
                <div className="grade">
                </div>
                <div className="service-hero-text-container">
                    <h3>SERVICES</h3>
                    <h1>Crafting Innovative Spaces with Precision and Vision</h1>
                </div>
            </div>
            <div className="service-gallery-container">
                {serviceList.map((item, indx) =>
                    <div key={indx} className="service-row">
                        <div className={`service-item ${item[0].type}`}>
                            <img src={item[0].img} alt="" />
                            <h4>{item[0].title}</h4>
                        </div>
                        <div className={`service-item ${item[1].type}`}>
                            <img src={item[1].img} alt="" />
                            <h4>{item[1].title}</h4>
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}

export default Services