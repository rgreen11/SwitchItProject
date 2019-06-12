import React from 'react'
import CarouselClass from '../components/carousel'
import Calendar from '../components/Calendar';
import AuthContext from '../contexts/auth';
import axios from 'axios';

export default class ootd extends React.Component {    
    constructor(props){
        super(props)
        this.state={
          outfits:[],
        }
      }  
    //--------Axios
    componentDidMount() {
        //top
        console.log('context: ', this.context)
        axios.get(`https://switchit1234.herokuapp.com/clothes`)
            .then((outfits)=>{
              this.setState(outfits)
            })
        };
  render() {
    return (<>
      {
        this.state.outfits.map((outfit)=>{
          console.log(outfit)
            // return <div>hi</div>
        })
      }
   </>)
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