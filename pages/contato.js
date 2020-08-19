import React from 'react';
import useSWR from 'swr';
const fetcher=(...args)=> fetch(...args).then(resp => resp.json());

const Contato =()=>{
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

export default Contato;