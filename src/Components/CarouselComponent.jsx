import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import card1 from '../assets/carousel-card1.png';
import card2 from '../assets/carousel-card2.png'
const CarouselComponent = () =>{
    const cards = [card1,card2,card1,card2,card1,card2]
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <>
            <Carousel responsive={responsive} showDots={true}
            dotListClass="custom-dot-list-style" >
                {
                    cards.map(card =>(
                        <div className="p-2">
                            <img src={card} alt="" className="h-[285px]"/>
                        </div>
                    ))
                }
            </Carousel>
        </>
        
    )


}
export default CarouselComponent;