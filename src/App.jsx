import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'

import Bookmark from './components/Bookmarks/Bookmark'
import Header from './components/Headers/Header'

function App() {
  const [bookmarks, setBookmarks] = useState ([]);

  const handleAddToBookmark = blog => {
    console.log('bookmark adding soon')
  }

  return (
    <>
     
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmark></Bookmark>
      </div>
      
    </>
  )
}

export default App
