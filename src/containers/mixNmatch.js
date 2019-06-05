import React from 'react'
import CarouselClass from '../components/carousel'
// import Calendar from '../components/Calendar';
import ButtonCalendar from '../components/ButtonCalendar';
import Media from 'react-media';
import {Link} from 'react-router-dom';
import FilterEffect from '../components/filtereffect';
import FilterContext from '../contexts/filterContext';


export default class mixNmatch extends React.Component {
  constructor(props){
    super(props)
    this.state={
      filteredTops: '',
    }
  }  

  updateFilter = (filteredResponse) => {
    console.log('new tops:', filteredResponse) //filter response is the response from the filtereffect
    this.setState({filteredTops: filteredResponse})
  }


  render(){
    return (
      <FilterContext.Provider value={this.state.filteredTops}>
        <FilterEffect updateFilter={this.updateFilter}/>
        <CarouselClass/>
        {/* <Calendar/> */}
        {/* <ButtonCalendar /> */}
      
      </FilterContext.Provider>
  
    )
  }

}


