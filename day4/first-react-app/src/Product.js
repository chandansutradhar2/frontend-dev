export function Product() {
	let product = {
		name: "IPhoneX",
		price: 768889,
		qty: 10,
	};
	return (
		<div>
			<table>
				<tr>
					<th>Product Name</th>
					<th>Product Price</th>
					<th>Product Qty</th>
				</tr>
				<tr>
					<td>{product.name}</td>
					<td>{product.price}</td>
					<td>{product.qty}</td>
				</tr>
			</table>
		</div>
	);
}
