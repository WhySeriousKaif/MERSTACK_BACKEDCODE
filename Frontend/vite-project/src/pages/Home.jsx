import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
const Home = () => {
    const [blog, setblog] = useState([])
    useEffect(() => {
      const fetchBlog = async () => {
        const api = await axios.get(`https://merstack-backedcode.onrender.com/api/blogs/allblogs`,{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true,
        });
        console.log(api)
      }
      fetchBlog()
    }, []);
    
  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="your-image-url.jpg" className="img-fluid rounded-start" alt="Card" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. 
                This content is a little bit longer.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;