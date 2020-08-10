import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import './styles/index.css'
import App from './components/app'

function RootComponent() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  )
}

const $root = document.getElementById('root')

ReactDOM.render(<RootComponent />, $root)
