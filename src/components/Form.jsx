import React from 'react'
import Button from './Button'
import Textarea from './TextAria'

const Form = () => {
  return (
    <div className='p-10'>
        <form action="">
          <Textarea />
          <div className='flex align-items justify-center border-red-500 border h-16'>
            <Button >Print bar code</Button>  
          </div>
        </form>
    </div>
  )
}

export default Form;