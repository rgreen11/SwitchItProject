import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ItemsList from '../components/closetitems';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import Filter from '../components/closetfilter.js';
import '../components/closetdisplay.css';

class Closet extends React.Component{
    constructor(props){
        super(props);
        this.state={
        id:[],
        img_url:[],
        user: null
        }  
    }
     componentDidMount() {
    const{img_url}=this.state
    const { id } = this.props.match.params; //
    Axios.get(`http://localhost:8080/clothes`)
      .then(response => response.data)
      .then(pics => {
        this.setState({img_url:pics})
      })
}

    getClothingItems = (filteredItems) => {
      console.log("its working", filteredItems)
      this.setState({img_url: filteredItems })
   }

    // getUsername = (username) => {
    //   const{id}=this.id;
    //   Axios.get(`http://localhost:8080/username`)
    //   .then(response => response.data)
    //   .then(username => {
    //     this.setState({username : 'Welcome back to your closet', username })
    //   })
    // }
    
    render(){
     console.log("trying filter" , this.props.filterItem)
        const {img_url}=this.state;
        if(img_url.length) {
            return (
            <>
            {/* <Username getUsername={this.getUsername}/> */}
            <h1>Welcome Back Rich </h1>
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
              <Link to ="additem.js">UPLOAD IMAGES</Link>
            </>
            )
            
           }
          //  <Route path="/additem" exact strict component={AddItem} />
          
    }
  }     
export default Closet;