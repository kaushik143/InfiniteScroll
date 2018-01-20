import React, { Component } from "react"

class InfiniteScrolling extends Component {
  componentWillMount() {
    window.scrollTo(0,0)
  }
  componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    var scrollTop = window.scrollY;
    var docHeight = document.body.offsetHeight;
    var winHeight = window.innerHeight;
    var scrollPercent = (scrollTop) / (docHeight - winHeight);
    var scrollPercentRounded = Math.round(scrollPercent*100);
    if (scrollPercentRounded > this.props.threshold && !this.props.loading) {
      this.props.initFakeData()
    }
  }

  render() {
    return (
      <div className="card-container">
        {this.props.children}
      </div>
    )
  }
}

export default InfiniteScrolling
