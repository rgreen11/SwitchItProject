import React, { Component } from 'react';
import axios from 'axios';
import ButtonCalendar from './ButtonCalendar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/hidemix.css';
import { Carousel } from 'react-responsive-carousel';



export default class CarouselClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pictureTops: [],
            pictureBottoms: [],
            currentTopIndex: 0,
            currentBottomIndex: 0,
            idTop: 0,
            idBottom:0,
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
  
    const randomTopIndex = Math.floor(Math.random() * pictureTops.length);
    const randomBottomIndex = Math.floor(Math.random() * pictureBottoms.length);
    const top = pictureTops[randomTopIndex].id
    const bottom = pictureTops[randomTopIndex].id


    this.setState({
        currentTopIndex: randomTopIndex,
        currentBottomIndex: randomBottomIndex,
        idTop: top,
        idBottom: bottom
    });

}


handleTopChange =(e)=>{
    console.log(e)
this.setState({currentTopIndex: e})

}

handleBottomChange=(e)=>{

console.log(this.state.pictureBottoms[e])
    this.setState({currentBottomIndex: e})
}



    render() {
        const { pictureTops, pictureBottoms, currentTopIndex, currentBottomIndex } = this.state
        const state = this.state
        // console.log('top',currentTopIndex)
        // console.log('bottom',currentBottomIndex)
        return (
            <>
            <div className="center">
            
            <button className='mixClothes' onClick={this.mixClothes} type="button" class="btn btn-info">Mix-N-Match</button>
            
            <div className="top">
                <Carousel showArrows={true} 
                          showThumbs={false}
                          width={"500px"} 
                          className="carousel"
                          selectedItem={currentTopIndex || 0}
                          onChange={this.handleTopChange}>
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
                <Carousel 
                showArrows={true}  
                width={"500px"} 
                showThumbs={false} 
                className="carousel" 
                selectedItem={currentBottomIndex || 0}
                onChange={this.handleBottomChange}>
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
                <ButtonCalendar state={state}/>
            </div>

            </>



        );
    }
}

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));