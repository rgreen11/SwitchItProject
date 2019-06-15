import React from 'react';

const ItemsList=(props)=>{
    return(
        <>
           {/* <div className=''> */}
            <img src={props.img}   style={{ height:'195px' }} alt="item"/>
         {/* </div> */}
        </>
    )
}
export default ItemsList;