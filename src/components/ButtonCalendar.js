import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Context from './carousel';
import axios from 'axios';
import Media from "react-media";
import '../styles/ButtonCalender.css';
import Calendar from 'react-calendar';


class ModalNickname extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        displayCal: false,
        modal: false,
        nickName: '',
        date: new Date(),
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

    handleSmallCal = ()=>{
      if (this.state.displayCal === false){
        this.setState({displayCal: true})
      }
      else {
        this.setState({displayCal: false})
      }
  }


  onChange = date => {
    console.log(date)
    console.log(this.state.nickName)
    axios({
      method: 'post',
      url: 'https://switchit1234.herokuapp.com/clothes/ootd',
      data: {
          clothes_id: '1',
          stamp: date,
          nickname: this.state.nickName
      }
    })
    .then(data=>{

        console.log('ootd saved')
    })
    .catch(error=>{
        console.log(error)
    })
    this.setState({ date })
  }



    handleClick = (nickName)=>{
      const {currentTopIndex, currentBottomIndex, pictureTops, pictureBottoms} = this.props.state
      
      let idTop = pictureTops[currentTopIndex].id
      let idBottom = pictureBottoms[currentBottomIndex].id


      localStorage.setItem('nickName', nickName)

      axios({
        method: 'post',
        url: 'https://switchit1234.herokuapp.com/ootd',
        data: {
            top_id: idTop,
            bottom_id: idBottom,
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


      // axios({
      //   method: 'post',
      //   url: 'https://switchit1234.herokuapp.com/ootd',
      //   data: {
      //       clothes_id: idBottom,
      //       nickname: nickName,
      //       stamp: '',
      //   }
      // })
      // .then(data=>{
      //     console.log('ootd saved')
      // })
      // .catch(error=>{
      //     console.log(error)
      // })

  }
    render() {
        // console.log(this.props.state)
        let {nickName, displayCal} = this.state;
      console.log(displayCal)
      return (
       
        <div>
          <Media query="(min-width: 800px)">
         {matches =>
         matches ? (
           <>
            <Button color="success" onClick={this.toggle}>Add to Calender</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Add A Nickname</ModalHeader>
              <ModalBody>
              <input className='inputNickName' onChange={(e)=>{this.handleChange(e)}}></input>
              </ModalBody>
              <ModalFooter>
              <Link to='/calendar' onClick={(props)=>{this.handleClick(nickName)}} className="display"><Button color="primary" onClick={this.toggle}>Save</Button></Link>
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
            </>
         ) : (
           <div >
          <Button color="success" onClick={this.toggle}>Add to Calender</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={`${this.props.className} `}>
            <ModalHeader className={`${this.state.displayCal ? 'remove' : ''}`} toggle={this.toggle}>Add A Nickname</ModalHeader>
            <ModalHeader className={`${this.state.displayCal ? '' : 'remove'}`} toggle={this.toggle}>Save Outfit</ModalHeader>
            <ModalBody>
            <input className={`${'inputNickName'+ this.state.displayCal ?'': 'remove' }`} onChange={(e)=>{this.handleChange(e)}}></input>
            <div>
              <Calendar className={`${displayCal ? 'react-calendar': 'remove'}`}
                onChange={this.onChange}
                value={this.state.date}
              />
            </div>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={_ => {this.handleSmallCal(displayCal)}} className={`${this.state.displayCal ? 'remove': ''  }`}>Save name</Button>
            <Button color="primary" onClick={this.toggle} className={`${this.state.displayCal ?'': 'remove' }`}>Save Date</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
          </div>
          )
         }
            </Media>

        </div>
        
      );
    }
  }
  
  export default ModalNickname;
  

