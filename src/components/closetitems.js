import React from 'react';

const ItemsList=(props)=>{
    return(
        <>
           <div className='col-3'>
            <img src={props.img} style={{width:'150px'}} alt="item"/>
         </div>
        </>
    )
}
export default ItemsList;