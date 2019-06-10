import React, { Component } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
// import Closet from "../containers/closet" ;
import {clothingCategory,stylesByCategory,clothingColor,clothingSeason} from '../containers/api'
import Axios from 'axios';



 class Items extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chosencategory: '',
            chosenstyle: '',
            chosencolor: '',
            chosenseason: '',
            styles: [],
        
        }
    }

    handleCategory = (e) => {
      this.setState({
          chosencategory: e.target.value,
          styles: stylesByCategory[e.target.value]
        })  
}

    handleStyle = (e) => {
        this.setState({ chosenstyle: e.target.value })

    }

    handleColor = (e) => {
        this.setState({ chosencolor: e.target.value })
    }

    handleSeason = (e) => {
        this.setState({ chosenseason: e.target.value })
    }
    onClickSubmitButton = (e)=>{
      let url=`http://localhost:8080/clothes/season/${this.state.chosencategory}/${this.state.chosenstyle}/${this.state.chosencolor}/${this.state.chosenseason}`
        console.log('testing', url)
        axios.get(url)
          .then(res => {
            console.log('data' ,res.data);
            console.log('function from parent', this.props.getClothingItems(res.data))
          })
    }
    
    render() {
      let {styles} = this.state
      console.log('category',this.state.chosencategory)
      console.log('style',this.state.chosenstyle)
      console.log('color',this.state.chosencolor)
      console.log('season',this.state.chosenseason)
      
            return(
                <>
     
                    <form>
                        <select id="inputState" onChange={this.handleCategory} className="form-control tab-color" defaultValue="CATEGORY">
                            <option value="CATEGORY" disabled>CATEGORY</option>

                            {
                                clothingCategory.map((category, i) => {
                                    return <option key={i}>{category}</option>
                                })
                            }
                        </select>

                        <select id="inputState"  className="form-control tab-color" onChange={this.handleStyle} defaultValue="STYLE">
                            <option value="STYLE" disabled>STYLE</option>
                            {
                                styles.map((style, i) => {
                                    return <option key={i}>{style}</option>
                                })
                            }
                        </select>

                        <select id="inputState" onChange={this.handleColor} className="form-control tab-color" defaultValue="COLOR">
                            <option value="COLOR" disabled>COLOR</option>
                            {
                                clothingColor.colors.map((color, i) => {
                                    return <option key={i}>{color}</option>
                                })
                            }
                        </select>

                        <select id="inputState" onChange={this.handleSeason} className="form-control tab-color" defaultValue="SEASON">
                            <option value="SEASON" disabled>SEASON</option>
                            {
                                clothingSeason.seasons.map((season, i) => {
                                    return <option key={i}>{season}</option>
                                })
                            }
                        </select>

                        <div className="button-to-filter">
                            <button type="submit"  onClick ={this.onClickSubmitButton} className="button">Submit</button>
                        </div>

                    </form>
                
                </>  
            )
          }
        }
        
        export default Items;