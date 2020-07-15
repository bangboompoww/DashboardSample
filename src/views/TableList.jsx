/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import modal from './Modal'
class Table extends Component {
	state = {
		theData: [],

		columns: [
			{
				
				dataField: 'id',
				text: 'id',
				sort: true
			},

			{
				dataField: 'quantity',
				text: 'quantity',
				sort: true,
				filter: textFilter()

			},
			{
				dataField: 'itemDesc',
				text: 'itemDesc',
				sort: true,
				filter: textFilter()

			},

			{
				dataField: 'SalesTotal',
				text: 'SalesTotal',
				sort: true,

				filter: textFilter()
			},

			{
				dataField: 'Department',
				text: 'Department',
				sort: true,
				filter: textFilter()

			}
		]
	};

	componentDidMount() {
		axios.get('http://localhost:3000/transaction')
			.then((response) => {
			console.log(response.data);

			this.setState({
				theData: response.data.data
			});
		});
	}

	render() {
		return (
			<div className="container">
				<div class="row" className="hdr" />

				<div style={{ marginTop: 20 }}>
					<BootstrapTable
						striped
						hover
						keyField="id"
						data={this.state.theData}
						columns={this.state.columns}
						filter={filterFactory()}
						pagination={paginationFactory()}
					/>
					<modal />
				</div>
			</div>
		);
	}
}

export default Table;

