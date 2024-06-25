import React, { useEffect, useState } from 'react'

const BasicUseEffect = () => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("useEffect invoked")
  }, [])

  return (
    <>
      <button onClick={()=>setCount(prevCount => prevCount + 1)}>Click { count }</button>
    </>
  )
}

export default BasicUseEffect