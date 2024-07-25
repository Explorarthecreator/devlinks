import Image from "next/image"
import logo from '../../public/Vector.svg'
import Signup_form from "./Signup_form"
import Link from "next/link"

export default function Signup() {
  return (
    <div className= 'min-h-screen w-full p-8  md:flex md:items-center md:justify-center '>
        <div className='md:w-[476px]'>
            <div className=' flex gap-2 items-center md:justify-center mb-10'>
                <Image src={logo} alt='Devlinks'/>

                <h1 className=' font-extrabold text-4xl text-[#333333]'>
                    devlinks
                </h1>
            </div>
            

            <div className='md:bg-[#fff] md:p-6 rounded-xl'>
                <div className=' flex gap-2 flex-col'>
                    <h1 className=' text-2xl font-bold'>
                        Create Account
                    </h1>
                    <p className='font-normal text-base text-[#737373]'>
                        Let us get you started sharing your link.
                    </p>
                </div>

                <div className='mt-7'>
                    <Signup_form/>

                    <div className='p-2  text-center'>
                        <p className='text-[#737373] text-base font-normal'>
                            Already have an account?
                        </p>
                        <Link href={'/login'} className='text-[#633CFF] text-base'>
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
