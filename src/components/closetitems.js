import React from 'react';

const ItemsList=(props)=>{
    return(
        <>
           <div className='col-4'>
            <img src={props.img} alt="pic"/>
         </div>
        </>
    )
}
export default ItemsList;