import React, { Component } from 'react';
import { Formik } from 'formik';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import "./style.css";

const useStyles = theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
});

class ModalWin extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { classes } = this.props;
    const { data, onClose, handleSubmit } = this.props;

    return (     
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={!!data._id}
          onClose={onClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >         
          <Formik
            initialValues={{ name: data.productName, price: data.salePrice, img: data.img, id: data._id }}
            onSubmit={handleSubmit}
          >
            {props => { 
              console.log(props);
              return (
              <form onSubmit={props.handleSubmit} className="form-modal" noValidate autoComplete="off">
                <Input value={props.values.name} name="name" onChange={props.handleChange} placeholder="Name" inputProps={{ 'aria-label': 'editName' }} />
                <Input value={props.values.price} name="price" onChange={props.handleChange} placeholder="Price" inputProps={{ 'aria-label': 'editPrice' }} />
                <Input value={props.values.img} name="img" onChange={props.handleChange} placeholder="ImageURL" inputProps={{ 'aria-label': 'editImg' }} />
                <div className="buttons-wrapper">
                  <Button onClick={onClose} variant="contained">Cancel</Button>
                  <Button type="submit" variant="contained" color="primary">Ok</Button>
                </div>
            </form>
            )}}
          </Formik>
        </Modal>
    
    );
  }
}

export default withStyles(useStyles)(ModalWin);