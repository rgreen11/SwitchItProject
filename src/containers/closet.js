import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ItemsList from '../components/closetitems';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Items from '../components/closetfilter';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/handleEmptyCloset.css';
import ReadUser from '../components/axiosCalls/backendCall';
import firebase from '../firebase'


class Closet extends React.Component{
    constructor(props){
        super(props);
        this.state={
        id:[],
        img_url:[],
        user: null,
        uid: null,
        }  
    }

     componentDidMount() {
      this.unsubscribe = firebase.auth().onAuthStateChanged(user=>{
        // ReadUser(user.email)
        console.log(user.email)
         axios.get('http://localhost:8080/user/read',{
            params:{
            email: "lukas@pursuit.org"
            }
          })
         .then((response)=>{
           const rootObj = response.data
           console.log("Log",response)
           if(rootObj){
             // this.setState({uid: uid})
           }
         })
         .catch((error)=>{
             console.log(error)
         })
     })
     

    axios.get(`http://localhost:8080/clothes`)
      .then(response => response.data)
      .then(pics => {
        this.setState({img_url:pics})
      })
}


componentWillUnmount(){
  this.unsubscribe()
}

    getClothingItems = (filteredItems) => {
      console.log("what we want", filteredItems)
   }


   handleClick = ()=>{
     this.props.history.push('/Additem')
   }
    // componentWillMount(){
    //   const{id}=this.id;
    //   axios.get(`http://localhost:8080/clothes`)
    //   .then(response => response.data)
    //   .then(username => {
    //     this.setState({username})
    //   })
    // }
    render(){
     console.log("trying filter" , this.props.filterItem)
        const {img_url}=this.state;
        if(img_url.length) {
            return (
              <>
                <Items getClothingItems={this.getClothingItems}/>
            <div className="container row col-md">
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
          
          
    }
  }     
export default Closet;