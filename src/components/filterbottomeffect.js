import React, {Component} from 'react';
import axios from 'axios';
import firebase from '../firebase';
import {stylesByCategory,clothingColor,clothingSeason} from '../containers/api'
import '../styles/Mix-N-Match.css';
import 'bootstrap/dist/css/bootstrap.css';



export default class FilterBottomEffect extends Component{
  constructor(props){
    super(props)
    this.state={
      chosenbottom: '',   //top dropdown
      chosenstyle:'',  //selected style 
      chosencolor: '', //selected color
      chosenseason: '',  //selected season
      // bottomaye:[]
    }
  }


//--------------GET FUNCTIONS 
 handleBottoms=(e)=>{
   this.setState({ chosenbottom:e.target.value})
 }

 handleBottomStyle=(e)=>{
   this.setState({ chosenstyle:e.target.value})
}

handleBottomColor=(e)=>{
  this.setState({ chosencolor:e.target.value})
}

handleBottomSeason=(e)=>{
  this.setState({ chosenseason:e.target.value})
}


//--------------AXIOS FUNCTIONS 

submitBottomButton=(e)=>{
//BOTTOM

let url=`http://localhost:8080/clothes/season?category=bottom&style=${this.state.chosenstyle}&color=${this.state.chosencolor}&season=${this.state.chosenseason}`
console.log('boottom', url)
axios.get(url)
  .then(res => {
    let data = res.data;
    this.props.updateBottomFilter(data);
    // this.setState({bottomaye:data})
  })
}



//--------------------------BOTTOMS 

  render(){
    console.log('chosenbottom',this.state.chosenbottom)
    console.log('chosenstyle',this.state.chosenstyle)
    console.log('chosencolor',this.state.chosencolor)
    console.log('chosenseason',this.state.chosenseason)
    // console.log('chosenbottom',this.state.bottomaye)
  
    return( 
       <>
       <div className='dropdownmenu'> 
             <h2>BOTTOMS</h2>
                <form className ='filterBottom'>
                    <select id="inputState"  onChange={this.handleBottoms} className="form-control tab-color" defaultValue="CATEGORY">
                        <option value="CATEGORY" disabled>CATEGORY</option>  
                            <option>bottom</option>  
                    </select>

                    <select id="inputState"  onChange={this.handleBottomStyle} className="form-control tab-color"  defaultValue="STYLE">
                        <option value="STYLE" disabled>STYLE</option>
                        {
                            stylesByCategory.bottom.map((style, i) => {
                                return <option key={i}>{style}</option>
                            })
                        }
                    </select>

                    <select id="inputState"  onChange={this.handleBottomColor} className="form-control tab-color" defaultValue="COLOR">
                        <option value="COLOR" disabled>COLOR</option>
                        {
                            clothingColor.colors.map((color, i) => {
                                return <option key={i}>{color}</option>
                            })
                        }
                    </select>

                    <select id="inputState"  onChange={this.handleBottomSeason} className="form-control tab-color" defaultValue="SEASON">
                        <option value="SEASON" disabled>SEASON</option>
                        {
                            clothingSeason.seasons.map((season, i) => {
                                return <option key={i}>{season}</option>
                            })
                        }
                    </select>

                </form>

                <button type="button" onClick={this.submitBottomButton} class="btn btn-info"> Submit</button>
          </div>
        
    </>)

}
} 