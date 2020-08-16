import React from 'react';
import useSWR from 'swr';
const fetcher=(...args)=> fetch(...args).then(resp => resp.json())
const Divis =()=>{
    const{ data, error} =useSWR('/api/get',fetcher)

    return(
        <pre>!!
            {JSON.stringify(data)}
        </pre>

    );
}


export default Divis;