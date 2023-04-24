import { useMutation } from '@apollo/client'
import React, { useContext, useEffect, useState } from 'react'
import { createQuotes } from '../../graphql_requests/mutation'
import Icon from '../Icon/Icon';
import { GET_Qoutes } from '../../graphql_requests/query';
import { Toaster, toast } from 'react-hot-toast';
import { MyContext } from '../../Context';
import { useNavigate } from 'react-router';

export default function Quotes() {
    const [formData, setFormData] = useState({
        title:"",
        text: ""
    })
    const { token } = useContext(MyContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!token) {
            navigate('/')
        }

    }, [token]);

    const [createQuotesFuc, { loading, data, error }] = useMutation(createQuotes, {
        refetchQueries: [
            { query: GET_Qoutes },
            'getQuetes'
        ]
    });

    useEffect(() => {
        if (data) {
            console.log(data);
        }
        if (error) {
            toast.error(error.message)
        }
    }, [data, error])
    const handleSubmit = () => {
        if (formData.text == "" || formData.title == "") return;
        console.log(formData);
        createQuotesFuc({
            variables: {
                data: {
                    title: formData.title,
                    text: formData.text
                }
            }
        }).then(e => {
            toast.success(e.data.Quote)

        })
        setFormData({
            title: "",
            text: ""
        })

    }
    return (
        <>
            <section class="text-white body-font relative">
                <Toaster />
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Create Quotes 🖐️</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
                    </div>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-2">
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="name" class="leading-7 text-sm text-white">Title</label>
                                    <input type="text" id="name" name="name" class="w-full bg-white bg-opacity-50 rounded border border-white focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={formData.title} onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            title: e.target.value
                                        })
                                    }} />
                                </div>
                            </div>

                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="message" class="leading-7 text-sm text-white">Quote</label>
                                    <textarea id="message" name="message" class="w-full bg-white bg-opacity-50 rounded border border-white focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-900  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={formData.text} onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            text: e.target.value
                                        })
                                    }}></textarea>
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSubmit}>Submit</button>
                            </div>
                            <Icon />
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}
