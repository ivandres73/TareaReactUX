class Product extends React.Component {
	render() {
		return (
			<div className='item'>
				<div className='image'>
					<img src={this.props.productImageUrl} />
				</div>
				<div className='middle aligned content'>
					<div className='header'>
						<a>
							{this.props.votes}
						</a>
					</div>
					<div className='description'>
						<a href={this.props.url}>
							{this.props.title}
						</a>
						<p>
							{this.props.description}
						</p>
					</div>
					<div className='extra'>
						<span>Submitted by:</span>
						<img
							className='ui avatar image'
							src={this.props.submitterAvatarUrl}
						/>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<Product />,
	document.getElementById('content')
);