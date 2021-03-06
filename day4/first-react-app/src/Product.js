import { FormCheck } from "react-bootstrap";
import { ProductCheck } from "./ProductCheck";

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
					{props.products.map((product) => {
						return (
							<tr>
								<td>{product.name}</td>
								<td>{product.price}</td>
								<td>{product.qty}</td>
								<ProductCheck productName={product.name} />
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
