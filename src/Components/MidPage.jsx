import peak from '../assets/peak.png'
import ComponentHeader from './ComponentHeader';
import CarouselComponent from './CarouselComponent';
const MidPage = ()=>{
    return <>
        <div>
            <div className="relative h-[150vh] w-full inset-0 bg-center bg-cover bg-no-repeat" style={{backgroundImage:`url(${peak})` , filter:"brightness(1.125)"}}>
                <ComponentHeader bgColor={"white"}/>
                <div>
            
                <div className="relative max-w-[1300px] m-auto flex flex-wrap flex-col items-start md:gap-24 sm:flex-nowrap p-2">
                    <div className="relative">
                        <p className="text-opacity-50 text-[100px] md:text-[136px] text-[#414f6b] font-bold font-oswald">01.</p>
                        <p className="absolute bottom-[33%] left-[83%] text-[24px] md:text-[32px] text-[#414f6b] font-bold font-oswald">HISTORY</p>

                    </div>
                    <div className="absolute left-[8%] top-[70%] p-4 text-[16px] leading-6 font-light text-[#000000] font-lato">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. 
                            Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. 
                            Vivamus suscipit dignissim tortor nec congue. </p>
                    </div>
                </div>
                </div>
            <div className="absolute w-full bottom-0">
            <div className="bg-[#414f6b] bg-opacity-75">
            <div className="max-w-[1300px] m-auto p-4">
                    <CarouselComponent />
                </div>
            </div>
            </div>
            
            </div> 
        </div>
    </>
}
export default MidPage;