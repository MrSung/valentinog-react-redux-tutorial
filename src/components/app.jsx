import React from 'react'
import List from './list'
import Form from './form'
import Post from './posts'

const App = () => (
  <div className="wrapper">
    <section>
      <h2>Add a new article</h2>
      <Form />
      <h3>List</h3>
      <List />
    </section>
    <hr />
    <section>
      <h2>API posts</h2>
      <Post />
    </section>
  </div>
)

export default App
