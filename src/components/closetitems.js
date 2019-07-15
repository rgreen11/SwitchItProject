import React from 'react';

const ItemsList=(props)=>{
    console.log('imgs:',props)
    return(
        <>
           {/* <div className=''> */}
            <img src={props.img}   style={{ height:'195px' }} alt="item"/>
         {/* </div> */}
        </>
    )
}
export default ItemsList;