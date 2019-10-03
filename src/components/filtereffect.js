import React, { Component } from 'react';
import axios from 'axios';
import firebase from '../firebase';
import { stylesByCategory, clothingColor, clothingSeason } from '../containers/api'
import '../styles/Mix-N-Match.css';
import 'bootstrap/dist/css/bootstrap.css';
import FilterClothes from './FilterClothes';


export default class FilterEffect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chosentop: '',   //top dropdown
      chosenstyle: '',  //selected style 
      chosencolor: '', //selected color
      chosenseason: '',  //selected season
    }
  }


  //--------------GET FUNCTIONS 
  handleTops = (e) => {
    this.setState({ chosentop: e.target.value })
  }

  handleTopStyle = (e) => {
    this.setState({ chosenstyle: e.target.value })
  }

  handleTopColor = (e) => {
    this.setState({ chosencolor: e.target.value })
  }

  handleTopSeason = (e) => {
    this.setState({ chosenseason: e.target.value })
  }


  //--------------AXIOS FUNCTIONS 

  submitButton = (e) => {
    //TOPS 
    const allSelected = this.state


    // //SEASON

    let url = `https://switchit1234.herokuapp.com/clothes/season?category=top&style=${this.state.chosenstyle}&color=${this.state.chosencolor}&season=${this.state.chosenseason}`
    console.log('lala', url)
    axios.get(url)
      .then(res => {
        let data = res.data;
        this.props.updateFilter(data);
      })
  }



  //--------------------------BOTTOMS 

  render() {

    return (
      <>

        <div className='stuff'>
          <div className="headerBottom">
            <h2>TOPS</h2>
          </div>
          <FilterClothes
            stylesByCategory={stylesByCategory}
            clothingColor={clothingColor}
            clothingSeason={clothingSeason}
            handleTops={this.handleTops}
            handleTopStyle={this.handleTopStyle}
            handleTopColor={this.handleTopColor}
            handleTopSeason={this.handleTopSeason}
          />
          <div className='topB'>
            <button type="button" onClick={this.submitButton} className="btn btn-info sunny-morning-gradient center"> Submit</button>
          </div>
        </div>
      </>)

  }
}

