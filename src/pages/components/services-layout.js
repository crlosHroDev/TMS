import React from 'react';
import '../components/services-layout.css';
import tracking from '../../images/shipment-tracking-vehicle.jpg';

function ServiceLayout(props){
    return(
        <section className='serviceHero'>
            {props.children}
            <div className='col-1'>
                <h1>Rastreo</h1>
                <p>Gestión en tiempo real, tenga el control de la ubicación de su mercancía,
                    califique el desempeño de sus vehículos y conductores de acuerdo a políticas
                </p>
            </div>
            <figure className='tracking'>
                <img src={tracking}/>
            </figure>
            <div>
                hola
            </div>
        </section>
    )
}

export default ServiceLayout;