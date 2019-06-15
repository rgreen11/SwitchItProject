import React, { Component } from 'react';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/hidemix.css';
import { Carousel } from 'react-responsive-carousel';
import { auth } from 'firebase';
import AuthContext from '../contexts/auth';
import 'bootstrap/dist/css/bootstrap.min.css'
import CarouselClass from '../components/carousel'
import Calendar from '../components/Calendar';
// import Context from '../contexts/TopBottom'

const OotdContext = React.createContext()

export default class Ootd extends Component {
    // static contextType = FilterContext;

    constructor(props) {
        super(props)
        this.state = {
            
            nickname: [],
        }
    }

    //--------Axios
    componentDidMount() {
        //ootd
        let nickname = localStorage.getItem('nickName')
        console.log('context: ', nickname)
        
        axios.get(`https://switchit1234.herokuapp.com/clothes/read`)
          .then(response => response.data)
          .then(outfits => {
            console.log('something',outfits)
            this.setState({outfits: outfits.data})
          })
          .catch((err)=>{
            console.log(err)
          })
        }
    

    render() {
        const { nickname} = this.state

        return (
            <>
            <OotdContext.Provider value={this.state}>
                <div className="center">                        
                        <AuthContext.Consumer>
                            {
                                (state) => {
                                    const outfits = state.filteredoutfits.length ? state.filteredoutfits : outfits;
                                        return (
                                        <>
                                            <div className="outfit">
                                                <Carousel showArrows={true}
                                                    showThumbs={false}
                                                    width={"500px"}
                                                    className="carousel"
                                                    selectedItem={nickname || 0}
                                                    onChange={this.outfit}>
                                                    {
                                                        outfits.map((e, i) => {
                                                            return (
                                                                <>
                                                                    <div id='nickname'>
                                                                        <img key={i} src={e.img_url} alt='' className='outfits' />
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
                </OotdContext.Provider>
            </>
        );
    }
  }