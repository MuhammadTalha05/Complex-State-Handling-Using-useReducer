import React, { useReducer, useState } from 'react'
import {videoDB} from './Database/db'
import AddVideo from './Components/AddVideo/AddVideo';
import VideoList from './Components/VideoList/VideoList';

const App = () => {
  
  const [updatingVideo, setUpdatingVideo] = useState(null)

  const videoReducer = (video, action)=>{
    switch(action.type)
    {
      // Adding Video..............
      case "ADD":
        return [...video, {...action.payload, id:video.length+1}]

      // Deleting Video..............
      case 'DEL':
          return video.filter((val)=>{
            return val.id !== action.payload
          })  

      //// Updating Video...............    
      case "EDIT":
        const index = video.findIndex((val)=>{
          return(
            val.id===action.payload.id
          )
        })
    
        const updates = [...video]
        updates.splice(index, 1, action.payload)
        setUpdatingVideo(null)
        return updates
        
      ////// Default Value 
      default:
        return video  
    }
    
  }

  const [video, dispatch] = useReducer(videoReducer , videoDB)

  const editVideo=(id)=>{
    setUpdatingVideo(video.find((val)=>{
      return(
        val.id===id
      );
    }))
  }


  return (
    <>
    <h2 style={{textAlign:"center", backgroundColor:'#000', color:'#fff', paddingBlock:'18px', fontSize:30}}>YOUTUBE VIDEOS DASHBOARD</h2>
    <div>
      <AddVideo dispatch={dispatch} updatingVideo={updatingVideo}></AddVideo>
    </div>
    <VideoList video={video} dispatch={dispatch} editVideo={editVideo}/>
    </>
  )
}

export default App