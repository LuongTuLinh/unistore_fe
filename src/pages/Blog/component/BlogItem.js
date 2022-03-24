import React from 'react'

export default function BlogItem(props) {
    return (
        <div className="col-sm-6 col-md-6 item">
            <div className="body">
            <a href="#1" className="view">
                <i className="ion-ios-book-outline" />
            </a>
            <a href="#1">
                <img
                src={props.image}
                title="Apple Devices"
                alt="Apple Devices"
                />
            </a>
            <div className="caption">
                <h1 className="h3">{ props.title }</h1>
                <label>{props.created}17</label>
                <hr className="offset-sm" />
                <p>
                    {props.intro}
                </p>
                <hr className="offset-sm" />
                <a href={this}>
                {" "}
                View article <i className="ion-ios-arrow-right" />{" "}
                </a>
            </div>
            </div>
        </div>
    )
}
