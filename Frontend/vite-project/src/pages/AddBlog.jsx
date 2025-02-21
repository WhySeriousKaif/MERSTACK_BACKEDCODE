import React from "react";

const AddBlog = () => {
  return (
    <>
      <div className="container">
                <h1 className="text-center">Add Blog</h1>
        <form>
          <div className="mb-3">
          
           
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
                    type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              ImageUrl
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          
          
          <div class="d-grid gap-3">
            <button class="btn btn-primary" type="button">
              Add Blog
            </button>
            
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBlog;
