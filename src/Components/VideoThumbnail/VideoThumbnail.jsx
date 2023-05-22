import React from 'react'
import styles from './VideoThumbnail.module.css'
import PlayButton from '../PlayButton/PlayButton'

const VideoThumbnail = ({id, title, channelName, verified,views,time,dispatch, editVideo}) => {
  return (
    <div className={styles.wrapper}>
      <button onClick={()=>dispatch({type: "DEL", payload: id})} className={styles.delete}>X</button>
      <button onClick={()=>editVideo(id)} className={styles.edit}>✎</button>
      <img src={`https://picsum.photos/id/${id}/200/300`} alt="thumbnail" width={300} height={200}/>
      <h3>{title}</h3>
      <h4>{channelName} {verified && "✅"}</h4>
      <p>Views: {views} . Time: {time}</p>
      <PlayButton onPlay={()=>console.log("Playing..")} onPause={()=>console.log("Paused..")}></PlayButton>

    </div>
  )
}

export default VideoThumbnail