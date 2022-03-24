import React from 'react'

export default function SlideItem(props) {
  let className="item " + props.active;

    return (
      <div className={className} data-marker={props.marker}>
        <img
        src="assets/img/carousel/bckg.jpg"
        alt="Background"
        className="background"
        />
        <div className="content">
          <div className="outside-content">
            <div className="inside-content">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 align-center">
                    <h1>{ props.title }</h1>
                      <p>{ props.description }</p>
                      <a href="/catalog">More laptops &gt;</a>
                      <br />
                      <br />
                  </div>
                  <div className="col-sm-6 col-sm-offset-3 align-center">
                    <img
                    src={ props.image }
                    alt="Laptops"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
