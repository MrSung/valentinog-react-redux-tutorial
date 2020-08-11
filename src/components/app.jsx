import React from 'react'
import List from './list'
import Form from './form'

const App = () => (
  <div className="wrapper">
    <section>
      <h2>Articles</h2>
      <List />
    </section>
    <section>
      <h2>Add a new article</h2>
      <Form />
    </section>
  </div>
)
export default App
