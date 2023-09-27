import React from 'react'
import meter5 from "../assets/img/jquery.png";
import meter2 from "../assets/img/css.png";
import meter1 from "../assets/img/html.png";
import meter8 from "../assets/img/laravel.png";
import meter6 from "../assets/img/pngwing.com (3).png";
import meter3 from "../assets/img/js (1).png";
import meter9 from "../assets/img/mysql.png";
import meter7 from "../assets/img/react-4695757.png";
import meter12 from "../assets/img/staruml_icon_by_funkmasterta_d2xh4wo-fullview.png";
import meter4 from "../assets/img/bootstrap-framework-logo-5453031.png";
import meter11 from "../assets/img/figm.png";
import meter10 from "../assets/img/mongodb.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"

export default function menud() {
    const arrayy = {
        image: [meter1,meter2,meter3,meter4,meter5,meter6,meter7,meter8,meter9,meter10,meter11,meter12],
        lanuage: ['HTML','css','javascript','bootstrap','jquery',"php",'react','laravel','mysql','mongodb','figma','staruml']
      };    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
      return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {arrayy.image.map((imageSrc, index) => (
        <div className="item" key={index}>
          <img src={imageSrc} alt={`Image${arrayy.lanuage[index]}`} />
          <h5>{arrayy.lanuage[index]}</h5>
        </div>
      ))}
                            
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
      )
}






