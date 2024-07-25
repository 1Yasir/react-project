import React, { useEffect, useState } from 'react';
import useFetch from '../customHook/useFetch';

function FetchApiData() {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <div style={{padding :"100px 0"}} className='text-center text-white'>

            <h1>Fetch Api Data && use Custom Hook</h1>
            {
                true && (
                    data?.map((list, i) => (
                        <p key={list.id}>
                            {list.title}
                        </p>
                    ))
                )
            }
        </div>
    )
}

export default FetchApiData