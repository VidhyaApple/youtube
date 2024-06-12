import React from 'react'
import moment from 'moment'
import formatNumber from '../utils/helpers';

const VideoCard = ({details}) => {



  const {snippet,statistics} = details;

  return (
    <div className='m-2 p-2 w-[22rem] ' >
      <img className=' rounded-lg cursor-pointer' src={snippet?.thumbnails?.high?.url} alt="thumbnail" />
      <ul className='m-2 flex flex-wrap flex-col text-sm'>
      <li className='font-bold cursor-pointer' >{snippet?.title}</li>
        <li>{snippet?.channelTitle}</li>
        <li>{formatNumber(statistics?.viewCount)} views<sup className='ml-1'>.</sup>
          <span className='ml-1'>{moment(snippet?.publishedAt).fromNow()}</span>
        </li>
      </ul>
    </div>
  )
}

export default VideoCard