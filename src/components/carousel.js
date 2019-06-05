import React, { Component } from 'react';
import axios from 'axios';
import ButtonCalendar from './ButtonCalendar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/hidemix.css';
import { Carousel } from 'react-responsive-carousel';
import { auth } from 'firebase';
import AuthContext from '../contexts/auth';



export default class CarouselClass extends Component {
    // static contextType = FilterContext;

    constructor(props) {
        super(props)
        this.state = {
            pictureTops: [],
            pictureBottoms: [],
            currentTopIndex: 0,
            currentBottomIndex: 0
        }
    }

    //--------Axios
    componentDidMount() {
        //top
        console.log('context: ', this.context)
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
    mixClothes = (e, pictureTops = this.state.pictureTops, pictureBottoms = this.state.pictureBottoms) => {

        const randomTopIndex = Math.floor(Math.random() * pictureTops.length);
        const randomBottomIndex = Math.floor(Math.random() * pictureBottoms.length);
        console.log('this', pictureTops)
        this.setState({
            currentTopIndex: randomTopIndex,
            currentBottomIndex: randomBottomIndex
        });

    }


    handleTopChange = (e) => {
        this.setState({ currentTopIndex: e })

    }

    handleBottomChange = (e) => {

        this.setState({ currentBottomIndex: e })
    }



    render() {
        const { pictureTops, pictureBottoms, currentTopIndex, currentBottomIndex } = this.state
        const state = this.state
        console.log('top', currentTopIndex)
        console.log('bottom', currentBottomIndex)
        return (
            <>

                <div className="center">

                    <button className='mixClothes' onClick={this.mixClothes} type="button" class="btn btn-info">Mix-N-Match</button>




                    <AuthContext.Consumer>

                        {

                            (state) => {
                                if (state.filteredTops !== '' && state.filteredBottoms !=='') {
                                    return (
                                        <>
                                       
                                        <div className="top">
                                            <Carousel showArrows={true}
                                                showThumbs={false}
                                                width={"500px"}
                                                className="carousel"
                                                selectedItem={currentTopIndex || 0}
                                                onChange={this.handleTopChange}>
                                                {
                                                    state.filteredTops.map((e, i) => {
                                                        return (
                                                            <>
                                                                <div id='imageOutfit'>
                                                                    <img key={i} src={e.img_url} alt='tops' className='images' />
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
                                                    state.filteredBottoms.map((e, i) => {
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
    </>
                                        
                                        )
                                }
                                else {
                                    return (

                                        <>
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
                                                                    <img key={i} src={e.img_url} alt='tops' className='images' />
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
</>

                                    )
                                }





                            }
                        }





                        {/* {


                            (filteredBottoms) => {
                                if (filteredBottoms !== '') {
                                    return (
                                        <div className="bottom">
                                            <Carousel
                                                showArrows={true}
                                                width={"500px"}
                                                showThumbs={false}
                                                className="carousel"
                                                selectedItem={currentBottomIndex || 0}
                                                onChange={this.handleBottomChange}>
                                                {
                                                    filteredBottoms.map((e, i) => {
                                                        return (
                                                            <>
                                                                <div id='imageOutfit'>
                                                                    <img key={i} src={e.img_url} alt='bottoms' className='images' />
                                                                </div>
                                                            </>)
                                                    })
                                                }

                                            </Carousel>
                                        </div>)


                                }
                                else {

                                    return (
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
                                        </div>)
                                }
                            }
                        }      */}

                    </AuthContext.Consumer>


                    <ButtonCalendar state={state} />
                </div>




            </>
        );
    }

}


// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));