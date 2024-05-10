import snowMountain from '../assets/snowMountain.png';
import LastPageHeaderContents from './LastPageHeaderContents';
const LastPage = ()=>{
    const data = [{date:"25 Nov 2016",venu:"Vestibulum viverra"},{date:"28 Nov 2016",venu:"Vestibulum viverra"}
                ,{date:"18 Dec 2016",venu:"Vestibulum viverra"},{date:"07 Jan 2017",venu:"Vestibulum viverra"}]
    return <>
        <LastPageHeaderContents />
        <div>
            <div className="relative w-full inset-0 h-screen bg-center bg-cover bg-no-repeat"
            style={{backgroundImage:`url(${snowMountain})`}}>
                <div className="max-w-[1300px] m-auto h-[500px] relative flex justify-center">
                    <div className="max-w-[1300px] m-auto absolute top-[5rem] md:left-[4rem] xl:left-[2rem]">
                        <div className="w-[300px] h-[250px] md:w-[352px] md:h-[229px] p-4 align bg-[#ffffff] bg-opacity-75">
                            <div className="text-[32px] text-[#414f6b] font-bold font-oswald px-4">
                                <p>SCHEDULE</p>
                            </div>
                            <div className="text-[16px] leading-6 md:leading-8 text-[#000000] font-light font-lato p-4">
                                <ul>
                                {data.map(obj => <li key={obj.date} className="flex justify-between"><span>{obj.date}</span> <span>{obj.venu}</span></li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </>
}
// w-[352px] h-[229px]
export default LastPage;
