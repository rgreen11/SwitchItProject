import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { clothingCategory, stylesByCategory, clothingColor, clothingSeason } from '../containers/api';
import './closetfilter.css';
import FilterAllCategory from './filterCategory/filterAllCategory';


class Filter extends Component {
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
    // RICH IF USER CLICKS SUBMIT THEY SHOULD NOT BE ABLE TO CHANGE THE CLOSET
    // MAKE SURE IF THE USER CLICKS A CATEGORY MAKE SURE THERE IS A CALL TO THE CATEGORY API
    onClickSubmitButton = () => {
        if (!this.state.chosencategory) return alert("Select a Category")
        let url = `https://switchit1234.herokuapp.com/clothes/season?category=top&style=${this.state.chosenstyle}&color=${this.state.chosencolor}&season=${this.state.chosenseason}`
        axios.get(url)
            .then(res => {
                this.props.getClothingItems(res.data)
            }).catch((error) => {
                alert("Must enter a valid input")
            })
    }

    render() {
        let { styles } = this.state
        return (
            <>
                <div className='col-2'>
                    <form>
                        <FilterAllCategory handleCategory={this.handleCategory} handleColor={this.handleColor} handleSeason={this.handleSeason} handleStyle={this.handleStyle} styles={styles} />
                        <div className="button-to-filter">
                            <button type="submit" onClick={this.onClickSubmitButton} className="btn btn-info sunny-morning-gradient">Submit</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default Filter;
