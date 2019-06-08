import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Context from './carousel';
import axios from 'axios';


class ModalNickname extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false,
        nickName: '',
      };
  
    }


  
    toggle=()=> {
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    }
  

    handleChange = (e)=>{
        this.setState({nickName: e.target.value})
    }

    handleClick = (nickName)=>{
      const {currentTopIndex, currentBottomIndex, pictureTops, pictureBottoms} = this.props.state

      
      let idTop = pictureTops[currentTopIndex].id
      let idBottom = pictureBottoms[currentBottomIndex].id


      localStorage.setItem('nickName', nickName)

      axios({
        method: 'post',
        url: 'http://localhost:8080/ootd',
        data: {
            clothes_id: idTop,
            nickname: nickName,
            stamp: '',
        }
      })
      .then(data=>{
          console.log('ootd saved')
      })
      .catch(error=>{
          console.log(error)
      })


      axios({
        method: 'post',
        url: 'http://localhost:8080/ootd',
        data: {
            clothes_id: idBottom,
            nickname: nickName,
            stamp: '',
        }
      })
      .then(data=>{
          console.log('ootd saved')
      })
      .catch(error=>{
          console.log(error)
      })

  }
    render() {
        // console.log(this.props.state)
        let {nickName} = this.state
      return (

        <div>
         
            <Button color="success" onClick={this.toggle}>Add to Calender</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Add a NickName</ModalHeader>
              <ModalBody>
              <input className='inputNickName' onChange={(e)=>{this.handleChange(e)}}></input>
              </ModalBody>
              <ModalFooter>
              <Link to='/calendar' onClick={(props)=>{this.handleClick(nickName)}} className="display"><Button color="primary" onClick={this.toggle}>Save</Button></Link>
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
        </div>

      );
    }
  }
  
  export default ModalNickname;
  

