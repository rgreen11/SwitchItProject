import React from 'react'
import CarouselClass from '../components/carousel'
import Calendar from '../components/Calendar';
import AuthContext from '../contexts/auth';



const mixNmatch = () => {
  return (
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
  )
}
export default mixNmatch;

