import { Carousel } from 'react-bootstrap';
import banner1 from './assets/banner1.png';
import banner2 from './assets/banner2.png';
import banner3 from './assets/banner3.png';

import './SlideShow.scss';

const SlideShow = () => {
    return (
        <Carousel pause={false} className="slide-show">
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={banner1}
                alt="First banner"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={banner2}
                alt="Second banner"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={banner3}
                alt="Third banner"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default SlideShow;