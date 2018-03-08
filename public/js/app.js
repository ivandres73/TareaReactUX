import Product from './app-2';

class ProductList extends React.Component {

  render() {
  	return (
  		<div className='ui unstackable items'>

  			const products = Seed.products.sort((a, b) => (
  				b.votes - a.votes
  			))
		  	const product = Seed.products.map(() => (
		        <Product
		        	key={'product-' + product.id}
		        	id={product.id}
		        	title={product.title}
		        	description={product.description}
		        	url={product.url}
		        	votes={product.votes}
		        	submitterAvatarUrl={product.submitterAvatarUrl}
		        	productImageUrl={product.productImageUrl}
		        />
		    	));
    	</div>
    )
  }
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);

