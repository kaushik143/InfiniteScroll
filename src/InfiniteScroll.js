import React, { Component } from "react"

class InfiniteScrolling extends Component {
  componentWillMount() {
    setTimeout(() => {window.scrollTo(0, 0)}, 1)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, true);
  }

  onScroll = () => {
    var scrollTop = window.scrollY;
    var docHeight = document.body.offsetHeight;
    var winHeight = window.innerHeight;
    if (docHeight - winHeight - scrollTop <= (this.props.threshold) && !this.props.loading) {
      this.props.initFakeData()
    }
  }

  render() {
    return (
      <div className="card-container" ref={(node) => this.scrollNode=node}>
        {this.props.children}
      </div>
    )
  }
}

export default InfiniteScrolling
