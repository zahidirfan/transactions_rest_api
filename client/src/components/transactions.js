import React from 'react';

export class Transactions extends React.Component {
	state = {transactions: []};
	componentDidMount(){
		fetch('http://localhost:3000/transactions')
			.then(res => res.json())
			.then(transactions=> this.setState( {transactions}));
	}

	render (){
		return  (
			<div>
				<h1>Transactions</h1>
					<table>
			        	{
			        		this.state.transactions.map(transaction =>
			        		<div> <td> 
			        			{transaction.Category}
			        		</td>
			        		<td> 
			        			{transaction.amount}
			        		</td>
			        		<td> 
			        			{transaction.status}
			        		</td>
			        		<td> 
			        			{transaction.Created_at}
			        		</td>
			        		</div>
			        		)};
			        	
			        </table>
        	</div>
        )
	}
}


