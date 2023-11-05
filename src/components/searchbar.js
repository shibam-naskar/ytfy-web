"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

function SearchBar() {
    const[search,Setsearch] = useState("")
    const router = useRouter()

    function handleChange(event) {
        console.log(event.target.value);
      }
    
      const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log(search);
            router.push(`/home/${search}`)
        }
      };
    return (
        <div className="flex items-center">
            <div className="flex space-x-1 ml-auto mr-auto mt-3">
                <input
                    type="text"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                    onChange={(e)=>{
                        Setsearch(e.target.value)
                    }}
                    onKeyDown={handleKeyPress}
                />
                <button type='submit' className="px-4 text-white bg-blue-900 rounded-full "
                    onClick={(e)=>{
                        e.preventDefault()
                        console.log(search);
                        router.push(`/home/${search}`)
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default SearchBar