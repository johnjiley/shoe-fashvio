import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        {/* Social Media Section */}
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://facebook.com' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://google.com' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://instagram.com' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://linkedin.com' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        {/* Newsletter Section */}
        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        {/* Links Section */}
        <section className='mb-4'>
          <MDBRow>
            {/* Company Links */}
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Company</h5>
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/about' className='text-white'>
                    About Us
                  </a>
                </li>
                <li>
                  <a href='/careers' className='text-white'>
                    Careers
                  </a>
                </li>
                <li>
                  <a href='/blog' className='text-white'>
                    Blog
                  </a>
                </li>
              </ul>
            </MDBCol>

            {/* Support Links */}
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Support</h5>
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/help' className='text-white'>
                    Help Center
                  </a>
                </li>
                <li>
                  <a href='/shipping' className='text-white'>
                    Shipping Information
                  </a>
                </li>
                <li>
                  <a href='/returns' className='text-white'>
                    Returns & Refunds
                  </a>
                </li>
              </ul>
            </MDBCol>

            {/* Shop Links */}
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Shop</h5>
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/products' className='text-white'>
                    All Products
                  </a>
                </li>
                <li>
                  <a href='/new-arrivals' className='text-white'>
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href='/best-sellers' className='text-white'>
                    Best Sellers
                  </a>
                </li>
              </ul>
            </MDBCol>

            {/* Legal Links */}
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Legal</h5>
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/privacy' className='text-white'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='/terms' className='text-white'>
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href='/cookies' className='text-white'>
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      {/* Copyright Section */}
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-white' href='mailto:johnjiley9810@gmail.com'>
          johnjiley9810@gmail.com
        </a>
      </div>
    </MDBFooter>
  );
}
