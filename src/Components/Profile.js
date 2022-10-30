import React from 'react'
import "./Profile.css"
import image from './image.png';


function Profile() {
  return (
    <div className='container'>
        <div className='image'>
        <img src={image} />
        </div>
        <p className='name'>fardosa ibrahim</p>
        
        {/* <p id='slack'>Fardosa ibrahim</p> */}
        <div className='buttons'>
          <a href='https://twitter.com/FardosaIbrahi11'><button>Twitter link</button></a>
          <a href="https://training.zuri.team/"><button>zuri Team</button></a>
          <a href="http://books.zuri.team "><button>zuri Books</button></a>
          <a href="https://books.zuri.team/"><button>python Books </button></a>
          <a href="https://background.zuri.team"> <button>Background Check for Coders</button></a>
          <a href="https://books.zuri.team/design-rules"><button>Design Books </button></a>
        </div>


    </div>
  )
}

export default Profile