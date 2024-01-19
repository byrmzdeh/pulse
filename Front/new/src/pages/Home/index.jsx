import React from 'react'
import { Helmet } from "react-helmet";
import SlickSlider from '../../components/Slider';
import Menu from '../../components/Menu';


const Home = () => {
  return (
    <div className='home'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <SlickSlider/>
      <Menu/>
    </div>
  )
}

export default Home
