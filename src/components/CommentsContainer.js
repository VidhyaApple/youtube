import React from 'react'

import { commentsData } from '../utils/constants'
import CommentsList from './CommentsList'

const CommentsContainer = () => {
  return (
    <div className='mt-2'>
        <p className='font-bold'>COMMENTS</p>
        <CommentsList data={commentsData} />
    </div>
  )
}

export default CommentsContainer