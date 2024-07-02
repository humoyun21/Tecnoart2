import React from 'react';
import { Carousel } from 'antd';
import Container from '../container/page';
import './style.css';
import Image from 'next/image';
import Text_img from '../../images/111.png';
import Img from '../../images/Carusel.png';

const App: React.FC = () => (
  <>
    <Container>
      <Carousel arrows infinite={true} autoplay={true} className='rounded-lg overflow-hidden custom-carousel'>
        <div>
          <div className='carousel'>
            <Image src={Text_img} alt='Text Image' className=''/>
           
          </div>
        </div>
        <div>
          <div className='carousel'>
            <Image src={Text_img}  alt='Text Image' className=''/>
         
          </div>
        </div>
        <div>
          <div className='carousel'>
            <Image src={Text_img}  alt='Text Image' className=''/>
          </div>
        </div>
      </Carousel>
    </Container>
  </>
);

export default App;
