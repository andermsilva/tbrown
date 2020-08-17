import React from 'react';
import useSWR from 'swr';
const fetcher=(...args)=> fetch(...args).then(resp => resp.json())
const Divis =()=>{
    const{ data, error} =useSWR('/api/get',fetcher)

    return(
        <div>

            {!data && <pre>
                Carregando...
                </pre>
            }
            {!error && data && data.config && <pre>!!
               {data.message}!!
                </pre>
            }
            <div  className='texto py-4'> 
                <div className=' fotoV block1 '>
                     <img  src='/sofa.jpg'/>
                </div>  
                <div className='p-2 block1 '>
                     <p >
                        Limpeza e higiênização de estofados rezidenciais e <br />
                        colchões
                    </p>
                </div>
            
                <div className='fotoH block1 '>
                     <img  src='brown1.jpg'/>
                </div>
                <div className=' texto p-2 block1'>
                    <p> 
                        Serviço realizxado com produdos e equipamentos de<br />
                        qualidade comprovada.
                    </p>

                </div>

         </div>

         <div className=' py-2 flex alLeft text-2x1  text-green-800'>
           
         <a className='hover:underline' href='https://api.whatsapp.com/send?phone=5518997240015 ' target='blank'> Contato: (18) 99724-0015  </a>
             <a href='https://api.whatsapp.com/send?phone=555518997240015&text=TBROWNLIMPE' target='blank'><img className='whats_logo flex-2 ' src='/whatsApp.png'/> </a> 
          
         </div>
        </div>

    );
}


export default Divis;