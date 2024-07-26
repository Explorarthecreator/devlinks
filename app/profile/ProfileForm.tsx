'use client'

export default function ProfileForm() {
  return (
    <form className="">
        
        <div className="flex flex-col gap-6">
            <div className="bg-[#FAFAFA] rounded-xl p-5 flex flex-col gap-2">
                <p className="text-base text-[#737373]">
                    Profile picture
                </p>

                <div id="image-preview" className="max-w-sm p-4 mb-4 bg-[#EFEBFF] rounded-lg text-center cursor-pointer w-[193px] h-[193px] flex items-center justify-center">
                    <input id="upload" type="file" className="hidden" accept="image/*" />
                    <label htmlFor="upload" className="cursor-pointer flex flex-col gap-3 items-center w-full h-full justify-center">
                        <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.75 0.25H3.25C2.58696 0.25 1.95107 0.513392 1.48223 0.982233C1.01339 1.45107 0.75 2.08696 0.75 2.75V25.25C0.75 25.913 1.01339 26.5489 1.48223 27.0178C1.95107 27.4866 2.58696 27.75 3.25 27.75H30.75C31.413 27.75 32.0489 27.4866 32.5178 27.0178C32.9866 26.5489 33.25 25.913 33.25 25.25V2.75C33.25 2.08696 32.9866 1.45107 32.5178 0.982233C32.0489 0.513392 31.413 0.25 30.75 0.25ZM30.75 2.75V18.8047L26.6766 14.7328C26.4444 14.5006 26.1688 14.3164 25.8654 14.1907C25.5621 14.0651 25.2369 14.0004 24.9086 14.0004C24.5802 14.0004 24.2551 14.0651 23.9518 14.1907C23.6484 14.3164 23.3728 14.5006 23.1406 14.7328L20.0156 17.8578L13.1406 10.9828C12.6718 10.5143 12.0362 10.2512 11.3734 10.2512C10.7107 10.2512 10.075 10.5143 9.60625 10.9828L3.25 17.3391V2.75H30.75ZM3.25 20.875L11.375 12.75L23.875 25.25H3.25V20.875ZM30.75 25.25H27.4109L21.7859 19.625L24.9109 16.5L30.75 22.3406V25.25ZM19.5 9.625C19.5 9.25416 19.61 8.89165 19.816 8.58331C20.022 8.27496 20.3149 8.03464 20.6575 7.89273C21.0001 7.75081 21.3771 7.71368 21.7408 7.78603C22.1045 7.85837 22.4386 8.03695 22.7008 8.29917C22.963 8.5614 23.1416 8.89549 23.214 9.2592C23.2863 9.62292 23.2492 9.99992 23.1073 10.3425C22.9654 10.6851 22.725 10.978 22.4167 11.184C22.1084 11.39 21.7458 11.5 21.375 11.5C20.8777 11.5 20.4008 11.3025 20.0492 10.9508C19.6975 10.5992 19.5 10.1223 19.5 9.625Z" fill="#633CFF"/>
                        </svg>
                        <h5 className="mb-2 text-base font-semibold tracking-tight text-[#633CFF]">+ Upload picture</h5>
                        <span id="filename" className="text-gray-500 bg-gray-200 z-50"></span>
                    </label>
                </div>

                <p className="text-xs text-[#737373]">
                    Image must be below 1024x1024px. Use PNG or JPG format.
                </p>
            </div>

            <div className="rounded-xl flex gap-3 flex-col p-5 bg-[#FAFAFA]">
                <div className="flex gap-2 flex-col">
                    <h3 className="text-xs text-[#333333]">
                        First Name*
                    </h3>

                    <div className="w-full input input-bordered flex items-center gap-2">
                        <input type="text" className="grow w-1/2" placeholder="First Name" id="password" />
                    </div>
                </div>

                <div className="flex gap-2 flex-col">
                    <h3 className="text-xs text-[#333333]">
                        Last Name*
                    </h3>

                    <div className="w-full input input-bordered flex items-center gap-2">
                        <input type="text" className="grow w-1/2" placeholder="Last Name" id="password" />
                    </div>
                </div>

                <div className="flex gap-2 flex-col">
                    <h3 className="text-xs text-[#333333]">
                        Email
                    </h3>

                    <div className="w-full input input-bordered flex items-center gap-2">
                        <input type="email" className="grow w-1/2" value={'frederickemma00@gmail.com'} readOnly />
                    </div>
                </div>
            </div>
        </div>

        {/* Button */}
        <button className="btn w-full bg-[#633CFF] text-white mt-5">
            Save
        </button>
    </form>
  )
}
