import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { addArticle } from '../redux/actions'

const mapDispatchToProps = (dispatch) => ({
  addArticle: (article) => dispatch(addArticle(article)),
})

const INITIAL_STATE = {
  title: '',
  id: '',
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      title: event.target.value,
      id: nanoid(),
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const { title, id } = this.state
    if (title === '') return
    this.props.addArticle({ title, id })
    this.setState(INITIAL_STATE)
  }

  render() {
    const { title } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>{' '}
          <input type="text" value={title} onChange={this.handleChange} />
        </div>
        <button type="submit">SAVE</button>
      </form>
    )
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm)

export default Form
