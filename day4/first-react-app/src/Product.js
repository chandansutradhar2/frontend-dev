export function Product(props) {
	console.log(props);
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Product Name</th>
						<th>Product Price</th>
						<th>Product Qty</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{props.product.name}</td>
						<td>{props.product.price}</td>
						<td>{props.product.qty}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
