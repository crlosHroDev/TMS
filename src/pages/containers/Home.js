import React, { Component } from "react";
import HomeLayout from "../components/Home-layout";
import NavBarContainer from "../../navBar/containers/NavBar-Container";
import Hero from "../../hero/components/hero";
import Services from "../../services/components/Services";
import ModalContainer from "../../widgets/containers/modal-container";
import Modal from "../../widgets/components/modal";
import TMS from './tms';

class Home extends Component {
  state = {
    handleModal: false
  };
  showModal = () => {
    if (!this.state.handleModal) {
      const modal = document.getElementById("modal");
      modal.style.display = "flex";
      this.setState({ handleModal: true });
    }
  };

  hideModal = () => {
    if (this.state.handleModal) {
      const modal = document.getElementById("modal");
      modal.style.display = "none";
      this.setState({ handleModal: false });
    }
  };
  

  render() {
    return (
        <HomeLayout>
          <NavBarContainer showModal={this.showModal} />
          <Hero />
          <Services />
          <ModalContainer>
            <Modal hideModal={this.hideModal} />
          </ModalContainer>
        </HomeLayout>
    );
  }
}

export default Home;
