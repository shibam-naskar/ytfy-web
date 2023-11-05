import React from 'react'

function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl  md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://github.com/shibam-naskar" target='_blank' className="hover:underline">. Made with ❤️ by SHIBAM.</a>
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li className='mt-4'>
            <a href="https://github.com/shibam-naskar/ytfy-web" target='_blank' className="mr-4  md:mr-6 ">
                <img src='https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png' className='w-11 rounded-full'></img>
            </a>
        </li>
    </ul>
    </div>
</footer>
  )
}

export default Footer