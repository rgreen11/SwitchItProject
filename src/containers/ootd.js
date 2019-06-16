import React, { Component } from 'react';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/hidemix.css';
import { Carousel } from 'react-responsive-carousel';
import { auth } from 'firebase';
import AuthContext from '../contexts/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselClass from '../components/carousel';
import Calendar from '../components/Calendar';
import '../styles/ootd.css';
// import Context from '../contexts/TopBottom'
// const OotdContext = React.createContext()

export default class Ootd extends Component {
    // static contextType = FilterContext;
    constructor(props) {
        super(props)
        this.state = {
          top:[],
          bottom: [],
          nickName: '',
          topImg:'',
          bottomImg:''
        }
    }

    //--------Axios
    componentDidMount() {
        //ootd
        let nickname = localStorage.getItem('nickName')

      const topImg = localStorage.getItem('topImg');
      const bottomImg = localStorage.getItem('bottomImg');
        console.log('name: ', nickname)
        
        axios.get(`https://switchit1234.herokuapp.com/clothes/read`,{
          params:{
            nickname: nickname
          }
        })
          .then(response => response.data)
          .then(outfits => {
            console.log('something',outfits)
            this.setState({outfits: outfits.data, nickName: nickname, topImg:topImg, bottomImg: bottomImg})
          })
          .catch((err)=>{
            console.log(err)
          })
        }
    

    render() {
        const { nickName, topImg, bottomImg} = this.state
        return (
            <>
            <div className = "row">
            <div className = "col col-4"></div>
            <div className ='col col-4'>
              <div className = "Time container">
                {/* <h3>{06/15/2019}</h3> */}
              </div>
              <div className = "Nickname container">
                <h4>{nickName}</h4>
              </div>
              <div className = "TopImage container">
                <img src = {topImg} alt = ""/>
              </div>
              <div className = "BottomImage container">
              <img src = {bottomImg} alt = ""/>
              </div>
              </div>
              <div className = "col col-4"></div>
              </div>
            </>
        );
    }
  }

