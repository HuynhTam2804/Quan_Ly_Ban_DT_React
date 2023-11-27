import React, { useState } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
function Banner() {
    return (
        <>
          <div className='row see_all'>
            <div className='slide col-12'>
              <UncontrolledCarousel
                items={[
                  {
                      id:1,
                      altText: 'Slide 1',
                      caption: 'Oppo ',
                      src: 'img/banner_img/anh3.png'
                  },
                  {
                      id:2,
                      altText: 'Slide 2',
                      caption: 'SamSung',
                      src: 'img/banner_img/anh2.png'
                  },
                  {
                      id:3,
                      altText: 'Slide 3',
                      caption: 'IPhone',
                      src: 'img/banner_img/anh1.png'
                  }
                ]}
              />
            </div>
          </div>
        </>
    );
}

export default Banner;