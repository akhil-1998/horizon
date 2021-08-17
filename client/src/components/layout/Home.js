import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className='home'>
      <div className='dark-overlay'>
        <div className='home-inner'>
          <h1 className='xl'>HORIZON</h1>
          <p className='cta'>
            The best way to predict the future is to create it.
            
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>Register</Link>
            <Link to='/login' className='btn btn-light'>Login</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
