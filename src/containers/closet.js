import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ItemsList from '../components/closetitems';
import axios from 'axios';
import {Link} from 'react-router-dom';
import firebase from '../firebase';
import Filter from '../components/closetfilter.js';
import '../components/closetdisplay.css';


class Closet extends React.Component{
    constructor(props){
        super(props);
        this.state={
        id:[],
        img_url:[],
        user: null,
        uid: null,
        name: '',
        }  
    }

     componentDidMount() {
    
    let name = localStorage.getItem('name')
        axios.get(`https://switchit1234.herokuapp.com/clothes`)
          .then(response => response.data)
          .then(pics => {
            this.setState({img_url:pics, name: name})
          })
    }


    getClothingItems = (filteredItems) => {
      console.log("its working", filteredItems)
      this.setState({img_url: filteredItems })
   }


   handleClick = ()=>{
     this.props.history.push('/Additem')
   }
    
    
    render(){
     console.log("trying filter" , this.props.filterItem)
        const {img_url}=this.state;
        if(img_url.length) {
            return (
            <>
            {/* <Username getUsername={this.getUsername}/> */}
            <p>Welcome {this.state.name} </p>
            <div className = 'filter'>
            <Filter getClothingItems={this.getClothingItems}/>
            </div>
            <div className="container row col-md ">
              {
                img_url.map((e, i) => {
                  return (<ItemsList img={e.img_url} />)
                })
              }
            </div>
            </>
            )
          }
          else {
            return (
            <>
            <div className='positionButton'>
              <button onClick={this.handleClick} type="button" className='btn btn-primary handleButton'>UPLOAD IMAGES</button>
            </div>
            </>
            )
            
           }
          //  <Route path="/additem" exact strict component={AddItem} />
          
    }
  }     
export default Closet;

// this.unsubscribe = firebase.auth().onAuthStateChanged(user=>{

        // console.log(user.n)
        //  axios.get('http://localhost:8080/user/read',{
        //     params:{
        //     email: "lukas@pursuit.org"
        //     }
        //   })
        //  .then((response)=>{
        //    const rootObj = response.data
        //    console.log("Log",response)
        //    if(rootObj){
        //      // this.setState({uid: uid})
        //    }
        //  })
        //  .catch((error)=>{
        //      console.log(error)
        //  })
    //  })