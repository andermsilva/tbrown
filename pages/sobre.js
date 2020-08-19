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
                />
            </div>
            <div>
            Lorem ipsum massa curabitur pretium vestibulum arcu platea dolor, sapien vivamus etiam aliquam litora in blandit massa, dui nulla diam vulputate venenatis odio mollis. sollicitudin tempor euismod nisi ullamcorper
             quisque malesuada primis, magna quis porttitor aenean bibendum quisque nec, mauris aenean
              dapibus venenatis malesuada mollis. gravida tempor etiam libero suspendisse proin commodo curabitur ut mi litora ullamcorper consectetur malesuada mattis, porta lobortis erat ultricies consectetur lacus vulputate metus senectus tincidunt ut quisque interdum. mi ullamcorper sapien convallis odio nam vel nisl habitasse, ut ullamcorper iaculis nisl massa interdum diam, gravida aptent bibendum eleifend vulputate amet metus. 

Commodo lectus consectetur aenean quis vel sodales posuere ante, gravida maecenas taciti aliquam
 dui ipsum quisque, torquent pulvinar quisque sagittis suspendisse habitant feugiat.
  aliquet nostra porta ornare platea porttitor consequat ante felis arcu, diam donec 
  congue interdum consequat mi in. nam etiam ante class fermentum taciti curae aliquam 
  ut maecenas viverra morbi at massa, etiam curabitur senectus leo donec dictum fringilla
   sodales sed ante malesuada. a porttitor eleifend ligula non nunc quam mattis cras, tempor
    gravida cubilia torquent orci inceptos augue a id, dui aenean cursus vitae ante primis 
    pellentesque. Ultricies feugiat aenean malesuada id scelerisque 
ullamcorper nostra et lacus ante, aenean diam leo eget diam viverra 
rutrum arcu blandit, sociosqu quisque habitasse aliquet placerat 
suspendisse suscipit scelerisque fringilla.
            </div>

        </div>
    );
}
export default Sobre;