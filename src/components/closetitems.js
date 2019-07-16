import React from 'react';

const ItemsList=(props)=>{
    console.log('img:',props.img_url)
    if(!props.img_url) return <h1>Loading</h1>
    return(
        <>
        { props.img_url.map((e,i)=>{
            return <img src={e.img_url} style={{ height:'195px' }} alt={i}/>
        })
        } 
        </>
    )
}
export default ItemsList;