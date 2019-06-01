import React, {Component} from 'react';
import axios from 'axios';
import firebase from '../firebase';
import {clothingCategory,stylesByCategory,clothingColor,clothingSeason} from '../containers/api'
import 'bootstrap/dist/css/bootstrap.css';


export default class FilterEffect extends Component{
  constructor(props){
    super(props)
    this.state={
      categories: clothingCategory,
      chosencategory: '',
      styles: [],
      chosenstyle: '',
      colors: clothingColor,
      chosencolor: '',
      seasons: clothingSeason,
      chosenseason: '',
      // pictureTops:'',

    }
  }


//--------------AXIOS FUNCTIONS 
  // componentDidMount(){
  //   axios.get(`http://localhost:8080/clothes/style/top`)

  //   .then(response => response.data)
  //   .then(topsResponse => {
  //       this.setState({ pictureTops: topsResponse })
  //       console.log('pictops',pictureTops)
  //   })
  // }


  //--------------GET FUNCTIONS 
 handleStyleTops=(e)=>{
   console.log('i am loved -tops',e)
  //  this.setState({chosenstyle})
 }

  render(){
    const {categories,chosencategory,styles,chosenstyle,colors,chosencolor,seasons,chosenseason}=this.state
    return(
  

       <>

                <form>
                    <select id="inputState"  onChange={this.handleStyleTops} className="form-control tab-color" defaultValue="CATEGORY">
                        <option value="CATEGORY" disabled>CATEGORY</option>

                        {
                            categories.map((category, i) => {
                                return <option key={i}>{category}</option>
                            })
                        }
                    </select>

                    <select id="inputState"  className="form-control tab-color"  defaultValue="STYLE">
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
          
        
    </>)

}
} 

