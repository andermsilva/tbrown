import React from 'react';


const Index =()=>{

    return(
      <div className='font-geral' >
         <div  className='flex py-4'> 
            <div className=' fotoV '>
            
             <img  src='https://scontent.fppb2-1.fna.fbcdn.net/v/t1.0-9/117750249_633869967257931_7829578366392211998_n.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=Yvb-6cVuIN4AX_pMxUH&_nc_ht=scontent.fppb2-1.fna&oh=870c168478c2ef065299dbd016ea067d&oe=5F59D161'/>
               
            </div>
            <p className='flex-1 p-2  '>
                 Limpeza e higiênização de estofados rezidenciais e <br />
                 colchões
            </p>
            
            <div className='fotoH '>
             <img  src='https://scontent.fppb2-1.fna.fbcdn.net/v/t1.0-9/117270704_633877120590549_4284452395455256522_n.jpg?_nc_cat=111&_nc_sid=8024bb&_nc_ohc=XeVZJ3yPlpwAX_DC0yo&_nc_ht=scontent.fppb2-1.fna&oh=0548b43335363b20d307f95c3c4b7272&oe=5F591F4B'/>

               
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