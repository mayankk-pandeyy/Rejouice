import React from 'react'

const Button = ({text}) => {
  return (
    <div>
        <div className='cursor-pointer'>
            {text}
        </div>
    </div>
  )
}

export default Button