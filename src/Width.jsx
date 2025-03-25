import React from 'react'

const Width = () => {
  return (
    <div  className='flex flex-col items-center justify-center border-2 '>
        <form action="#" className='inline'>
            <input type="text" name="target" id="target" />
            <input type="text" name="context" id="context" />
            <button>Calculate Width</button>
        </form>
    </div>
  )
}

export default Width