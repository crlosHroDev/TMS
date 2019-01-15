import React,{Component} from "react";
import {connect} from 'react-redux';
// import photo from '../../images/slider_1.jpg';
import "./hero.css";


class Hero extends Component  {
  previousPage=()=>{
    this.props.dispatch({
      type:'DECREMENT',
    })
  }

  nextPage=()=>{
    this.props.dispatch({
      type:'INCREMENT',
    })
  }
  render(){
    return (
      <section className='hero'>
        <div className='title'>
          <h1>La mejor forma de Transportar tu Carga!</h1>
          <h2>Con las tarifas mas bajas del mercado!</h2>
        </div>
        {
          this.props.count>0 &&
        <figure className='arrow-1' onClick={this.previousPage}>
          <a><img src="https://img.icons8.com/color/48/000000/back.png"/></a> 
        </figure>
        }
        {
          this.props.count===0 &&
        <div className='historia'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        }
        {
          this.props.count===1 &&
        <div>
          <p>Vision</p>
        </div>
        }

        {
          this.props.count===2 &&
        <div>
          <p>Valores Corporativos</p>
        </div>
        }
        {
          this.props.count<3 &&
        <figure className='arrow-2' onClick={this.nextPage}>
          <a><img src="https://img.icons8.com/color/48/000000/forward.png"/></a>
        </figure>
        }
      </section>
  );
  }
}

function mapStateToProps(state,props){
  return{
    count:state.get('history').get('count')
  }
}
export default connect(mapStateToProps)(Hero);
