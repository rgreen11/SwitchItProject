import React from 'react'
import CarouselClass from '../components/carousel'
import Calendar from '../components/Calendar';
import AuthContext from '../contexts/auth';
import axios from 'axios';

export default class ootd extends React.Component {    
    constructor(props){
        super(props)
        this.state={

        }
      }  
    //--------Axios
    componentDidMount() {
        //top
        console.log('context: ', this.context)
        axios.get(`http://localhost:8080/clothes/read`)

            .then(response => response.data)
            .then(topsResponse => {
                this.setState({ pictureTops: topsResponse })
            })
        };
  render() {

    return (
      <AuthContext.Consumer>
        {(user)=>{
          console.log(user , "is user rn")
          if (user.user || user.user_id) {
            return(
                      <>
                        <div>
                            <img>
                            </img>
                        </div>
                      </>
            )
        }
  else {
          return (
              !user ?
              <h5>You Are Not Logged In!</h5>
              :
              <h5> {user.user || user.user_id}</h5>
          )
      }
  }
  }
      </AuthContext.Consumer>
    )
    }
  };
