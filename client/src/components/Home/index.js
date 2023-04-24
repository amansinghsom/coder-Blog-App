import { useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { GET_Qoutes } from '../../graphql_requests/query';

export default function Home() {
    const { loading, error, data } = useQuery(GET_Qoutes);
    useEffect(() => {
        console.log(data);
    }, []);
    console.log(data);
    return (
        <>
            <h1 className='text-center text-white pt-5 text-5xl font-semibold '>User Quotes 😍</h1>
            <section class="text-white body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto lg:w-6/12">
                   
                    {
                        data?.quotes.map((current)=>{
                            return <>
                            <div class="-my-8 divide-y-2 divide-white">
                        <div class="py-8 flex flex-wrap md:flex-nowrap">
                            
                            <div class="md:flex-grow border-l-2 pl-5 border-indigo-500">
                                <h2 class="text-3xl font-medium text-white title-font mb-2">{current.title}</h2>
                                <p class="leading-relaxed">{current.text}</p>
                                <span>Created By: </span>
                                <a class="text-indigo-500 inline-flex items-center mt-4">{current.by.firstname}
                                  
                                </a>
                            </div>

                            

                        </div>
                        </div> 
                            
                            </>
                        })
                    }
                </div>
            </section>
        </>
    )
}
