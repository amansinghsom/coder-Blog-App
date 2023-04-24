import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../../Context'

export default function Header() {
    const {token,RemoveToken}=useContext(MyContext);
    console.log(token)
    const tokenRemove  = ()=>{
        localStorage.removeItem("token");
        RemoveToken()

    }
    return (
        <>
            <header className="text-white-600 body-font bg-[#0F172A] border-b-[1px]" >
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-white-900 mb-4 md:mb-0">

                    <Link to="/">   <span className="ml-3 text-2xl text-white cursor-pointer">Coder's Blog</span></Link>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <Link to="/"><a className="text-white text-sm pl-5 hover:underline cursor-pointer">Home</a></Link>
                        <Link to="/quotescreate"><a className="text-white text-sm pl-5 hover:underline cursor-pointer ">Quotes Create</a></Link>
                        <a className="text-white text-sm pl-5 hover:underline cursor-pointer">Contact</a>
                        <a className="text-white text-sm pl-5 hover:underline cursor-pointer">About</a>

                    </nav>
                    {
                        localStorage.getItem('token')!=undefined?<>
                              <Link to="/profile">   <span className="ml-3 text-l text-white cursor-pointer mr-5">Profile</span></Link>

                              <img src='https://c4.wallpaperflare.com/wallpaper/149/596/863/mr-robot-elliot-mr-robot-tv-fsociety-wallpaper-preview.jpg' className='w-10 h-10 object-cover border-2 rounded-full '/>
                              <button className="inline-flex items-center ml-5 mr-5 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={tokenRemove}>Logout
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                        </>:

                        <>
                        <button className="inline-flex items-center mr-5 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><Link to="/login">Login</Link>
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><Link to="/signup">SignUp</Link>
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                        
                        
                        </>
                    }
                   
                    
                </div>
            </header>

        </>
    )
}