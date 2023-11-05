"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const router = new useRouter()



  return (
    
    <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center" onClick={(e)=>{
                    router.push("/home")
                }}>
                    <img src="https://user-images.githubusercontent.com/39475600/132354488-357eeaae-c738-4cd5-80b8-8f47b0660ec6.png" className="h-8 mr-3 rounded-full" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">YT-FY</span>

                    
                </div>
                <div className="flex md:order-2">
                    <button type="button" onClick={(e)=>{
                        router.push("/home")
                    }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><FontAwesomeIcon icon={faHome} size="lg" /></button>
                   
                </div>
            </div>
        </nav>
        </div>
  )
}

export default Navbar