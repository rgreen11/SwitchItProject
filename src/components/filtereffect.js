import React, {Component} from 'react';
import axios from 'axios';
import firebase from '../firebase';
import {clothingCategory,stylesByCategory,clothingColor,clothingSeason} from '../containers/api'
import 'bootstrap/dist/css/bootstrap.css';


export default class FilterEffect extends Component{
  constructor(props){
    super(props)
    this.state={
      
      styles: [],
      chosentop: '',

      chosenstyle:'',
      colors: clothingColor,
      chosencolor: '',
      seasons: clothingSeason,
      chosenseason: '',
      

      topLongSleeve:[],
      topLSChoosen:'',
      styleshortsleeve:[],
      topSLChoosen:'',
      stylesleeveless:[],
      topSleeveless:''
    }
  }


//--------------AXIOS FUNCTIONS 
componentDidMount(){

  axios.get(`http://localhost:8080/clothes/style/top`)
  .then(response => response.data)
  .then(alltops => {
    console.log('styles',alltops )
      this.setState({ alltops })
  })

  
 //--------get long-sleeve style
 axios.get(`http://localhost:8080/clothes/long-sleeve`)
 .then(response => response.data)
 .then(topLongSleeve => {
   console.log('styles',topLongSleeve )
     this.setState({ topLongSleeve })
 })

    //--------get long-sleeve style
    axios.get(`http://localhost:8080/clothes/long-sleeve`)
    .then(response => response.data)
    .then(topLongSleeve => {
      console.log('styles',topLongSleeve )
        this.setState({ topLongSleeve })
    })

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

 handleStyleTops=(e)=>{
  this.setState({ chosenstyle:e.target.value})
}

  render(){
    // console.log('chosen',this.state.chosentop)
    // console.log('chosenstyle',this.state.topLongSleeve)
    console.log('random',this.state.topLongSleeve)
    const {styles,chosenstyle,chosentop,colors,chosencolor,seasons,chosenseason}=this.state
    return( 
  
// --------------------------------TOP
       <>

                <form>
                    <select id="inputState"  onChange={this.handleTops} className="form-control tab-color" defaultValue="CATEGORY">
                        <option value="CATEGORY" disabled>CATEGORY</option>  
                            <option>tops</option>  
                    </select>

                    <select id="inputState"  onChange={this.handleStyleTops} className="form-control tab-color"  defaultValue="STYLE">
                        <option value="STYLE" disabled>STYLE</option>
                        {
                            styles.map((style, i) => {
                                return <option key={i}>{style}</option>
                            })
                        }
                    </select>

                    <select id="inputState"  className="form-control tab-color" defaultValue="COLOR">
                        <option value="COLOR" disabled>COLOR</option>
                        {
                            clothingColor.colors.map((color, i) => {
                                return <option key={i}>{color}</option>
                            })
                        }
                    </select>

                    <select id="inputState"  className="form-control tab-color" defaultValue="SEASON">
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

