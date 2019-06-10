import React from 'react';

const ItemsList=(props)=>{
    return(
        <>
           <div className='col-4'>
            <img src={props.img} style={{width:'150px'}}  style={{height:'360px'}} alt="item"/>
         </div>
        </>
    )
}
export default ItemsList;