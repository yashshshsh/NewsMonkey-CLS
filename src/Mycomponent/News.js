import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'
import Spinner from './spinner';

export class News extends Component {
    static defaultProps = {
        pageSize : 8,
        category : 'general',
    };
    static propTypes = {
        pageSize : PropTypes.number,
        category : PropTypes.string,
    };
    constructor(){
        super();
        this.state = {
            articles : [],
            loading : false,
            page : 1,
        }
    }

    handleNextClick = async() =>{
        let url = `https://newsapi.org/v2/top-headlines?&category=${this.props.category}&apiKey=2afe89082a48445fb300078a9a204e21&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({loading:false})
        console.log(parsedData);
        this.setState({articles : parsedData.articles});
        this.setState({
            page : this.state.page+1,
            articles : this.state.parsedData.articles
        })
    }

    handlePrevClick = async() =>{
        let url = `https://newsapi.org/v2/top-headlines?&category=${this.props.category}&apiKey=2afe89082a48445fb300078a9a204e21&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({loading:false})
        console.log(parsedData);
        this.setState({articles : parsedData.articles});
        this.setState({
            page : this.state.page-1,
            articles : parsedData.articles
        })
    }

    componentDidMount = async() =>{
        let url = `https://newsapi.org/v2/top-headlines?&category=${this.props.category}&apiKey=2afe89082a48445fb300078a9a204e21&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({loading:false})
        console.log(parsedData)
        this.setState({articles : parsedData.articles,totalResults : parsedData.totalResults})
    }
  render() {
    return (
        <>
      <div className='container my-3 py-3'>
        <h1 className='text-center'>Top Headlines...</h1>
        {/* <Spinner/> */}
        <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
                return (<div className="col-md-4" key={element.url}>
                <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>)
            })}
        </div>
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" onClick={this.handlePrevClick} className="btn btn-dark"> &larr; Previous</button>
            <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
      </>
    )
  }
}

export default News
