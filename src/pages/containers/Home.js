import React, { Component } from "react";
import {connect} from 'react-redux';
import HomeLayout from "../components/Home-layout";
import Hero from "../../hero/components/hero";
import ModalContainer from "../../widgets/containers/modal-container";
import Modal from "../../widgets/components/modal";
import ErrorBoundary from '../../error/container/error';
// import Services from '../../services/components/Services';

class Home extends Component {
  render() {
    return (
        <HomeLayout>
            <Hero />
          {/* <Services/> */}
          {
            this.props.modalVisible &&
          <ErrorBoundary>
            <ModalContainer>
              <Modal />
            </ModalContainer>
          </ErrorBoundary>  
          }
        </HomeLayout>
    );
  }
}

function mapStateToProps(state,props){
  return{
    modalVisible:state.get('modal').get('modalVisible'),
    hide:state.get('hide')
  }
}

export default connect(mapStateToProps)(Home);
