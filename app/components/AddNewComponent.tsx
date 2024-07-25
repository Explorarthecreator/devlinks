'use client'
import type { RootState } from "../globalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../globalRedux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { increaseLink } from "../globalRedux/features/link/linkSlice";


export default function AddNewComponent() {

    const  {value,logged,id} =  useSelector((state: RootState)=> state.auth)
    const dispatch = useDispatch()
    const navigate = useRouter()

    interface Links {
        platform: string
        url:string,
        userRef:string
    }
    const link:Links ={
        platform:'Github',
        url:'',
        userRef:id
    }
    const addNewComponent = ():void=>{
        if(logged){
            dispatch(increaseLink(link))
        }else{
            navigate.push('/login')
        }
        
    }
    
  return (
    <div>
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">
                Add new components
            </h1>
            <p className="text-base text-[#737373]">
                Add/edit/remove links below and then share all your profiles with the world!
            </p>
        </div>
        <button className="btn w-full border border-[#633CFF] bg-transparent text-[#633CFF] mt-7" onClick={()=>addNewComponent()}>
            + Add new link
        </button>
    </div>
  )
}
