import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
class ShoppingItem extends Component {
  render() {
    const {item} = this.props;
    const item_style = {
      backgroundColor:'aliceblue',
      fontsize: 36,
      margin: '25px',
      textAlign: 'center'
    }
    return (
      <p style={item_style}>{item}</p>
    );
  }
}
class App extends Component {
  constructor(p) {
    super(p);
    this.state = {shopping_items: []}
  }
  componentDidMount() {

    setInterval(() => {
      const names = [...this.state.shopping_items];
      const datum = `${Math.random()}`
      names.push(datum.slice(0, 10));
      this.setState({shopping_items:names});
    }, 4 * 1000);
  }
  render() {
    const {bannerHeader} = this.props;
    const cart_items = this.state.shopping_items.map(elem => {
      return <ShoppingItem key={elem} item={elem} />;
    });
    return (
      <section>
        <h3>{bannerHeader} I have {this.state.shopping_items.length} items</h3>
        {cart_items}
      </section>
    )
  }
}
export default App;
