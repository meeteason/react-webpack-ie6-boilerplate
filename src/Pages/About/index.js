import React from 'react'
import ReactDOM from 'react-dom'
// import Header from '../../Components/Header'
// import Footer from '../../Components/Footer'

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <div className="container">{this.props.children}</div>
        {/* <Footer /> */}
      </div>
    )
  }
}

class Content extends React.Component {
  render() {
    return <div>内容</div>
  }
}


ReactDOM.render(
  <App>
    <Content />
  </App>,
  document.getElementById('app')
)
