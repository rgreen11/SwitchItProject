import React from 'react'
import CarouselClass from '../components/carousel'
import Calendar from '../components/Calendar';
import AuthContext from '../contexts/auth';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class ootd extends React.Component {    
    constructor(props){
        super(props)
        this.state={
          outfits:[],
        }
      }  
    //--------Axios
    componentDidMount() {
      let nickname = localStorage.getItem('nickName')
        //top
        console.log('context: ', nickname)
        axios.get(`https://switchit1234.herokuapp.com/clothes/read`,{
          params:{
            nickname:nickname
          }
        })
            .then((outfits)=>{
              console.log('something',outfits)
              this.setState({outfits:outfits.data})
            })
            .catch((err)=>{
              console.log(err)
            })
        };

  render() {
    console.log('here', this.state.outfits)
    
    return (
      <>
      <div className=" row" >
        <div className = "col col-4"></div>
        <div className = "col col-4"><img className="card-img-top" src= "https://switchit1234.herokuapp.com/clothes/read" alt="Card image cap"/></div>
        <div className = "col col-4"></div>
              </div>
        
      </>
    )
  }
}





  //     <AuthContext.Consumer>
  //       {(user)=>{
  //         console.log(user , "is user rn")
  //         if (user.user || user.user_id) {
  //           return(
  //                     <>
  //                       <CarouselClass />
  //                       <Calendar/>
  //                     </>
  //           )
  //       }
  // else {
  //         return (
  //             !user ?
  //             <h5>You Are Not Logged In!</h5>
  //             :
  //             <h5> {user.user || user.user_id}</h5>
  //         )
  //     }
  // }
  // }
  //     </AuthContext.Consumer>