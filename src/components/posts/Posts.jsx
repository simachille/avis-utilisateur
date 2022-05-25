import React, {useState, useEffect} from 'react'

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
       const data = await response.json();
       setPosts(data);
    } 
    getPosts();
  }, [])

  return (
    <div className='min-h-300'>
      <h2>Liste de posts</h2>
      <div className="">
        {posts.map(post => (
          <div className="my-2" key={post.id}>
            <h3>{post.id} {post.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Posts