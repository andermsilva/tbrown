import React from 'react';


const Index =()=>{

    return(
      <div className='font-geral' >
         <div  className='flex py-4'> 
            <div className=' fotoV '>
            
             <img  src='/sofa.jpg'/>
               
            </div>
            <p className='flex-1 p-2  '>
                 Limpeza e higiênização de estofados rezidenciais e <br />
                 colchões
            </p>
            
            <div className='fotoH '>
             <img  src='brown1.jpg'/>

               
            </div>
            <p className='flex-1 p-2'> 
                Serviço realizxado com produdos e equipamentos de<br />
                qualidade comprovada.
               </p>

         </div>
         <div className=' py-2 flex alLeft text-2x1  text-green-800'>
           
         <a className='hover:underline' href='https://api.whatsapp.com/send?phone=5518997240015 ' target='blank'> Contato: (18) 99724-0015  </a>
             <a href='https://api.whatsapp.com/send?phone=555518997240015&text=TBROWNLIMPE' target='blank'><img className='whats_logo flex-2 ' src='/whatsApp.png'/> </a> 
          
         </div>
      </div>
    );
}
export default Index;