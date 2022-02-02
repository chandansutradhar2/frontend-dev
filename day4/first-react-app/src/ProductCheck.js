import { FormCheck } from "react-bootstrap";

export function ProductCheck(props) {
	function addToCart(ev) {
		//props.productName = props.productName + "-On SALE";
		alert(props.productName + "checked");

		console.log(ev, props.productName);
	}

	return <FormCheck onClick={($event) => addToCart($event)} />;
}
