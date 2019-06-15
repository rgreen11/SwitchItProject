import React, { Component } from 'react';
import axios from 'axios';
import ButtonCalendar from './ButtonCalendar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/hidemix.css';
import '../styles/Carousel.css';
import { Carousel } from 'react-responsive-carousel';
import { auth } from 'firebase';
import AuthContext from '../contexts/auth';
// import Context from '../contexts/TopBottom'

const TopBottomContext = React.createContext()

export default class CarouselClass extends Component {
    // static contextType = FilterContext;

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
        console.log('context: ', this.context)
        axios.get(`https://switchit1234.herokuapp.com/clothes/style/top`)

            .then(response => response.data)
            .then(topsResponse => {
                this.setState({ pictureTops: topsResponse })
            })
        //bottom
        axios.get(`https://switchit1234.herokuapp.com/clothes/style/bottom`)

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

    handleTopChange = (e) => {
        this.setState({ currentTopIndex: e })
    }

    handleBottomChange = (e) => {
        this.setState({ currentBottomIndex: e })
    }


    render() {
        const { pictureTops, pictureBottoms, currentTopIndex, currentBottomIndex, topid } = this.state
        console.log(currentTopIndex)
        console.log(currentBottomIndex)

        return (
            <>
            <TopBottomContext.Provider value={this.state}>
                <div className="center">
                    <div className="mixB">
                    <button className='mixClothes' onClick={this.mixClothes} type="button" className="btn btn-infos ">Mix-N-Match</button>
                    </div>
                        <AuthContext.Consumer>
                            {
                                (state) => {
                                    const tops = state.filteredTops.length ? state.filteredTops : pictureTops;
                                    const bottoms = state.filteredBottoms.length ? state.filteredBottoms : pictureBottoms;
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
                                                        tops.map((e, i) => {
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
                                        bottoms.map((e, i) => {
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
                        </AuthContext.Consumer>

                    </div>
                    <div className = 'mixB'>
                        <ButtonCalendar state={this.state} />
                        </div>
                </TopBottomContext.Provider>
            </>
        );
    }

}


