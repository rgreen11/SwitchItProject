import React from 'react'
import CarouselClass from '../components/carousel'
import Calendar from '../components/Calendar';
import FilterEffect from '../components/filtereffect'


const mixNmatch = (props) => {
  return (
    <>
      <FilterEffect/>
      <CarouselClass />
      <Calendar/>
    </>

  )
}
export default mixNmatch;

