import logo from '../assets/logo.png';
const ComponentHeader = ({bgColor}) =>{
    console.log(bgColor)
    const className = bgColor==='white'? "bg-white" :""
    return (
        <>
            <div>
                <div className={className +" "+"p-2"}>
                    <div className="items-center flex max-w-[1300px] m-auto justify-between gap-4">
                        <div className="p-2 flex gap-1 items-center font-bebas font-semi-bold text-[14px]">
                            <div className="w-10 lg:w-16 border border-[#bcc3c6] rounded-[50%]">
                                <img src={logo} alt="" />
                            </div>
                            <div className="hidden flex-col text-[21px] text-[#4d4d4d] tracking-normal font-bebas md:flex">
                                <p>LOSANGLES</p>
                                <p>MOUNTAINS</p>
                            </div>
                        </div>
                        <div className="flex gap-5 text-[12px] leading-5 uppercase text-[#414f6b] font-extrabold italic font-lato underline">
                            <p><a href="#">1.History</a></p>
                            <p><a href="#">2.Team</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComponentHeader;