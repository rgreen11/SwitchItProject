import React from 'react'
import CarouselClass from '../components/carousel'
// import Calendar from '../components/Calendar';
import ButtonCalendar from '../components/ButtonCalendar';
import Media from 'react-media';
import {Link} from 'react-router-dom';
import FilterEffect from '../components/filtereffect';
import FilterBottomEffect from '../components/filterbottomeffect';
import AuthContext from '../contexts/auth';


export default class mixNmatch extends React.Component {
  constructor(props){
    super(props)
    this.state={
      filteredTops: '',
      filteredBottoms:'',
    }
  }  

  updateFilter = (filteredResponse) => {
    console.log('new tops:', filteredResponse) //filter response is the response from the filtereffect
    this.setState({filteredTops: filteredResponse})
  }
  
  updateBottomFilter = (filteredResponse) => {
    console.log('new bottoms:', filteredResponse) //filter response is the response from the filtereffect
    this.setState({filteredBottoms: filteredResponse})
  }

  render(){
    return (
      <AuthContext.Provider value={this.state}>
      
  
        <FilterEffect updateFilter={this.updateFilter}/>
        <CarouselClass/>
        <FilterBottomEffect updateBottomFilter={this.updateBottomFilter}/>
        {/* <Calendar/> */}
        {/* <ButtonCalendar /> */}
   
      
      </AuthContext.Provider>
  
    )
    }

}


