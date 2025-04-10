import React from 'react'
import Header from './component/header'
import Banner from './component/banner'
import "./sass/component/home.scss"
import About from './component/pages/About'
import Resume from './component/pages/Resume'
import Contact from './component/pages/Contact'
function App() {

  return (
    <>
       <Header />
      <main>
        <Banner />
        <About />
        <Resume />
        <Contact />
      </main>
    </>
  )
}

export default App
