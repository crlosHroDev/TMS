import React, { Component } from "react";
import HomeLayout from "../components/Home-layout";
import NavBar from "../../navBar/components/NavBar";
import Hero from "../../hero/components/hero";
import Services from "../../services/components/Services";
import ModalContainer from "../../widgets/containers/modal-container";
import Modal from "../../widgets/components/modal";
import TMS from './tms';

class Home extends Component {
  state = {
    modalVisible: false
  };
  hideModal=(event)=>{
    this.setState({
      modalVisible:false,
    })
  }
  showModal=()=>{
    this.setState({
      modalVisible:true,
    })
  }

  render() {
    return (
        <HomeLayout>
          <NavBar showModal={this.showModal} />
          <Hero />
          <Services />
          {
            this.state.modalVisible &&
          <ModalContainer>
            <Modal hideModal={this.hideModal} />
          </ModalContainer>
          }
        </HomeLayout>
    );
  }
}

export default Home;
