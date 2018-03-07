import Product from './app-2';

class ProductList extends React.Component {

  render() {
    return (
      <div className='ui unstackable items'>
        <Product />
      </div>
    );
  }
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);

