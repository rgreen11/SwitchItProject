import React from 'react';

const ItemsList=(props)=>{
    return(
        <>
           <div className='col-2'>
            <img src={props.img} style={{width:'250px'}}  style={{height:'200px'}} alt="item"/>
         </div>
        </>
    )
}
export default ItemsList;