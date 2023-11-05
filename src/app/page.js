"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = new useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
<section className="mb-40">
  

  
  <div className="bg-neutral-50 px-6 py-12 text-center dark:bg-neutral-900 md:px-12 lg:text-left">
    <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="mt-12 lg:mt-0">
          <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
            Enjoy Music <br /><span className="text-primary">Without ads..</span>
          </h1>
          <div className="mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
            data-te-ripple-init data-te-ripple-color="light" onClick={(e)=>{
              router.push("/home")
            }} role="button">Get started</div>
          
        </div>
        <div className="mb-12 lg:mb-0">
          <img src="https://static.vecteezy.com/system/resources/previews/023/234/929/non_2x/man-listening-to-music-silhouette-free-png.png"
            className="w-full rounded-lg shadow-lg dark:shadow-black/20 " alt="" />
        </div>
      </div>
    </div>
  </div>
  
</section>

    </main>
  )
}
