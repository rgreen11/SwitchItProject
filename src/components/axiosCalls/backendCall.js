import React from 'react';
import axios from 'axios';


export default (email)=>{
  return axios.get('http://localhost:8080/user/read',{
        data:{
        email: email
        }
    
    })
    
}