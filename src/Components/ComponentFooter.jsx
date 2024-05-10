import logo from '../assets/logo.png';
const ComponentFooter = () =>{
    return <>
        <footer>
            <div className="bg-[#414f6b]  align-middle text-[#63769d]">
            <div className="md:w-[768px] lg:w-[1024px] xl:w-[1300px] m-auto flex justify-between items-center flex-col md:flex-row ">
                <div className="p-2 flex gap-3 items-center font-bebas font-semi-bold text-[16px]">
                    <div className="w-8">
                        <img src={logo} alt="" />
                    </div>
                    <div className="flex flex-row gap-3 flex-wrap md:block">
                        <p>LOSANGLES</p>
                        <p>MOUNTAINS</p>
                    </div>
                </div>
                <div className="font-lato italic text-[12px]">
                    <span>COPYRIGHT 2016. ALL RIGHTS RESERVED</span>
                </div>
            </div>
            </div>
        </footer>
    </>
}
export default ComponentFooter;