import React, {Component} from 'react';
import axios from 'axios';
import firebase from '../firebase';
import {stylesByCategory,clothingColor,clothingSeason} from '../containers/api'
import 'bootstrap/dist/css/bootstrap.css';


export default class FilterEffect extends Component{
  constructor(props){
    super(props)
    this.state={
      chosentop: '',   //top dropdown
      chosenstyle:'',  //selected style 
      chosencolor: '', //selected color
      chosenseason: '',  //selected season
    }
  }


//--------------GET FUNCTIONS 
 handleTops=(e)=>{
   this.setState({ chosentop:e.target.value})
 }

 handleTopStyle=(e)=>{
   this.setState({ chosenstyle:e.target.value})
}

handleTopColor=(e)=>{
  this.setState({ chosencolor:e.target.value})
}

handleTopSeason=(e)=>{
  this.setState({ chosenseason:e.target.value})
}


//--------------AXIOS FUNCTIONS 

submitButton=(e)=>{
//TOPS 
const allSelected=this.state


// //SEASON
let url=`http://localhost:8080/clothes/season/${this.state.chosentop}/${this.state.chosenstyle}/${this.state.chosencolor}/${this.state.chosenseason}`
console.log('lala', url)
axios.get(url)
  .then(res => {
    let data = res.data;
    this.props.updateFilter(data);
  })
}



//--------------------------BOTTOMS 

  render(){
 
    return( 
       <>

                <form>
                    <select id="inputState"  onChange={this.handleTops} className="form-control tab-color" defaultValue="CATEGORY">
                        <option value="CATEGORY" disabled>CATEGORY</option>  
                            <option>top</option>  
                    </select>

                    <select id="inputState"  onChange={this.handleTopStyle} className="form-control tab-color"  defaultValue="STYLE">
                        <option value="STYLE" disabled>STYLE</option>
                        {
                            stylesByCategory.top.map((style, i) => {
                                return <option key={i}>{style}</option>
                            })
                        }
                    </select>

                    <select id="inputState"  onChange={this.handleTopColor} className="form-control tab-color" defaultValue="COLOR">
                        <option value="COLOR" disabled>COLOR</option>
                        {
                            clothingColor.colors.map((color, i) => {
                                return <option key={i}>{color}</option>
                            })
                        }
                    </select>

                    <select id="inputState"  onChange={this.handleTopSeason} className="form-control tab-color" defaultValue="SEASON">
                        <option value="SEASON" disabled>SEASON</option>
                        {
                            clothingSeason.seasons.map((season, i) => {
                                return <option key={i}>{season}</option>
                            })
                        }
                    </select>

                </form>

                <button type="button" onClick={this.submitButton} class="btn btn-info"> Submit</button>
          
        
    </>)

}
} 

