import React from 'react'

export default function NewItem(props) {
    return (
        <div className="col-sm-3 align-center">
          <a href="#1">
            <img
            src={ props.image }
            alt="Blog"
            className="image"
            />
          </a>
          <br />
          <br />
          <a href="#1">{ props.title }</a>
        </div>
    )
}
