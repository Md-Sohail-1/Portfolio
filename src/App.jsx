import './App.css'

import Header from './Components/Header'
import HomePage from './Components/HomePage'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Header />
      {
      //Main Content Placeholder 
      }
      <main id="main" class="h-[calc(100vh-128px)] p-4 pb-0 bg-slate-700 relative top-16 text-gray-800 overflow-x-hidden">
        <HomePage />
        <Projects />
        <hr/>
        <Skills />
        <hr/>
        <About />
        <hr/>
        <Contact />
        <hr/>
        <Footer />
      </main>
    </>
  )
}

export default App