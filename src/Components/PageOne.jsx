import main  from '../assets/main-page-bg.png'
import logo from '../assets/logo.png';
const PageOne = ()=>{
    return (
        <>
        <div className="relative w-full">
             <div className="w-full inset-0 h-[56vh] md:h-[110vh] bg-center bg-cover bg-no-repeat" style={{backgroundImage : `url(${main})`}}>
             {/* <img src={main} alt="" className="relative"/> */}
        
                <div className="items-center p-2 flex max-w-[1200px] m-auto justify-between gap-4">
                    <div className="w-10 lg:w-16 border border-[#bcc3c6] rounded-[50%] mt-2.5">
                        <img src={logo} alt="" />
                    </div>
                    <div className="flex gap-5 text-[12px] leading-5 uppercase text-[#fefeff] font-extrabold italic font-lato underline">
                        <p className="cursor-pointer"><a href="#">01.History</a></p>
                        <p className="cursor-pointer"><a href="#">02.Team</a></p>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-8 md:mt-24 text-3d">
                    <p className="text-gray text-sky-50 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">LOSANGELS</p>
                    <p className="text-gray-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">MOUNTAINS</p>
                </div>
        </div>
        </div>
       
       
        </>
    )
}
export default PageOne;