import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'

import Bookmark from './components/Bookmarks/Bookmarks'
import Header from './components/Headers/Header'

function App() {
  const [bookmarks, setBookmarks] = useState ([]);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
     
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmark bookmarks={bookmarks}></Bookmark>
      </div>
      
    </>
  )
}

export default App
