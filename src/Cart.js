import React from 'react'

export default () => (
	<div className="cart">
		<div className="modal">
			<div className="modal-content">
				<h3 className="header">Your cart (3)</h3>

				<table className="striped">
					<thead>
					<tr>
						<th colSpan={2}>Product</th>
						<th>Unit Price</th>
						<th>Quantity</th>
						<th>Total Price</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>
							<img
								src="http://placekitten.com/200/200?image=5"
								alt=""
								className="circle"
								width="50"
								height="50"
							/>
						</td>
						<td>
							<strong>Fifth Kitten</strong>
						</td>
						<td>200 €</td>
						<td>
							<input
								type="number"
								min="0"
								value="2"
								onChange={() => alert('TODO')}
							/>
							<a className="btn-flat" href="#!" onClick={() => alert('TODO')}>
								<i className="material-icons">remove_shopping_cart</i>
							</a>
						</td>
						<td>400 €</td>
					</tr>
					<tr>
						<td>
							<img
								src="http://placekitten.com/200/200?image=2"
								alt=""
								className="circle"
								width="50"
								height="50"
							/>
						</td>
						<td>
							<strong>Second Kitten</strong>
						</td>
						<td>50 €</td>
						<td>
							<input
								type="number"
								min="0"
								value="1"
								onChange={() => alert('TODO')}
							/>
							<a className="btn-flat" href="#!" onClick={() => alert('TODO')}>
								<i className="material-icons">remove_shopping_cart</i>
							</a>
						</td>
						<td>50 €</td>
					</tr>
					<tr>
						<td colSpan={3}>&nbsp;</td>
						<td>3</td>
						<td>
							<strong>450 €</strong>
						</td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div
			className="modal-overlay"
			onClick={() => document.querySelector('.cart').classList.toggle('open')}
		/>
	</div>
)