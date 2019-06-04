import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
// import Media from "react-media";
// import Modal from './Modal';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


// let state = {
//     text: ''
// }






// export default (props) => {



//   return  (
//       <>
   
//             <button className='mixClothes' type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" >Add to Calendar</button>
  

//   <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//     <div class="modal-dialog" role="document">
//       <div class="modal-content">
//         <div class="modal-header">
//           <h5 class="modal-title" id="exampleModalLabel">Add a NickName</h5>
//           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <div class="modal-body">

//         </div>
//         <div class="modal-footer">
//           <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        //   <Link to='/calendar' onClick={(props)=>{handleClick(props, text)}} className="display"><button type="button" className="btn btn-primary">Save changes</button></Link>
//         </div>
//       </div>
//     </div>
//   </div>
//   </>
//   )
  

// }

class ModalNickname extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false,
        text: '',
      };
  
    }

    
  
    toggle=()=> {
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    }
  

    handleClick = (text)=>{
        
        const clothes = this.props.state
        localStorage.setItem('ootd', clothes)
        localStorage.setItem('nickName', text)

    }

    handleChange = (e)=>{
        this.setState({text: e.target.value})
    }

    render() {
        console.log(this.props.state)
        let {text} = this.state
      return (
        <div>
          <Button color="success" onClick={this.toggle}>Add to Calender</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Add a NickName</ModalHeader>
            <ModalBody>
            <input className='inputNickName' onChange={(e)=>{this.handleChange(e)}}></input>
            </ModalBody>
            <ModalFooter>
            <Link to='/calendar' onClick={(props)=>{this.handleClick(text)}} className="display"><Button color="primary" onClick={this.toggle}>Save</Button></Link>
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }
  
  export default ModalNickname;
  

