import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { getData } from '../redux/actions'

const API_ENDPOINT = 'https://api.valentinog.com/api/link/'

const mapStateToProps = (state) => ({
  articles: state.remoteArticles
    .map((article) => ({
      ...article,
      id: nanoid(),
    }))
    .slice(0, 10),
})

export class ConnectedPost extends Component {
  componentDidMount() {
    this.props.getData(API_ENDPOINT)
  }

  render() {
    return (
      <ul>
        {this.props.articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    )
  }
}

const Post = connect(mapStateToProps, { getData })(ConnectedPost)

export default Post
