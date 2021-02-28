import React from "react";
import {Carousel} from "react-bootstrap";
import './Slider.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const Slider=(props)=> {
    console.log(props)
    return(
        <div className="slider">
            <Carousel>
                {   props.titles.layoutTitles && props.titles.layoutTitles.titles.map(hero => {
                    return <Carousel.Item interval={1500} >
                        <img style={{height: '400px'}}
                             className="d-block w-100"
                             src={hero.thumbnails['thumb-614x1536'].url}
                             alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>{hero.title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                })
                }
            </Carousel>
        </div>
    )
}
export default Slider;
