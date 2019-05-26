import React, { Component } from 'react'
import {clothingCategory,stylesByCategory,clothingColor,clothingSeason} from '../containers/api'
import  '../styles/filterslider.css'


export default class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: clothingCategory,
            chosencategory: '',
            styles: [],
            chosenstyle: '',
            colors: clothingColor,
            chosencolor: '',
            seasons: clothingSeason,
            chosenseason: ''
        }
    }


    //---------HANDLES SELECTIONS 
    handleCategory = (e) => {
      this.setState({
          chosencategory: e.target.value,
          styles: stylesByCategory[e.target.value]
        })
      
}

    handleStyle = (e) => {
        console.log('STYLE selected', e.target.value);
        this.setState({ chosenstyle: e.target.value })

        
    }

    handleColor = (e) => {
        console.log('COLOR selected', e.target.value);
        this.setState({ chosencolor: e.target.value })
    }

    handleSeason = (e) => {
        console.log('SEASON selected', e.target.value);
        this.setState({ chosenseason: e.target.value })
    }
    
    //-------------------------------------------
    render() {
        console.log('category list', this.state.category)
        console.log('style list', this.state.style)
        console.log('season list', this.state.seasons)
        const { categories, styles } = this.state
        return (
           
                
                  
                    <div className="allSelections">
                        <form>
                            <select id="inputState" className="form-control" onChange={this.handleCategory} defaultValue="CATEGORY">
                                <option value="CATEGORY" disabled>CATEGORY</option>

                                {
                                    categories.map((category, i) => {
                                        return <option key={i} >{category}</option>
                                    })
                                }
                            </select>


                            <select id="inputState"  className="form-control" onChange={this.handleStyle} defaultValue="STYLE">
                                <option value="STYLE" disabled >STYLE</option>
                                {
                                    styles.map((style, i) => {
                                        return <option key={i} >{style}</option>
                                    })
                                }
                            </select>




                            <select id="inputState" onChange={this.handleColor} className="form-control" defaultValue="COLOR">
                                <option value="COLOR" disabled>COLOR</option>
                                {
                                    clothingColor.colors.map((color, i) => {
                                        return <option key={i} >{color}</option>
                                    })
                                }
                            </select>


                            <select id="inputState" onChange={this.handleSeason} className="form-control" defaultValue="SEASON">
                                <option value="SEASON" disabled>SEASON</option>
                                {
                                    clothingSeason.seasons.map((season, i) => {
                                        return <option key={i} >{season}</option>
                                    })
                                }
                            </select>


                        </form>
                    </div>
             
          
        );
    }
}