class ProductList extends React.Component {
  render() {
    return (
      <div className='ui unstackable items'>
        lista de productos
        <Product />

      </div>
    );
  }
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);

