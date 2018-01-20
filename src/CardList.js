import React, { Component } from 'react'
import InfiniteScroll from "./InfiniteScroll.js"
import uuid from "uuid"
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

  initFakeData = () => {
    this.setState({
      loading: true,
    }, this.getFakeData())
  }

  render() {
    const { data, loading } = this.state
    const FakeCard = data.map((value)=> <Card index={value} key={uuid()} />)
    return (
      <InfiniteScroll
        data={data}
        loading={loading}
        initFakeData={this.initFakeData}
        {...this.props}
      >
        {FakeCard}
        {
          loading &&
          "Loading..."
        }
      </InfiniteScroll>

    );
  }
}

export default CardList;
