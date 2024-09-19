import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl} = this.props;
        return (
            <div>
                <div className="card my-3">
                    <img src={imageUrl?imageUrl:"https://images.news18.com/ibnlive/uploads/2023/12/apple-macbook-air-m3-2023-12-421cd1b4957193f9d21419d3ccc3c16b-16x9.jpg?impolicy=website&width=1200&height=675"}  alt="News Image" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl} target="_blank"className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div> 
            </div>
        )
    }
}

export default Newsitem
