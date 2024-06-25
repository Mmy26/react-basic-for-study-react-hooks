import React, { useState, useEffect } from 'react'
// import axios from 'axios'

const ApiFetch = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then(res => {
    //   setPosts(res.data)
    // })
    fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'})
      .then((res) => res.json())
      .then(data => {
        setPosts(data)
      })
  }, [])
  return (
    <>
      <ul>
        {
          posts.map((post)=> <li key={ post.id }> { post.title } </li>)
        }
      </ul>
    </>
  )
}

export default ApiFetch