import { useMutation, useQuery } from '@apollo/client'
import React, { useContext, useEffect } from 'react'
import { Profile_Data } from '../../graphql_requests/query'
import { MyContext } from '../../Context'
import { useNavigate } from 'react-router'

export default function Profile() {
    const { loading, data, error } = useQuery(Profile_Data)
    const { token } = useContext(MyContext);
    const navigate = useNavigate();
    if (!token) {
        navigate('/login')
    }

    return (
        <section class="text-gray-600 body-font">
            <h1 className='text-white text-center text-4xl font-bold pt-10'>User Profile 😮</h1>
            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-xl" alt="hero" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/15c45dda-9a57-4ebf-b320-00fa22997424/de5ywji-2a785611-0ae5-42b7-bc8d-8473e448cb3a.jpg/v1/fill/w_1280,h_720,q_75,strp/mr_robot_wallpaper_by_mithzrollins_de5ywji-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMTVjNDVkZGEtOWE1Ny00ZWJmLWIzMjAtMDBmYTIyOTk3NDI0XC9kZTV5d2ppLTJhNzg1NjExLTBhZTUtNDJiNy1iYzhkLTg0NzNlNDQ4Y2IzYS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.OCBOpV0JPu9gyqusxedleBknItXWSH1nHeMcR0XJxoI" />
                <div class="text-center lg:w-2/3 w-full">
                    <div class="flex justify-center flex-col">
                        {
                            data && <>
                                <h3 className='text-white'>{data.userData.firstname} {data.userData.lastname}</h3>
                                <h3 className='text-white'>{data.userData.email}</h3>
                            </>
                        }


                    </div>
                </div>
            </div>
        </section>
    )
}


