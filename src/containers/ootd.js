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
import '../styles/ootd.css'
// import Context from '../contexts/TopBottom'

const OotdContext = React.createContext()

export default class Ootd extends Component {
    // static contextType = FilterContext;

    constructor(props) {
        super(props)
        this.state = {
          top:[],
          bottom: [],
          nickname: [],
        }
    }

    //--------Axios
    componentDidMount() {
        //ootd
        let nickname = localStorage.getItem('nickName')
        console.log('context: ', nickname)
        
        axios.get(`https://switchit1234.herokuapp.com/clothes/read`,{
          params:{
            nickname: nickname
          }
        })
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
            <div className = "row">
            <div className = "col col-4"></div>
            <div className ='col col-4'>
              <div className = "Time container">
                <h3>06/15/2019</h3>
              </div>
              <div className = "Nickname container">
                <h4>Bbq Outfit</h4>
              </div>
              <div className = "TopImage container">
                <img src = "https://images-na.ssl-images-amazon.com/images/I/913D3hkEyRL._UX385_.jpg" alt = ""/>
              </div>
              <div className = "BottomImage container">
              <img src = "https://cdn.shopify.com/s/files/1/1800/4357/products/DF102-ROY-F_400x400.jpg?v=1552703456" alt = ""/>
              </div>
              </div>
              <div className = "col col-4"></div>
              </div>

            
            </>
        );
    }
  }

  {/* <OotdContext.Provider value={this.state}>
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
                </OotdContext.Provider> */}
