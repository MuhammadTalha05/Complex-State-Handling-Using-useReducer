import React from 'react'
import VideoThumbnail from '../VideoThumbnail/VideoThumbnail'

const VideoList = ({video, dispatch, editVideo}) => {
  return (
    <div className='flex'>
      {
        video?.map((val, index)=>{
          return(
            <div key={index}>
              <VideoThumbnail {...val} dispatch={dispatch} editVideo={editVideo}></VideoThumbnail>
            </div>
          )
        })
      }
    </div>
  )
}

export default VideoList