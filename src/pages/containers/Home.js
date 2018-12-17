import React, { Component } from "react";
import HomeLayout from "../components/Home-layout";
import NavBarContainer from "../../navBar/containers/NavBar-Container";
import Hero from "../../hero/components/hero";
import Services from "../../services/components/Services";

class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <NavBarContainer />
        <Hero />
        <Services />
      </HomeLayout>
    );
  }
}

export default Home;
