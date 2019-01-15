import React, { Component } from "react";
import {connect} from 'react-redux';
import HomeLayout from "../components/Home-layout";
import Hero from "../../hero/components/hero";
import ModalContainer from "../../widgets/containers/modal-container";
import Modal from "../../widgets/components/modal";
// import Services from '../../services/components/Services';

class Home extends Component {
  render() {
    return (
        <HomeLayout>
            <Hero />
          {/* <Services/> */}
          {
            this.props.modalVisible &&
          <ModalContainer>
            <Modal />
          </ModalContainer>
          }
        </HomeLayout>
    );
  }
}

function mapStateToProps(state,props){
  return{
    modalVisible:state.get('modal').get('modalVisible')
  }
}

export default connect(mapStateToProps)(Home);
