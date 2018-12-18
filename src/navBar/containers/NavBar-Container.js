import React, { Component } from "react";
import NavBar from "../components/NavBar";

class NavBarContainer extends Component {
  render() {
    return <NavBar showModal={this.props.showModal} />;
  }
}

export default NavBarContainer;
