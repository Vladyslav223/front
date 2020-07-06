import React, { Component } from 'react';
import API from "../../utils/fetch";
import Good from '../Good/Good.js';


export default class GoodsList extends Component {
  state = {}

  async componentDidMount() {
    const request = await API.get(`/${this.props.match.params.id}`);
    this.setState({ good: request.data });
    console.log(this.state.good)
  }

  render() {

   return (
    <Good {...this.state.good} />
   )
  }
}

