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
        </div>

    );
}


export default Divis;