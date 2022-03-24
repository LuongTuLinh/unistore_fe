import React from 'react'

export default function Tags() {
  return (
    <>
      <hr className="offset-lg" />

      <div className="container tags">
        <div className="btn-group pull-right">
          <button type="button" className="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="ion-arrow-down-b"></i> Sorting by name
          </button>
          <ul className="dropdown-menu">
            <li className="active"><a href="#a"> <i className="ion-arrow-down-c"></i> Name [A-Z]</a></li>
            <li><a href="#a"> <i className="ion-arrow-up-c"></i> Name [Z-A]</a></li>
            <li><a href="#a"> <i className="ion-arrow-down-c"></i> Price [Low-High]</a></li>
            <li><a href="#a"> <i className="ion-arrow-up-c"></i> Price [High-Low]</a></li>
          </ul>
        </div>

        <p>Search by tags</p>
        <div className="btn-group" data-toggle="buttons">
          <label className="btn btn-default btn-xs active">
            <input type="radio" name="options" id="option1" defaultChecked defaultValue="All products" />All products
          </label>
          <label className="btn btn-default btn-xs">
            <input type="radio" name="options" id="option2" defaultValue="Business" /> Business
          </label>
          <label className="btn btn-default btn-xs">
            <input type="radio" name="options" id="option3" defaultValue="Home" /> Home
          </label>
          <label className="btn btn-default btn-xs">
            <input type="radio" name="options" id="option4" defaultValue="Mobility" /> Mobility
          </label>
          <label className="btn btn-default btn-xs">
            <input type="radio" name="options" id="option5" defaultValue="Powerfull" /> Powerfull
          </label>
          <label className="btn btn-default btn-xs">
            <input type="radio" name="options" id="option6" defaultValue="Gaming" /> Gaming
          </label>
        </div>
      </div>
    </>
  )
}
