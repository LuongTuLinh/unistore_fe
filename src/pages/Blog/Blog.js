import React from 'react'
import './Blog.css'
import BlogItem from './component/BlogItem';
import Blogs from 'constant/Blog';

export default function Blog() {
  const url_string = window.location.href;
  const url = new URL(url_string);
  const currentPage = (url.searchParams.get("page")!=null)?parseInt(url.searchParams.get('page')):1;
  console.log(url.searchParams.get("page"));
  const limit = 4;
  const start = (currentPage - 1) * limit;

  // Get blog item
  const blog = Blogs.filter((blog,index) => index >= start && index < (start + limit))
                      .map((blog) => <BlogItem key={blog.id} title={blog.title} image={blog.image} created={blog.created} intro={blog.intro}/>)


  // Get pages
  const totalPage = Math.ceil(Blogs.length / limit);
  const pages = [];

  for (let i = 0; i < totalPage; i++) {
      pages.push(
        <li key={i} className={(i+1)=== currentPage ? 'active': ''}>
          <a href={'?page=' + (i+1)}>{i+1}</a>
        </li>
      )
  }

    return (
        <>
          <hr className="offset-lg" />
          <div className="container tags">
            <p>Search by tags</p>
            <div className="btn-group" data-toggle="buttons">
              <label className="btn btn-default btn-xs active">
                <input type="radio" name="options" id="option1" defaultChecked />{" "}
                All items
              </label>
              <label className="btn btn-default btn-xs">
                <input type="radio" name="options" id="option2" /> Newest
              </label>
              <label className="btn btn-default btn-xs">
                <input type="radio" name="options" id="option3" /> Popular
              </label>
              <label className="btn btn-default btn-xs">
                <input type="radio" name="options" id="option4" /> News
              </label>
              <label className="btn btn-default btn-xs">
                <input type="radio" name="options" id="option5" /> Articles
              </label>
              <label className="btn btn-default btn-xs">
                <input type="radio" name="options" id="option6" /> Reviews
              </label>
            </div>
          </div>
          <hr className="offset-sm" />
          <div className="blog">
            <div className="container">
              <div className="row">
                {/* Blog item */}
                {blog}
              </div>
              <nav>
                <ul className="pagination">
                  
                  <li>
                    <a href={"?page="+(currentPage-1)} aria-label="Previous">
                      <span aria-hidden="true">
                        <i className={"ion-ios-arrow-left" + (currentPage === 1?" hidden":"")} />
                      </span>
                    </a>
                  </li>
                  {pages}
                  <li>
                    <a href={"?page="+(currentPage+1)} aria-label="Next">
                      <span aria-hidden="true">
                        <i className={"ion-ios-arrow-right" + (currentPage ===totalPage?"hidden":"")} />
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </>
    )
}
