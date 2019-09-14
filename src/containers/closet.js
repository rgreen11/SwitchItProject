import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ItemsList from "../components/closetitems";
import axios from "axios";
import { Link } from "react-router-dom";
import Filter from "../components/closetfilter.js";
import "../components/closetdisplay.css";
import AuthContext from "../contexts/auth";

class Closet extends React.Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      id: [],
      img_url: [],
      user: null,
      uid: null,
      name: []
    };
  }

  componentDidMount() {
    let name = localStorage.getItem("name");
    axios
      .get(`https://switchit1234.herokuapp.com/clothes`)
      .then(response => response)
      .then(pics => {
        this.setState({ img_url: pics.data, name: name });
      });
  }

  getClothingItems = filteredItems => {
    this.setState({ img_url: filteredItems });
  };

  handleClick = () => {
    this.props.history.push("/Additem");
  };

  render() {
    let { img_url, name } = this.state;

    let date = new Date();

    if (img_url.data) {
      return (
        <>
          <div className="positionButton">
            <h1>{name}'s Closet</h1>
            <button
              onClick={this.handleClick}
              type="button"
              className="btn btn-info sunny-morning-gradient"
            >
              UPLOAD IMAGES
            </button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="topB">
            <h1>{name}'s Closet</h1>
          </div>
          <div className="container">
            <div className="row">
              <Filter getClothingItems={this.getClothingItems} />

              <div className="col-10">
                <ItemsList img_url={img_url} />
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}
export default Closet;
