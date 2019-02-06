import React from 'react';
import './home-layout.css';

function HomeLayout(props){
    return(
        <section className='HomeLayout' onClick={props.onClick}>
            {props.children}
        </section>
    )
}

export default HomeLayout;