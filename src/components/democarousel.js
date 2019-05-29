import React, { Component } from 'react';
import './hidemix.css';
import axios from 'axios';
// import  './outfits.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default class DemoCarousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pictureTops: [],
            pictureBottoms: []
        }

    }

    componentDidMount() {
        //top
        axios.get(`http://localhost:8080/clothes/style/top`)

            .then(response => response.data)
            .then(topsResponse => {
                this.setState({ pictureTops: topsResponse })
            })
        //bottom
        axios.get(`http://localhost:8080/clothes/style/bottom`)

            .then(response => response.data)
            .then(bottomsResponse => {
                this.setState({ pictureBottoms: bottomsResponse })
            })
    }


    render() {
        const { pictureTops, pictureBottoms } = this.state

        return (
            <>
            <div >
                <Carousel showArrows={true} 
                          showThumbs={false}
                          width={"500px"}>
                    {
                        pictureTops.map((e, i) => {
                            return (
                                <>
                                    <div id='imageOutfit'>
                                        <img key={i} src={e.img_url} alt='tops' />
                                    </div>
                                </>)
                        })
                    }
                </Carousel>

                <Carousel showArrows={true}  width={"500px"} showThumbs={false}>
                    {
                        pictureBottoms.map((e, i) => {
                            return (
                                <>
                                    <div id='imageOutfit'>
                                        <img key={i} src={e.img_url} alt='bottoms' />
                                    </div>
                                </>)
                        })
                    }
                </Carousel>
            </div>
            </>



        );
    }
}

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));