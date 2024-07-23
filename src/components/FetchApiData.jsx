import React, { useEffect, useState } from 'react';
import useFetch from '../customHook/useFetch';

function FetchApiData() {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    console.log(data?.length);

  


    return (
        <div>
            {
                data && (
                    data.map((list, i) => (
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