'use client'
import AddNewComponent from "./components/AddNewComponent";
import EmptyState from '../public/EmptyState.png'
import Image from "next/image";
import Linkitem from "./components/Linkitem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./globalRedux/store";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { app, db } from "./firebase.config";
import { setLoggedIn } from "./globalRedux/features/auth/authSlice";
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { setLinks, setWorkingLinks, setLoading } from "./globalRedux/features/link/linkSlice";

interface link {
  id:'',
  url:'',
  userRef:''
  platform:''
}

const createLink = async(links:link[],workingLinks:link[])=>{
  console.log("object");
  const missing:link[] = links.filter(item => workingLinks.indexOf(item) < 0)

  console.log(missing);

  const linksWithID = missing.filter(item=> item.id)
  const linksWithoutID = missing.filter(item=> !item.id)

  if(linksWithID.length >=1 && linksWithoutID.length >=1){
    await Promise.all([updateLink(linksWithID),createNewLink(linksWithoutID)])
  }else if(linksWithID.length >=1){
    await updateLink(linksWithID)
  }else if(linksWithoutID.length >=1){
    await createNewLink(linksWithoutID)
  }

  // await updateLink(linksWithID)

  console.log("We are done");
  // try {
  //   links.forEach(async (link)=>{
  //     await addDoc(collection(db,'links'),link)
  //   })
  // } catch (error) {
  //   console.log(error);
  // }
  
}

const createNewLink = async (linksWithoutID:object[])=>{
  linksWithoutID.forEach(async(link)=>{
    await addDoc(collection(db,'links'),link)
  })
}

const updateLink = async(linksWithID:link[])=>{

  console.log("Code please");
  linksWithID.forEach(async(link)=>{
    const linkRef = doc(db,'links',link.id)

    await updateDoc(linkRef,{
      platform: link.platform,
      url:link.url
    })
    console.log("Single link");
  })

  console.log("end of table");
}

const fetchLinks = async(id:string)=>{

  const q = query(collection(db,'links'), where('userRef','==',id))

  const listSnap = await getDocs(q)

  let lists:object[] = []

  listSnap.forEach((list)=>{
    lists.push({
      id:list.id,
      url:list.data().url,
      platform:list.data().platform,
      userRef:list.data().userRef
    })
    console.log(list.data());
  })

  return lists


}
export default function Home() {
  const {links, loading, workingLinks} = useSelector((state: RootState)=>state.link)
  const {id} = useSelector((state:RootState)=>state.auth)

  const dispatch = useDispatch()

  useEffect(()=>{
    const auth = getAuth(app)

    if(id){
      dispatch(setLoggedIn(true))
    }

    if(links.length <=0){
      dispatch(setLoading(true))
      fetchLinks(id).then((li)=>{
        dispatch(setLinks(li))
        dispatch(setWorkingLinks(li))
        dispatch(setLoading(false))
      })
    }
    if(links.length >=1){
      dispatch(setLoading(false))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[links])

  if(loading){
    return <p>
      Loading.........
    </p>
  }
  return (
    <main className="p-4 lg:p-7 gap-4 flex ">
      {/* Container*/}
      <div className="hidden lg:block lg:w-[580px] bg-[#ffffff] rounded-xl min-h-screen"></div>
      <div className="min-h-screen bg-[#ffffff] rounded-xl p-5 lg:w-[800px]">
        {/* <div ></div> */}
        <div className="">
          <AddNewComponent/>

          {
            links.length <=0 &&
            <div className="bg-[#FAFAFA] rounded-xl p-5 md:p-20 flex flex-col gap-6 mt-6">
              <div className=" text-center flex flex-col gap-6 mt-6">
                <Image src={EmptyState} alt="Empty" className="h-20 w-32 m-auto"/>

                <h1 className="text-2xl font-bold text-[#333333]">
                  Let’s get you started
                </h1>

                <p className="text-base font-normal text-[#737373]">
                  Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!
                </p>

                
              </div>
            </div>
          }

          <div className="flex flex-col mt-8 gap-5">
            {
              links?.map((link,index)=>(

                <div className="" key={index}> 
                    <Linkitem num={index+1} link={link}/>
                </div>
              ))
            }
          </div>
          

          <button className={`btn bg-[#633CFF] text-[#ffffff] w-full mt-5 ${links === workingLinks && 'btn-disabled'}`} onClick={()=>createLink(links,workingLinks)}>
            Save
          </button>

          
        </div>

        {/* <div className="mt-4"> 
          <Linkitem/>
        </div> */}

      </div>
      
    </main>
  );
}
