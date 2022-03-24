import React from 'react'
import NewItem from 'pages/Home/component/NewItem/NewItem'

export default function News() {
    return (
      <>
          <br />
          <br />
          <div className="container">
            <div className="row">
              <NewItem title="Blog headlines" image="assets/img/tiles/blog.jpg" />
              <NewItem title="New apple diveces" image="assets/img/tiles/video-apple.jpg" />
              <NewItem title="Brend new DELL XPS" image="assets/img/tiles/video-dell.jpg" />
              <NewItem title="Products gallery" image="assets/img/tiles/gallery.jpg" />
              {/* <div className="col-sm-3 align-center">
                <a href={this}>
                  <img
                    src="assets/img/tiles/blog.jpg"
                    alt="Blog"
                    className="image"
                  />
                </a>
                <br />
                <br />
                <a href={this}>Blog headlines</a>
              </div>
              <div className="col-sm-3 align-center">
                <a
                  href="#video"
                  data-gallery="#video"
                  data-source="vimeo"
                  data-id={110691368}
                  data-title="Apple iPad Air"
                  data-description="So capable, you won’t want to put it down. So thin and light, you won’t have to."
                >
                  <img
                    src="assets/img/tiles/video-apple.jpg"
                    alt="New devices"
                    className="image"
                  />
                </a>
                <br />
                <br />
                <a
                  href={this}
                  data-gallery="#video"
                  data-source="vimeo"
                  data-id={110691368}
                  data-title="Apple iPad Air"
                  data-description="So capable, you won’t want to put it down. So thin and light, you won’t have to."
                >
                  New apple diveces
                </a>
              </div>
              <div className="col-sm-3 align-center">
                <a
                  href={this}
                  data-gallery="#video"
                  data-source="youtube"
                  data-id="6g-ZIm0wge4"
                  data-title="Best New Dell Laptops"
                  data-description="Best of dell's laptops that you can consider buying in 2016. 4 Laptops are featured in the video and all of them has equal importance and there is no order that #1 is better than #2"
                >
                  <img
                    src="assets/img/tiles/video-dell.jpg"
                    alt="Del XPS"
                    className="image"
                  />
                </a>
                <br />
                <br />
                <a
                  href={this}
                  data-gallery="#video"
                  data-source="youtube"
                  data-id="6g-ZIm0wge4"
                  data-title="Best New Dell Laptops"
                  data-description="Best of dell's laptops that you can consider buying in 2016. 4 Laptops are featured in the video and all of them has equal importance and there is no order that #1 is better than #2"
                >
                  Brend new DELL XPS
                </a>
              </div>
              <div className="col-sm-3 align-center">
                <a href={this}>
                  <img
                    src="assets/img/tiles/gallery.jpg"
                    alt="Gallery"
                    className="image"
                  />
                </a>
                <br />
                <br />
                <a href={this}>Products gallery</a>
              </div> */}
            </div>
          </div>
          <br />
          <br />
      </>
    )
}
