import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ItemsList from '../components/closetitems';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import Items from '../components/victesting.js';


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
      console.log("what we want", filteredItems)
   }

    // componentWillMount(){
    //   const{id}=this.id;
    //   Axios.get(`http://localhost:8080/clothes`)
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
              <Link to ="addItlem.js">UPLOAD IMAGES</Link>
            </>
            )
            
           }
          
          
    }
  }     
export default Closet;