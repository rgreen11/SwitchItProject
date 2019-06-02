import React, {Component} from 'react';
import axios from 'axios';
import firebase from '../firebase';
import {clothingCategory,stylesByCategory,clothingColor,clothingSeason} from '../containers/api'
import 'bootstrap/dist/css/bootstrap.css';


export default class FilterEffect extends Component{
  constructor(props){
    super(props)
    this.state={
      chosentop: '',   //top dropdown
      chosenstyle:[],  //selected style 
      chosencolor: [], //selected color
      chosenseason: [],  //selected season
      

      // topLongSleeve:[],
      // topLSChoosen:'',
      // styleshortsleeve:[],
      // topSLChoosen:'',
      // stylesleeveless:[],
      // topSleeveless:''
    }
  }


//--------------AXIOS FUNCTIONS 
componentDidMount(){
 
 //-------------------TOPS 
  

    //--------get short-sleeve style
    axios.get(`http://localhost:8080/clothes/short-sleeve`)
    .then(response => response.data)
    .then(styleshortsleeve => {
      console.log('styles2', styleshortsleeve)
        this.setState({ styleshortsleeve})
    }) 

    //--------get sleeve-less style
    axios.get(`http://localhost:8080/clothes/sleeve-less`)
    .then(response => response.data)
    .then(stylesleeveless => {
      console.log('styles3',stylesleeveless )
        this.setState({ stylesleeveless})
    })
  }


//--------------GET FUNCTIONS 
 handleTops=(e)=>{
   this.setState({ chosentop:e.target.value})
 }

 handleTopStyle=(e)=>{
   console.log(e.target.value)
  axios.get(`http://localhost:8080/clothes/${e.target.value}`)

  .then(response => response.data)
  .then(styleResponse => {
    this.setState({ chosenstyle:styleResponse})
  })

}

handleTopColor=(e)=>{
  axios.get(`http://localhost:8080/clothes/color/${e.target.value}`)

  .then(response => response.data)
  .then(colorResponse => {
    this.setState({ chosencolor:colorResponse})
  })
}

handleTopSeason=(e)=>{
  axios.get(`http://localhost:8080/clothes/season/${e.target.value}`)

  .then(response => response.data)
  .then(seasonResponse => {
    this.setState({ chosenseason:seasonResponse})
  })
  
}

  render(){
    // console.log('chosentop',this.state.chosentop)
    console.log('chosenstyle',this.state.chosenstyle)
    console.log('chosencolor',this.state.chosencolor)
    console.log('chosenseason',this.state.chosenseason)
    const {chosenstyle,chosentop,colors,chosencolor,seasons,chosenseason}=this.state
    return( 
  
// --------------------------------TOP
       <>

                <form>
                    <select id="inputState"  onChange={this.handleTops} className="form-control tab-color" defaultValue="CATEGORY">
                        <option value="CATEGORY" disabled>CATEGORY</option>  
                            <option>tops</option>  
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

                <button type="button" class="btn btn-info"> Submit</button>
          
        
    </>)

}
} 

