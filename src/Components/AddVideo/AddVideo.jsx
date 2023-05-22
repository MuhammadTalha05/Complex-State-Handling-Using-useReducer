import React, { useEffect, useState } from 'react'
import styles from './AddVideo.module.css'

const AddVideo = ({dispatch, updatingVideo, onGettingFucntion}) => {

  const initialValues = {
    title: "",
    channelName : "Muhammad Talha",
    verified: true,
    views: "",
    time: "",
}

const [videoData, setVideoData] = useState(initialValues)


// I use (Use Effect Hook) to automaticly fill up form in filled (e.g vallue={videoData.title})
useEffect(()=>{
  if(updatingVideo){
    setVideoData(updatingVideo)
  }
},[updatingVideo])



  // Getting Values From Input
  const inputChange =(e)=>{
    setVideoData({...videoData, [e.target.name]:e.target.value})
  }


  // Button After Click
  const handleSubmit = (e)=>{
    e.stopPropagation();
    e.preventDefault();
    if(updatingVideo)
    {
      dispatch({type:"EDIT", payload:videoData})
    }
    else{
      dispatch({type:'ADD', payload:videoData})
    }

    setVideoData({
      title:"",
      views:"",
      time:"",
    })

    
  }
  return (
    <div>
        <form className={styles.flexForm}>
            <input type="text" placeholder='Enter Your Title' value={videoData.title} name="title" onChange={inputChange}/>
            <input type="text" placeholder='Enter Your Views' value={videoData.views} name="views" onChange={inputChange}/>
            <input type="text" placeholder='Enter Your Time' value={videoData.time} name="time" onChange={inputChange}/>
            <button onClick={handleSubmit}>{updatingVideo === null ? "Add Video" : "Edit Video"}</button>
        </form>
    </div>
  )
}

export default AddVideo