const LastPageHeaderContents = () =>{
    return(
        <>
            <div>
                <div className="max-w-[1300px] m-auto flex items-center flex-wrap md:gap-24 sm:flex-nowrap p-2">
                    <div className="relative">
                        <p className="text-opacity-50 text-[100px] md:text-[136px] text-[#414f6b] font-bold font-oswald">02.</p>
                        <p className="absolute bottom-[33%] left-[83%] text-[24px] md:text-[32px] text-[#414f6b] font-bold font-oswald">CLIMB</p>
                    </div>
                    <div className="text-[16px] leading-6 font-lato text-[#000000] font-light text-justify">
                        <p>
                            Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
                            gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue. 
                        </p>
                    </div>
                </div>
                <div className="bg-[#414f6b]">
                    <div className="max-w-[1300px] flex-wrap m-auto flex gap-3">
                        <span className="p-1 text-[20px] text-[#b0b4be] font-bold font-oswald hover:bg-[#b0b4be] hover:text-[#414f6b] hover:underline"><a href="#">MOUNTAIN1</a></span>
                        <span className="p-1 text-[20px] text-[#b0b4be] font-bold font-oswald hover:bg-[#b0b4be] hover:text-[#414f6b] hover:underline"><a href="#">MOUNTAIN2</a></span>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default LastPageHeaderContents;