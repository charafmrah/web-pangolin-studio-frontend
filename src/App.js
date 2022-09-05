import logo from './logo.svg'
import './App.css'
import Header from './components/Header.js'
import Search from './components/Search.js'
import GeneratedImage from './components/GeneratedImage'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className='min-h-screen pl-5 pr-5 pb-5 md:pb-10 lg:pl-80 lg:pr-80'>

      <Header />

      <h1 className='flex justify-center text-center text-3xl md:text-6xl text-white mt-16 md:mt-24 mb-18 '>
        YouTube Thumbnail Generator
      </h1>

      <Search />

      <GeneratedImage />

      <Footer />

    </div>
  );
}

export default App;
