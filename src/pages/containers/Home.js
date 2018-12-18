import React, { Component } from "react";
import HomeLayout from "../components/Home-layout";
import NavBarContainer from "../../navBar/containers/NavBar-Container";
import Hero from "../../hero/components/hero";
import Services from "../../services/components/Services";
import ModalContainer from "../../widgets/containers/modal-container";
import Modal from '../../widgets/components/modal'

class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <NavBarContainer />
        <Hero />
        <Services />
        <ModalContainer>
          <Modal/>
        
          </ModalContainer> 
      </HomeLayout>
    );
  }
}

export default Home;
