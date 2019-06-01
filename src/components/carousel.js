import React, { Component } from 'react';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './hidemix.css';
import { Carousel } from 'react-responsive-carousel';


export default class CarouselClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pictureTops: [],
            pictureBottoms: []
        }

    }

//--------Axios
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

//-----Mix-Match Function
    //------tops
mixClothes = (e, pictureTops=this.state.pictureTops,pictureBottoms=this.state.pictureBottoms) => {
    for (let i = pictureTops.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pictureTops[i], pictureTops[j]] = [pictureTops[j], pictureTops[i]];
    }
    console.log('this',pictureTops)
    this.setState({pictureTops})

    //-------bottoms
    for (let i = pictureBottoms.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pictureBottoms[i], pictureBottoms[j]] = [pictureBottoms[j], pictureBottoms[i]];
    }
    console.log('this',pictureBottoms)
    this.setState({pictureBottoms})

}

    render() {
        const { pictureTops, pictureBottoms } = this.state
        // console.log('this is state',this.state.pictureTops)
        return (
            <>
            <div className="center">
            <button className='mixClothes' onClick={this.mixClothes} type="button" class="btn btn-info">Mix-N-Match</button>
            <div className="top">
                <Carousel showArrows={true} 
                          showThumbs={false}
                          width={"500px"} 
                          className="carousel">
                    {
                        pictureTops.map((e, i) => {
                            return (
                                <>
                                    <div id='imageOutfit'>
                                        <img key={i} src={e.img_url} alt='tops'className='images' />
                                    </div>
                                </>)
                        })
                    }
                </Carousel>
                    </div>

                    <div className="bottom">
                <Carousel showArrows={true}  width={"500px"} showThumbs={false} className="carousel">
                    {
                        pictureBottoms.map((e, i) => {
                            return (
                                <>
                                    <div id='imageOutfit'>
                                        <img key={i} src={e.img_url} alt='bottoms' className='images' />
                                    </div>
                                </>)
                        })
                    }
                </Carousel>
                </div>
            </div>
            </>



        );
    }
}

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));