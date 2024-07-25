'use client'

import Image from 'next/image'
import link from '../../public/link.svg'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { popLink, reset, updatePlatform, updateUrl } from '../globalRedux/features/link/linkSlice';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';

interface Links {
    id:''
    platform: string;
    url: string;
    userRef:string
    
}
interface Properties {
    num: number;
    link:Links
}



export default function Linkitem({num,link}:Properties) {
    const [url,setUrl] = useState(link.url)
    const dispatch = useDispatch()
    const [platform,setPlatform] = useState(link.platform)
    const [urlError, setUrlError] = useState(false)

    
    const change = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const index= num-1
        console.log(e.target.value);
        setUrl(e.target.value)
        const ger = e.target.value
        dispatch(updateUrl({index,ger}))
    }
    const removeFromActive =(plat:string)=>{
        const index = num-1
        const elem = document.activeElement as HTMLElement;
        elem.blur()
        setPlatform(plat)
        dispatch(updatePlatform({index,plat}))
    }

    const removeLink=async()=>{
        const index = num-1
        if(link.id){
            await deleteDoc(doc(db,'links',link.id))
            // console.log("Has id");
            dispatch(popLink(index))

            dispatch(reset())
        }else{
            dispatch(popLink(index))
            dispatch(reset())
        }
    }
    
    
  return (
    <div className="w-full bg-[#FAFAFA] rounded-xl p-5 flex flex-col gap-6">
        <div className='flex justify-between'>
            <div>
                <p>
                    Link {num}
                </p>
            </div>
            <p onClick={()=> removeLink()}>
                Remove
            </p>
        </div>


        <div className="flex gap-2 flex-col">
            <h3 className="text-xs text-[#333333]">
                Platform 
            </h3>

            <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn justify-start bg-[#ffffff] m-1 w-full">{platform}</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 w-full rounded-box z-[1] p-2 shadow text-[#333333]">
                    <li onClick={()=>removeFromActive('Github')}>
                        <a>
                            <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.98187 1.28805C7.67799 0.985074 6.32201 0.985074 5.01813 1.28805C4.26507 0.826185 3.69013 0.613919 3.272 0.524319C3.09354 0.484042 2.91093 0.465065 2.728 0.467785C2.64476 0.470041 2.56192 0.48004 2.48053 0.497652L2.46987 0.499785L2.4656 0.501919H2.4624L2.60853 1.01499L2.4624 0.502985C2.38746 0.524162 2.31807 0.561492 2.2591 0.612353C2.20013 0.663213 2.15302 0.72637 2.12107 0.797385C1.80637 1.50214 1.74642 2.29436 1.95147 3.03845C1.42041 3.68203 1.13101 4.49099 1.13333 5.32539C1.13333 6.98192 1.62187 8.09552 2.45493 8.81125C3.0384 9.31259 3.74667 9.57925 4.45707 9.73179C4.34527 10.0601 4.30313 10.4081 4.33333 10.7537V11.3915C3.8992 11.4822 3.5984 11.4534 3.384 11.383C3.11627 11.2945 2.9104 11.1163 2.71307 10.8603C2.60991 10.7223 2.51379 10.5792 2.42507 10.4315L2.36427 10.3323C2.28749 10.2047 2.20783 10.0788 2.12533 9.95472C1.92267 9.65499 1.62187 9.27952 1.13547 9.15152L0.6192 9.01605L0.348267 10.0486L0.864533 10.1841C0.949867 10.2054 1.0608 10.2854 1.2432 10.5531C1.31341 10.6588 1.38098 10.7662 1.44587 10.8753L1.5184 10.9926C1.61867 11.1547 1.73387 11.3339 1.8672 11.5089C2.13707 11.8609 2.50507 12.2161 3.0512 12.3963C3.42453 12.5201 3.84907 12.5499 4.33333 12.4753V14.4667C4.33333 14.6082 4.38952 14.7438 4.48954 14.8438C4.58956 14.9439 4.72522 15.0001 4.86667 15.0001H9.13333C9.27478 15.0001 9.41044 14.9439 9.51046 14.8438C9.61048 14.7438 9.66667 14.6082 9.66667 14.4667V10.6662C9.66667 10.3302 9.65173 10.0219 9.5568 9.73499C10.264 9.58565 10.9669 9.31899 11.5472 8.81765C12.3792 8.09659 12.8667 6.97232 12.8667 5.30619V5.30512C12.864 4.47756 12.5745 3.67652 12.0475 3.03845C12.2523 2.2947 12.1923 1.50289 11.8779 0.798452C11.8462 0.727352 11.7993 0.664058 11.7405 0.613014C11.6817 0.561971 11.6124 0.524415 11.5376 0.502985L11.3915 1.01499C11.5376 0.502985 11.5365 0.502985 11.5355 0.502985L11.5333 0.501919L11.5291 0.499785L11.5195 0.497652C11.4931 0.490802 11.4664 0.48546 11.4395 0.481652C11.3836 0.473499 11.3273 0.468868 11.2709 0.467785C11.088 0.465085 10.9054 0.484061 10.7269 0.524319C10.3099 0.613919 9.73493 0.826185 8.98187 1.28805Z" fill="#737373"/>
                            </svg>
                            Github
                        </a>
                    </li>
                    <li onClick={()=>removeFromActive('FaceBook')}>
                        <a>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8.04902C16 3.60302 12.418 -0.000976562 8 -0.000976562C3.58 2.34375e-05 -0.0019989 3.60302 -0.0019989 8.05002C-0.0019989 12.067 2.924 15.397 6.748 16.001V10.376H4.718V8.05002H6.75V6.27502C6.75 4.25802 7.945 3.14402 9.772 3.14402C10.648 3.14402 11.563 3.30102 11.563 3.30102V5.28102H10.554C9.561 5.28102 9.251 5.90202 9.251 6.53902V8.04902H11.469L11.115 10.375H9.25V16C13.074 15.396 16 12.066 16 8.04902Z" fill="#737373"/>
                            </svg>
                            Facebook
                        </a>
                    </li>
                    <li onClick={()=>removeFromActive('Linkedin')}>
                        <a>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.6667 0C11.0203 0 11.3594 0.140476 11.6095 0.390524C11.8595 0.640573 12 0.979711 12 1.33333V10.6667C12 11.0203 11.8595 11.3594 11.6095 11.6095C11.3594 11.8595 11.0203 12 10.6667 12H1.33333C0.979711 12 0.640573 11.8595 0.390524 11.6095C0.140476 11.3594 0 11.0203 0 10.6667V1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0H10.6667ZM10.3333 10.3333V6.8C10.3333 6.2236 10.1044 5.6708 9.69678 5.26322C9.2892 4.85564 8.7364 4.62667 8.16 4.62667C7.59333 4.62667 6.93333 4.97333 6.61333 5.49333V4.75333H4.75333V10.3333H6.61333V7.04667C6.61333 6.53333 7.02667 6.11333 7.54 6.11333C7.78754 6.11333 8.02493 6.21167 8.19997 6.3867C8.375 6.56173 8.47333 6.79913 8.47333 7.04667V10.3333H10.3333ZM2.58667 3.70667C2.88371 3.70667 3.16859 3.58867 3.37863 3.37863C3.58867 3.16859 3.70667 2.88371 3.70667 2.58667C3.70667 1.96667 3.20667 1.46 2.58667 1.46C2.28786 1.46 2.00128 1.5787 1.78999 1.78999C1.5787 2.00128 1.46 2.28786 1.46 2.58667C1.46 3.20667 1.96667 3.70667 2.58667 3.70667ZM3.51333 10.3333V4.75333H1.66667V10.3333H3.51333Z" fill="#737373"/>
                            </svg>
                            Linkedin
                        </a>
                    </li>
                    <li onClick={()=>removeFromActive('Youtube')}>
                        <a>
                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.16267 0.666748C7.51867 0.668748 8.40933 0.677415 9.356 0.715415L9.692 0.730081C10.6447 0.774748 11.5967 0.852081 12.0693 0.983415C12.6993 1.16075 13.194 1.67675 13.3613 2.33141C13.628 3.37141 13.6613 5.39942 13.6653 5.89075L13.666 5.99208V6.10808C13.6613 6.59941 13.628 8.62808 13.3613 9.66741C13.192 10.3241 12.6967 10.8407 12.0693 11.0154C11.5967 11.1467 10.6447 11.2241 9.692 11.2687L9.356 11.2841C8.40933 11.3214 7.51867 11.3307 7.16267 11.3321L7.006 11.3327H6.836C6.08267 11.3281 2.932 11.2941 1.92933 11.0154C1.3 10.8381 0.804665 10.3221 0.637332 9.66741C0.370665 8.62741 0.337332 6.59941 0.333332 6.10808V5.89075C0.337332 5.39942 0.370665 3.37075 0.637332 2.33141C0.806665 1.67475 1.302 1.15808 1.93 0.984081C2.932 0.704748 6.08333 0.670748 6.83667 0.666748H7.16267ZM5.666 3.66675V8.33342L9.666 6.00008L5.666 3.66675Z" fill="#737373"/>
                            </svg>
                            Youtube
                        </a>
                    </li>
                </ul>
            </div>

            {/*  */}
        </div>


        <div className="flex gap-2 flex-col">
            <h3 className="text-xs text-[#333333]">
                Link 
            </h3>

            <div className="w-full input input-bordered flex items-center gap-2">
                <svg className="h-4 w-4" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.154 14.6509C11.2414 14.738 11.3107 14.8415 11.3581 14.9554C11.4054 15.0694 11.4297 15.1916 11.4297 15.3149C11.4297 15.4383 11.4054 15.5605 11.3581 15.6745C11.3107 15.7884 11.2414 15.8919 11.154 15.979L10.6899 16.4431C9.81057 17.3224 8.61791 17.8164 7.3743 17.8164C6.1307 17.8164 4.93804 17.3224 4.05868 16.4431C3.17932 15.5637 2.6853 14.371 2.6853 13.1274C2.6853 11.8838 3.17932 10.6912 4.05868 9.81181L5.94305 7.92822C6.78796 7.08122 7.92476 6.58933 9.12057 6.55331C10.3164 6.51729 11.4807 6.93986 12.3751 7.73447C12.4674 7.81655 12.5427 7.91601 12.5966 8.02717C12.6505 8.13833 12.682 8.25902 12.6892 8.38235C12.6965 8.50568 12.6794 8.62923 12.6389 8.74595C12.5984 8.86266 12.5353 8.97026 12.4532 9.06259C12.3711 9.15493 12.2717 9.2302 12.1605 9.28409C12.0493 9.33799 11.9287 9.36947 11.8053 9.37672C11.682 9.38398 11.5585 9.36687 11.4417 9.32638C11.325 9.28588 11.2174 9.2228 11.1251 9.14072C10.5888 8.66441 9.89074 8.41102 9.17377 8.43237C8.4568 8.45371 7.77508 8.74819 7.26805 9.25556L5.38524 11.1368C4.85771 11.6643 4.56135 12.3798 4.56135 13.1259C4.56135 13.8719 4.85771 14.5874 5.38524 15.1149C5.91277 15.6425 6.62826 15.9388 7.3743 15.9388C8.12035 15.9388 8.83583 15.6425 9.36337 15.1149L9.82743 14.6509C9.9145 14.5637 10.0179 14.4946 10.1317 14.4474C10.2455 14.4002 10.3675 14.3759 10.4907 14.3759C10.6139 14.3759 10.7359 14.4002 10.8497 14.4474C10.9635 14.4946 11.0669 14.5637 11.154 14.6509ZM16.9415 3.55713C16.0614 2.67912 14.869 2.18604 13.6259 2.18604C12.3827 2.18604 11.1903 2.67912 10.3102 3.55713L9.84618 4.02119C9.67006 4.19731 9.57112 4.43618 9.57112 4.68525C9.57112 4.93432 9.67006 5.17319 9.84618 5.34931C10.0223 5.52543 10.2612 5.62438 10.5102 5.62438C10.7593 5.62438 10.9982 5.52543 11.1743 5.34931L11.6384 4.88525C12.1659 4.35772 12.8814 4.06135 13.6274 4.06135C14.3735 4.06135 15.089 4.35772 15.6165 4.88525C16.144 5.41278 16.4404 6.12827 16.4404 6.87431C16.4404 7.62036 16.144 8.33584 15.6165 8.86338L13.7329 10.7478C13.2254 11.2549 12.5433 11.549 11.8262 11.5697C11.109 11.5905 10.4111 11.3364 9.87509 10.8595C9.78275 10.7774 9.67515 10.7143 9.55844 10.6738C9.44172 10.6333 9.31817 10.6162 9.19484 10.6235C9.07152 10.6307 8.95082 10.6622 8.83966 10.7161C8.7285 10.77 8.62904 10.8453 8.54696 10.9376C8.46488 11.0299 8.4018 11.1375 8.36131 11.2542C8.32081 11.371 8.30371 11.4945 8.31096 11.6178C8.31821 11.7412 8.34969 11.8619 8.40359 11.973C8.45748 12.0842 8.53275 12.1836 8.62509 12.2657C9.51882 13.0601 10.6824 13.483 11.8776 13.4477C13.0729 13.4124 14.2095 12.9217 15.0548 12.0759L16.9391 10.1923C17.8182 9.31242 18.3121 8.1197 18.3126 6.87597C18.313 5.63224 17.8199 4.43917 16.9415 3.55869V3.55713Z" fill="#737373"/>
                </svg>

                {/* Do not forget to change the width of the input to allow you          */}
                <input type="url" className="grow w-1/2" placeholder="https://example.com" value={url}  onChange={change}/>
            </div>
        </div>

        
    </div>
  )
}
