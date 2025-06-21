import React from 'react'
import './Home.css'

function Home() {
  return (
    <div>
      <nav className='header'>
            <h2>Logo</h2>

        <nav className='duo'>
            <nav className='three'>
             <a href="#">Home</a>
             <a href="#">About</a>
             <a href="#">Contact</a>
            </nav>
           <nav className='btn'><i class="ri-menu-line"></i></nav>
        </nav>

       </nav>

       <section className='mid'>
           <div className='icon'><i class="ri-rocket-2-line"></i></div>
           <h1>Welcome to My <br/> Landing Page</h1>
           <h3><span>Your Solution to pain points in just minutes.</span></h3>
           <button>Get Started</button>        
       </section>

       <section className='privacy'>
        <div className='pehla'>
          <i class="ri-lock-2-fill"></i>
          <h4>Secure</h4>
          <h5>Your data safe <br /> with us</h5>
        </div>
        <div className='pehla'>
         <i class="ri-flashlight-fill"></i>
          <h4>Fast</h4>
          <h5>Experience quick <br /> Performance.</h5>
        </div>
        <div className='pehla'>
         <i class="ri-smartphone-fill"></i>
          <h4>Mobile</h4>
          <h5>Fully responsive <br />design.</h5>
        </div>
       </section>

       <footer className='botm'>
        <h1>Ready to grow your project ?</h1>
        <nav className='scnd'>Join Now</nav>
       </footer>

       <footer className='cr'></footer>
    </div>
  )
}

export default Home

