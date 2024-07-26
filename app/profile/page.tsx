import ProfileForm from "./ProfileForm";


export default function Profile() {
  return (
    <div className=" p-4 lg:p-7 ">
      <div className="gap-4 flex flex-col bg-[#ffffff] p-5 rounded-xl min-h-screen ">
        <div className="flex flex-col gap-3">
          <h1 className=" text-2xl text-[#333333] font-bold">
            Profile Details
          </h1>

          <p className="text-[#737373] text-base font-normal">
            Add your details to create a personal touch to your profile.
          </p>
        </div>

        <div>
          <ProfileForm/>
        </div>
      </div>
    </div>
    
  )
}
