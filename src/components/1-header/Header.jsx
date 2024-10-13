import React, { useEffect, useState } from 'react'
import './Header.css'





const Header = () => {
  
  const [showModel, setshowModel] = useState(false)
  const [ theme, setTheme] = useState(localStorage.getItem("currenMode") ?? "dark")

  useEffect(() => {
    if(theme === "light") {
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    }else{
      document.body.classList.remove("light")
      document.body.classList.add("dark")
    }
  },[theme])
  return (
    <header className=' flex'>
       <button onClick={()=>{
        setshowModel(true)
       }} className='menu icon-list'> </button>
      <div/> 

     

      <nav>
         <ul className='flex'>
          <li><a href="">About</a></li>
          <li><a href="">Articales</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Speaking</a></li>
          <li><a href="">Contact</a></li>
         </ul>
      </nav>

      <button onClick={() => {

        // send value to locaStorage 
            localStorage.setItem("currenMode", theme === "dark" ? "light" : "dark" )


             // get value from localStorage
     
             setTheme(localStorage.getItem("currenMode"))


      }} className='mode flex'>
        {theme === 'dark' ? ( <span className='icon-moon-o'></span>) : (<span className='icon-sun'></span>)}
      </button>


{showModel && (
  
<div className=" fixed">

<ul className='model '>
  <li>
    <button className='icon-cross' onClick={()=>{
      setshowModel(false)
    }}/>
  </li>
  <li><a href="">About</a></li>
  <li><a href="">Articales</a></li>
  <li><a href="">Projects</a></li>
  <li><a href="">Speaking</a></li>
  <li><a href="">Contact</a></li>
</ul>

</div>
)}




    </header>
  )
}

export default Header