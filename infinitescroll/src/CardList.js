import React, { Component } from 'react';
import "./Card.css"

const Card = ({ index }) => (
  <div className="card">
    <div className="card-content">
    </div>
  </div>
)

class CardList extends Component {
  state = {
      data: Array(20).fill(1).map((el,index)=>index+1),
      loading: false,
  }

  getFakeData = () => {
    setTimeout(()=> {
      var fakeData =  Array(20).fill(1).map((el,index)=>index+1)
      this.setState({
        data: this.state.data.concat(fakeData),
        loading: false,
      })
    },1500)
  }

  onScroll = () => {
    if (
        (window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.state.loading
      ) {
        this.setState({
          loading: true,
        },  this.getFakeData())

      }
  }
  componentWillMount() {
    window.scroll(0,0)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
    //window.addEventListener('touchmove', this.onScroll, false);
  }

  componentWillUnMount() {
    window.removeEventListener('scroll', this.onScroll, false);
    //window.removeEventListener('touchmove', this.onScroll, false);
  }

  render() {
    const { data, loading } = this.state
    const FakeCard = data.map((value)=> <Card index={value} />)
    return (
      <div className="card-container">
        {FakeCard}
        {
          loading &&
          "Loading..."
        }
      </div>
    );
  }
}

export default CardList;
