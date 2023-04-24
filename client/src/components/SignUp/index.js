import { useMutation } from '@apollo/client'
import react, { useContext, useEffect, useState } from 'react'
import { SignUpForm } from '../../graphql_requests/mutation'
import { Toaster, toast } from 'react-hot-toast'
import { useNavigate } from 'react-router'
import { MyContext } from '../../Context'

export default function SignUp() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })
    const [SignUPForm,{data,loading,error}]=useMutation(SignUpForm)
    const navigate=useNavigate()
    const {token} = useContext(MyContext);
    useEffect(()=>{
        if(token){
            navigate('/')
        }
        if(data){
            console.log(data);
        }
        if(error){
            console.log(error);
        }
        let id;
        id = setTimeout(() => {
            navigate('/signup')
        }, 2000)
        return ()=>{
            clearTimeout(id)
        }
    },[data,error])

    const handleSubmit=()=>{
        console.log(formData)
        if (formData.email === "" || formData.password === "" || formData.firstname==="" || formData.lastname==="") return
        SignUPForm({
            variables:{
                userNew:formData
            }
        }).then(e=>{
            console.log("okk..")
            console.log(e);
            toast.success("SignUp is completed 👍")
            navigate('/login')
        })
    }

    return (
        <section class="text-gray-500 body-font">
            <Toaster/>
            <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div class="lg:w-3/5 md:w-/2 md:pr-16 lg:pr-0 pr-0">
                    <h1 class="title-font font-medium text-3xl text-white">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
                </div>
                <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 class="text-gray-900 text-lg font-medium title-font mb-5">SignUp 🚀</h2>
                    <div class="relative mb-4">
                        <label for="full-name" class="leading-7 text-sm text-gray-600" >FirstName</label>
                        <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='enter firstName' value={formData.firstname} onChange={(e) => {
                            setFormData({
                                ...formData,
                                firstname: e.target.value
                            })
                        }} />
                    </div>
                    <div class="relative mb-4">
                        <label for="full-name" class="leading-7 text-sm text-gray-600"  >LastName</label>
                        <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='enter lastName' value={formData.lastname} onChange={(e) => {
                            setFormData({
                                ...formData,
                                lastname: e.target.value
                            })
                        }} />
                    </div>
                    <div class="relative mb-4">
                        <label for="full-name" class="leading-7 text-sm text-gray-600">Email</label>
                        <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='enter Email' value={formData.email} onChange={(e) => {
                            setFormData({
                                ...formData,
                                email: e.target.value
                            })
                        }} />
                    </div>
                    <div class="relative mb-4">
                        <label for="email" class="leading-7 text-sm text-gray-600">Password</label>
                        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='enter Password' value={formData.password} onChange={(e) => {
                            setFormData({
                                ...formData,
                                password: e.target.value
                            })
                        }} />
                    </div>

                    <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSubmit}>Login</button>
                    {/* <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p> */}
                </div>
            </div>
        </section>
    )
}

