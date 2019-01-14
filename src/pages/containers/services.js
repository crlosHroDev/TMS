import React,{Component} from 'react';
import {connect} from 'react-redux';
import ModalContainer from '../../widgets/containers/modal-container';
import ServiceLayout from '../components/services-layout';
import Modal from '../../widgets/components/modal';

class Services extends Component{
    render(){
        return(
            <ServiceLayout>
                {
                    this.props.modalVisible &&
                <ModalContainer>
                    <Modal/>
                </ModalContainer>
                }
            </ServiceLayout>
        )
    }
}
function mapStateToProps(state,props){
    return{
      modalVisible:state.get('modalVisible')
    }
  }
  
export default connect(mapStateToProps)(Services);