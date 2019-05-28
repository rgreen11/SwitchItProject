import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ItemsList from '../components/closetitems';

class Closet extends React.Component{
    constructor(props){
        super(props);
        this.state={
            usernames:[],
            items:[
               {img: 'https://www4.assets-gap.com/webcontent/0017/004/841/cn17004841.jpg'},
               {img: 'https://www2.assets-gap.com/webcontent/0016/940/632/cn16940632.jpg'},
               {img: 'https://www1.assets-gap.com/webcontent/0016/516/720/cn16516720.jpg'},
               {img: 'https://www2.assets-gap.com/webcontent/0016/781/185/cn16781185.jpg'},
               {img: 'https://www3.assets-gap.com/webcontent/0016/697/362/cn16697362.jpg'},
            ],
        }
    }
    render(){
        const {items}=this.state
        return(
            <>
            <div className='nav'>
            <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">Navbar</span>
            </nav>
            </div>
            
            <div className="container row col-md">
                    {
                        items.map((e,i)=>{ 
                        return(<ItemsList img={e.img} /> )
                        })
                    }
                </div>
            </>
        )
    }
}
export default Closet;