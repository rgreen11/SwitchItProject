import React, { Component } from "react";
import firebase from "../firebase";
import ImageService from "../services/images";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css";
import "../styles/AddItem.css";
import {
  clothingCategory,
  stylesByCategory,
  clothingColor,
  clothingSeason
} from "../containers/api";
import { Animated } from "react-animated-css";
import Media from "react-media";
import AuthContext from "../contexts/auth";
// import FilterAllCategory from "../"

export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileUploadURL: "", //firebase uploadnamapic
      categories: clothingCategory,
      chosencategory: "",
      styles: [],
      chosenstyle: "",
      colors: clothingColor,
      chosencolor: "",
      seasons: clothingSeason,
      chosenseason: "",
      isOpen: false,
      user: null,
      id: null,
      preview: null,
      image: null
    };
  }

  //---------HANDLES SELECTIONS
  handleCategory = e => {
    this.setState({
      chosencategory: e.target.value,
      styles: stylesByCategory[e.target.value]
    });
  };

  handleStyle = e => {
    this.setState({ chosenstyle: e.target.value });
  };

  handleColor = e => {
    this.setState({ chosencolor: e.target.value });
  };

  handleSeason = e => {
    this.setState({ chosenseason: e.target.value });
  };

  saveImage = url => {
    const date = Date();
    ImageService.saveImage(url, date);
  };

  handleFileInput = async e => {
    const firstFile = e.target.files[0];
    const root = firebase.storage().ref();
    const newImage = root.child(firstFile.name);
    try {
      const snapshot = await newImage.put(firstFile);
      const url = await snapshot.ref.getDownloadURL();
      this.setState({ fileUploadURL: url });
    } catch (err) {
    }
  };

  postPosted = e => {
    if (
      this.state.chosencategory === "" ||
      this.state.chosencolor === "" ||
      this.state.chosenseason === "" ||
      this.state.chosenstyle === ""
    ) {
      return alert("You must select from all fields");
    } else {
      e.preventDefault();

      axios({
        method: "POST",
        url: `https://switchit1234.herokuapp.com/clothes/newpic`,
        data: {
          category: this.state.chosencategory,
          style: this.state.chosenstyle,
          color: this.state.chosencolor,
          season: this.state.chosenseason,
          user_id: "1",
          img_url: this.state.fileUploadURL
        }
      })
        .then(() => alert("Picture was added successfully"))

        .catch(function (error) {
          console.log(error)
        });
    }
  };

  //--------------- toggle isOpen

  handleSlider = isOpen => {
    if (isOpen === true) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  };

  render() {
    let { fileUploadURL, categories, styles, isOpen } = this.state;

    //-----------------------------------------------------------------------------------------------
    const selectionToggle = () => {
      return (
        <>
          <Media query="(min-width: 800px)">
            {matches =>
              matches ? (
                <div
                  className={`slider category-position-left ${
                    +isOpen ? "fade-inShow" : "fade-in2"
                    }`}
                >
                  <div className="sliderbox">
                    <form>
                      <select
                        id="inputState"
                        onChange={this.handleCategory}
                        className="form-control tab-color"
                        defaultValue="CATEGORY"
                      >
                        <option value="CATEGORY" disabled>
                          CATEGORY
                        </option>

                        {categories.map((category, i) => {
                          return <option key={i}>{category}</option>;
                        })}
                      </select>

                      <select
                        id="inputState"
                        className="form-control tab-color"
                        onChange={this.handleStyle}
                        defaultValue="STYLE"
                      >
                        <option value="STYLE" disabled>
                          STYLE
                        </option>
                        {styles.map((style, i) => {
                          return <option key={i}>{style}</option>;
                        })}
                      </select>

                      <select
                        id="inputState"
                        onChange={this.handleColor}
                        className="form-control tab-color"
                        defaultValue="COLOR"
                      >
                        <option value="COLOR" disabled>
                          COLOR
                        </option>
                        {clothingColor.colors.map((color, i) => {
                          return <option key={i}>{color}</option>;
                        })}
                      </select>

                      <select
                        id="inputState"
                        onChange={this.handleSeason}
                        className="form-control tab-color"
                        defaultValue="SEASON"
                      >
                        <option value="SEASON" disabled>
                          SEASON
                        </option>
                        {clothingSeason.seasons.map((season, i) => {
                          return <option key={i}>{season}</option>;
                        })}
                      </select>

                      <div className="form-group upload-button-category">
                        <button
                          type="button "
                          onClick={this.postPosted}
                          className="button"
                        >
                          Upload
                        </button>
                      </div>

                      <div className="containertext">
                        <h6 className="slidertext">Done</h6>
                        <button
                          className="rightarrow arrow-left"
                          onClick={() => {
                            this.handleSlider(this.state.isOpen);
                          }}
                        >
                          <i></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              ) : (
                  <Animated
                    animationIn="fadeInLeftBig"
                    animationOut="fadeOutLeftBig"
                    animationInDuration={1000}
                    animationOutDuration={1000}
                    isVisible={isOpen}
                    className={"slider category-position-left fade-inShow"}
                  >
                    <div className="sliderbox">
                      <form>
                        <select
                          id="inputState"
                          onChange={this.handleCategory}
                          className="form-control tab-color"
                          defaultValue="CATEGORY"
                        >
                          <option value="CATEGORY" disabled>
                            CATEGORY
                        </option>

                          {categories.map((category, i) => {
                            return <option key={i}>{category}</option>;
                          })}
                        </select>

                        <select
                          id="inputState"
                          className="form-control tab-color"
                          onChange={this.handleStyle}
                          defaultValue="STYLE"
                        >
                          <option value="STYLE" disabled>
                            STYLE
                        </option>
                          {styles.map((style, i) => {
                            return <option key={i}>{style}</option>;
                          })}
                        </select>

                        <select
                          id="inputState"
                          onChange={this.handleColor}
                          className="form-control tab-color"
                          defaultValue="COLOR"
                        >
                          <option value="COLOR" disabled>
                            COLOR
                        </option>
                          {clothingColor.colors.map((color, i) => {
                            return <option key={i}>{color}</option>;
                          })}
                        </select>

                        <select
                          id="inputState"
                          onChange={this.handleSeason}
                          className="form-control tab-color"
                          defaultValue="SEASON"
                        >
                          <option value="SEASON" disabled>
                            SEASON
                        </option>
                          {clothingSeason.seasons.map((season, i) => {
                            return <option key={i}>{season}</option>;
                          })}
                        </select>

                        <div className="form-group upload-button-category">
                          <button
                            type="button "
                            onClick={this.postPosted}
                            className="button"
                          >
                            Upload
                        </button>
                        </div>

                        <div className="containertext">
                          <h6 className="slidertext">Done</h6>
                          <button
                            className="rightarrow arrow-left"
                            onClick={() => {
                              this.handleSlider(this.state.isOpen);
                            }}
                          >
                            <i></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </Animated>
                )
            }
          </Media>
        </>
      );
    };
    //-----------------------------------------------------------------------------------------------
    return (
      <>
        <AuthContext.Consumer>
          {user => {
            console.log(user, "is user rn");
            if (user.user || user.user_id) {
              return (
                <>
                  <div className={isOpen ? "shadow" : "noshadow"}></div>

                  <div className="bigbox">
                    <div className="upload-box">
                      <label className="upload-button">
                        <h1 className={fileUploadURL ? "remove" : "text"}>
                          Select
                        </h1>
                        <h1 className={fileUploadURL ? "remove" : "text"}>
                          Image
                        </h1>
                        <img
                          className={fileUploadURL ? "actualImage" : "remove"}
                          src={fileUploadURL}
                          alt={1}
                        />
                        <input
                          type="file"
                          onChange={this.handleFileInput}
                          className={
                            fileUploadURL ? "remove" : "hidden_input_file"
                          }
                          capture="camera"
                        />
                      </label>
                    </div>

                    <div className="button_holder">
                      <button
                        type="button"
                        onClick={this.postPosted}
                        className="btn btn-info sunny-morning-gradient"
                      >
                        <h3 className="button-text">Submit</h3>{" "}
                      </button>
                    </div>
                    <div className="containertext">
                      <h6 className="slidertext">Filter</h6>
                    </div>
                    <button
                      className="rightarrow arrow-right"
                      onClick={() => {
                        this.handleSlider(this.state.isOpen);
                      }}
                    >
                      <i></i>
                    </button>
                    {selectionToggle()}
                  </div>
                </>
              );
            } else {
              return !user ? (
                <h5>You Are Not Logged In!</h5>
              ) : (
                  <h5> {user.user || user.user_id}</h5>
                );
            }
          }}
        </AuthContext.Consumer>
      </>
    );
  }
}
