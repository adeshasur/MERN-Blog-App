import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Backend එකෙන් දත්ත ගේන හැටි
    axios.get('http://localhost:5000/api/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="grid gap-6">
      <h2 className="text-3xl font-bold border-b pb-4">Latest Blog Posts</h2>
      {posts.map(post => (
        <div key={post._id} className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-blue-600">{post.title}</h3>
          <p className="mt-2 text-gray-600">{post.content.substring(0, 150)}...</p>
          <div className="mt-4 text-sm text-gray-400">By {post.author}</div>
        </div>
      ))}
    </div>
  );
}

export default Home;
