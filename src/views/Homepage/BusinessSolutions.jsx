import React from 'react';
import Sol4UpdateResize from '../../assets/img/solutions/Sol4UpdateResize.png';
import Sol5Update from '../../assets/img/solutions/Sol5Update.png';
import Sol6 from '../../assets/img/solutions/Sol6.png';

import './business-solutions.css';

function BusinessSolutions() {
  return (
    <section className='content-wrapper dark has-animation'>
      <div className='wrapper'>
        <div className='solutions'>
          <div className='col left'>
            <div className='block'>
              <h2 className='section-title'>
                Solutions{' '}
                <span className='light'>
                  for
                  <br />
                  your business
                </span>
              </h2>
              <p>
                Let our global banking experts help as you enter new markets,
                capitalize on cross-border opportunities and maximize
                international revenues.
              </p>
              <a href='#' className='link-btn'>
                All products for your business
              </a>
            </div>
          </div>
          <div className='col right products-slider owl-carousel'>
            <div className='block'>
              <div className='product'>
                <img src={Sol4UpdateResize} width='290' height='143' alt='Product Pic' />
                <div className='desc'>
                  <h3 className='title'>
                    Get an account that suits your business
                  </h3>
                  <p>A business account that saves your time everyday</p>
                  <a href='#' className='primary-btn'>
                    Open an account
                  </a>
                </div>
              </div>
            </div>
            <div className='block'>
              <div className='product'>
                <img src={Sol5Update} width='290' height='143' alt='Product Pic' />
                <div className='desc'>
                  <h3 className='title'>Borrowing for all businesses</h3>
                  <p>We know how to help you flourish your business</p>
                  <a href='#' className='primary-btn'>
                    Get a loan
                  </a>
                </div>
              </div>
            </div>
            <div className='block'>
              <div className='product'>
                <img src={Sol6} width='290' height='143' alt='Product Pic' />
                <div className='desc'>
                  <h3 className='title'>
                    Specialist Assistance to help you grow{' '}
                  </h3>
                  <p>Tap into our offerings and succeed in your business</p>
                  <a href='#' className='primary-btn'>
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessSolutions;
