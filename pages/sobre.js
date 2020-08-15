import React from 'react';
import PageTitle from '../components/Header/PageTitle';

const Sobre = ()=>{

    return(

        <div>
            <PageTitle title='Sobre'/>
            <div className='playvideo'>

           <video  src='/brownLimpe.mp4'
                autoPlay='autoplay' loop='loop' muted="muted"
                poster='/Lavagem-de-estofados.png'
            >
           </video>
            </div>

        </div>
    );
}
export default Sobre;