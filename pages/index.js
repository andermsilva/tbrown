import React from 'react';
import useSWR from 'swr';
const fetcher=(...args)=> fetch(...args).then(resp => resp.json());

const Index =()=>{
    const{ data, error} =useSWR('/api/get',fetcher)

    return(
        <div >

            {!data && <pre>
                Carregando...
                </pre>
            }
            {!error && data && data.config && <pre>!!
               {data.message}!!
                </pre>
            }
            <div  className='cor-texto py-4'> 
                <div className=' fotoV block1 '>
                     <img  src='/sofa.jpg'/>
                </div>  
                <div className='p-2 block1 '>
                     <p >
                        Limpeza e higiênização de estofados residenciais e
                        colchões
                    </p>
                </div>
            
                <div className='fotoH block1 '>
                     <img  src='brown1.jpg'/>
                </div>
                <div className='p-2 block1'>
                    <p> 
                        Serviço realizado com produdos e equipamentos de
                        qualidade comprovada.
                    </p>

                </div>

         </div>

            <div className='  bt-contato'>
             <div>
                 <a className='align-contato'  href='https://api.whatsapp.com/send?phone=5518997240015 ' target='blank'> Contato: (18) 99724-0015 </a> 
             </div> 
              <div>
                  <img className='whats_logo' src='/whatsapp-logo.png'/>
              </div>
            </div>
        </div>

    );
}

export default Index;