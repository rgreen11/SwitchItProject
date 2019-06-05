import React from 'react'
import CarouselClass from '../components/carousel'
<<<<<<< HEAD
import Calendar from '../components/Calendar';
import AuthContext from '../contexts/auth';

=======
// import Calendar from '../components/Calendar';
import ButtonCalendar from '../components/ButtonCalendar';
import Media from 'react-media';
import {Link} from 'react-router-dom';
>>>>>>> master


const mixNmatch = () => {
  return (
<<<<<<< HEAD
    <AuthContext.Consumer>
      {(user)=>{
        console.log(user , "is user rn")
        if (user.user || user.user_id) {
          return(
                    <>
                      <CarouselClass />
                      <Calendar/>
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
=======

    <>
      <CarouselClass />
      {/* <Calendar/> */}
      {/* <ButtonCalendar /> */}
    </>

>>>>>>> master
  )
}
export default mixNmatch;

