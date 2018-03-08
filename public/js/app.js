import Product from './app-2';

class ProductList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			products: [],
		};
		this.handleUpVote = this.handleUpVote.bind(this);
	}

	componentDidMount() {
		this.setState({ products: Seed.products});
	}

	handleProductUpVote(productId) {
		const nextProducts = this.state.products.map((product) => {
			if (product.id === productId) {
				return Object.assign({}, product, {
					votes: product.votes + 1,
				});
			} else {
				return product;
			}
		});
		this.setState({
			products: nextProducts,
		});
	}

  render() {
  	return (
  		<div className='ui unstackable items'>

  			const products = this.state.products.sort((a, b) => (
  				b.votes - a.votes
  			))
		  	const product = this.state.products.map(() => (
		        <Product
		        	key={'product-' + product.id}
		        	id={product.id}
		        	title={product.title}
		        	description={product.description}
		        	url={product.url}
		        	votes={product.votes}
		        	submitterAvatarUrl={product.submitterAvatarUrl}
		        	productImageUrl={product.productImageUrl}
		        	onVote={this.handleProductUpVote}
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

