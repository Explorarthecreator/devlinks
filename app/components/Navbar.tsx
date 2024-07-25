'use client'
import Image from 'next/image'
import logo from '../../public/Vector.svg'
import link from '../../public/link.svg'
import profile from '../../public/profile.svg'
import preview from '../../public/preview.svg'
import purpleLink from '../../public/purpleLink.svg'
import purpleProfile from '../../public/purplecircle.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'




export default function Navbar() {
    const pathname = usePathname()
  return (
    <nav className="w-full md:p-6">
        <div className='py-4 px-4 md:px-6 rounded-2xl md:rounded-xl bg-[#FFFFFF] flex justify-between items-center'>
            <div className='flex gap-3 items-center'>
                <Image src={logo} alt=''/>
                <p className='hidden md:block'>
                    Devlink
                </p>
            </div>
            <div className='flex gap-3'>
                <Link href={'/'} className={`btn bg-transparent shadow-none border-none ${pathname !== '/' && 'text-[#737373]'} ${pathname==='/' && 'text-[#633CFF] bg-[#EFEBFF]'}`}>
                    <Image src={pathname === '/'? purpleLink : link} alt=''/>
                    <p className='hidden md:block'>
                        Links
                    </p>
                </Link>
                <Link href={'/profile'} className={`btn bg-transparent shadow-none border-none ${pathname !== '/profile' && 'text-[#737373]'} ${pathname==='/profile' && 'text-[#633CFF] bg-[#EFEBFF]'}`}>
                    <Image src={pathname === '/profile'? purpleProfile : profile} alt=''/>
                    <p className='hidden md:block'>
                        Profile Details
                    </p>
                </Link>
            </div>
            <Link href={'#'} className='btn bg-transparent flex gap-3 border border-[#633CFF] text-[#633CFF]'>
                <Image src={preview} alt='' className='md:hidden'/>
                <p className='hidden md:block'>
                    Preview
                </p>
            </Link>
        </div>
    </nav>
  )
}