import React, {  useState } from 'react'
import {searchImages} from "./searchimages.jsx"
import "./image.css"
const Imagesearch = () => {
    const[query,setQuery]=useState('')
    const[results,setResults]=useState([])
    const[bookmarks,setBookmarks]=useState([])

    const handleSearch=async (e)=>{
        e.preventDefault()
        const images= await searchImages(query)
        setResults(images)
    };

    const handleBookmark=(image)=>{
        const index=bookmarks.findIndex((item)=>item.id===image.id)
        if(index===-1){
            setBookmarks([...bookmarks,image]);

        }else{
            const newBookmarks=[...bookmarks]
            newBookmarks.splice(index,1);
            setBookmarks(newBookmarks)
        }
    }
  return (
    <div id="parent">
       <form onSubmit={handleSearch}>
        <h1>Image Search App</h1>
        <input type='text' placeholder='search images..' value={query} onChange={(e)=>setQuery(e.target.value)}/>
        <button type='submit'>Search</button>
       </form>
       <div className='results'>
         {results.map((result)=>{
            return(
                <div className='image' key={result.id}>
                 <img src={result.urls.small} alt={result.alt_description}/>
                 <div className='overlay'>
                   <button className={bookmarks.some((item)=>item.id===result.id)?'active':""} onClick={()=>handleBookmark(result)}>{bookmarks.some((item)=>item.id===result.id)?'Bookmarked':"Bookmark"}</button>
                 </div>
                </div>
            )
         })}
       </div>
       <div className='bookmarks'>
          {bookmarks.map((bookmark)=>{
            return(
                <div className='image' key={bookmark.id}>
                <img src={bookmark.urls.small} alt={bookmark.alt_description}/>
                <div className='overlay'>
                 <button className='active' onClick={()=>handleBookmark(bookmark)}>Bookmarked</button>
                </div>
                </div>
            )
          })}
       </div>
    </div>
  )
}

export default Imagesearch