import React, { Component } from 'react';
import API from "../../utils/fetch";
import Good from '../Good/Good.js';
import ModalWin from '../ModalWin/ModalWin.js';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import "./style.css";

export default class GoodsList extends Component {
  state = {
    goods: [],
    editData: {},
  }

  async componentDidMount() {
    const request = await API.get('');
    this.setState({ goods: request.data })
  }

  handleSubmit = async ({ name, price, img, id }, props) => {
    event.preventDefault();
    
    if(id === "new"){ 
      const good = {
        productName: name,
        salePrice: price,
        img: img
    }

    const request = await API.post(`/`, good);
    const goods = [...this.state.goods];
    goods.unshift(request.data);
    this.setState({ goods: goods})
    this.closeEditData();
    return;
    }
    
    const goods = [...this.state.goods];
    let good = goods.find((good) => good._id === id);
    good.productName = name;
    good.salePrice = price;
    good.img = img;

    this.setState({
      goods
    });
    API.put(`/${id}`, good);
  }
  // Handle submit end

  openEditModal = editData => {

    this.setState({ editData })
  };

  closeEditData = () => this.setState({ editData: {} });

  render() {
    const { goods, editData } = this.state;
    const { history } = this.props;
    return (
      <React.Fragment>
        <div className="heading-wrapper">
          <h1 className="main-heading">Goods</h1>
          <IconButton onClick={() => this.openEditModal({ _id: 'new' }) } style={{ height: "50px" }} aria-label="add">
            <Icon color="primary" fontSize="small">add_circle</Icon>
          </IconButton>
        </div>
        <main className="goods">
          {!!goods && goods.map((good, index) =>
              <Good history={history} key={index} openEditModal={this.openEditModal} {...good} handleSubmit={this.handleSubmit} />
          )}
        </main>
        <ModalWin handleSubmit={this.handleSubmit} onClose={this.closeEditData} data={editData} />
      </React.Fragment>
    );
  }
}

