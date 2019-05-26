// import React from 'react';
// import axios from 'axios';
// // import Showimages from './pics';
// // import Show from './shows';

// class PicturesRender extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       // pics: null, //componentdidmount ALL DATA from comments api sets here 
//       picArray:[]
//     }
//   }


//   componentDidMount() {
//     // const{imgUrl}=this.state
//     // const { id } = this.props.match.params;
//     axios.get(`http://localhost:8080/uploadpics/pics`)
//       .then(response => response.data)
//       .then(pics => {
//         this.setState({picArray:pics})
//       })
// }



//   render() {
    
//     // const{input,comments}=this.state
//     console.log('this is state',this.state)
//     return (
//       <>
//         {
//           !this.state.picArray ? <h1>Loading...</h1> :
//             <>
//               <img src ={this.state.picArray.img_url}/>
//             </>
//         }


// {
//                     this.state.picArray.map((e, i) => {
//                       return(
                        
//                         <h4>{ <img src ={e.img_url}/>} </h4>
//                       )
//                     })
//                   }
      
//       </>


//     )
//   }
// }

// export default PicturesRender;