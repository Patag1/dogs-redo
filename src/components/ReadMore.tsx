'use client'

import { FC, useState } from 'react'

interface ReadMoreProps {
  text: string
}

const ReadMore: FC<ReadMoreProps> = ({ text }) => {
  const [more, setMore] = useState(false)

  const visibleTxt = text.length > 300 ? text.slice(0, 300).trim().concat('...') : text

  return (
    <div>
        <p>
            {
                more
                    ? text
                    : visibleTxt
            }
        </p>
        <button
            className='text-cyan-400 text-sm'
            onClick={() => setMore(!more)}
        >Read {more ? 'less' : 'more'}</button>
    </div>
  )
}

export default ReadMore