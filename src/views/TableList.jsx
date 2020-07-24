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

import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Modal, Button } from 'react-bootstrap';

const Table = () => {
	const [ transactions, setTransactions ] = useState([]);
	const [ modalInfo, setModalInfo ] = useState([]);
	const [ showModal, setShowModal ] = useState(false);
	const [ show, setShow ] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const getTransactionApi = async () => {
		try {
			const data = await axios.get('http://localhost:3000/transaction');
			setTransactions(data.data.data);
			console.log(data.data.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getTransactionApi();
	}, []);

	const rowEvents = {
		onClick: (e, row) => {
			console.log(row);
			setModalInfo(row);
			Toggle();
		}
	};

	const Toggle = () => {
		setShowModal(handleShow);
	};

	const TheModal = () => {
		return (
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		);
	};

	const columns = [
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
	];

	return (
		<div className="container">
			<div class="row" className="hdr" />
			<div style={{ marginTop: 20 }}>
				<BootstrapTable
					keyField="id"
					data={transactions}
					rowEvents={rowEvents}
					columns={columns}
					filter={filterFactory()}
					pagination={paginationFactory()}
				/>
				
			</div>
			{show ? <TheModal /> : null}
		</div>
	);
};

// class Table extends Component {
// 	constructor(props){
// 		super(props)

// 	this.state = {
// 		isShowing: false,
// 		theData: [],
// 		resultData: undefined,

// 		columns: [
// 			{
// 				dataField: 'id',
// 				text: 'id',
// 				sort: true
// 			},

// 			{
// 				dataField: 'quantity',
// 				text: 'quantity',
// 				sort: true,
// 				filter: textFilter()
// 			},
// 			{
// 				dataField: 'itemDesc',
// 				text: 'itemDesc',
// 				sort: true,
// 				filter: textFilter()
// 			},

// 			{
// 				dataField: 'SalesTotal',
// 				text: 'SalesTotal',
// 				sort: true,

// 				filter: textFilter()
// 			},

// 			{
// 				dataField: 'Department',
// 				text: 'Department',
// 				sort: true,
// 				filter: textFilter()
// 			}
// 		]
// 	};
// }

// 	async componentDidMount() {
// 		const [ firstResponse ] = await axios.all([ axios.get(`http://localhost:3000/transaction`) ]);

// 		this.setState({
// 			theData: firstResponse.data.data
// 		});
// 		console.log(firstResponse);
// 	}

// 	render() {

// 		const rowEvents = {
// 			onClick: (e, row) => {
// 				console.log(this.openModalHandler);
// 	}
// 		};
// 		return (
// 				<div>
// 			<Modal
//           isOpen={openModalHandler}
//           onAfterOpen={afterOpenModal}
//           onRequestClose={closeModal}
//           style={customStyles}
//           contentLabel="Example Modal"
//         ></Modal>

// 			<div className="container">
// 				<div class="row" className="hdr" />
// 				<div style={{ marginTop: 20 }}>
// 					<BootstrapTable
// 						striped
// 						hover
// 						keyField="id"
// 						data={this.state.theData}
// 						rowEvents={rowEvents}
// 						columns={this.state.columns}
// 						filter={filterFactory()}
// 						pagination={paginationFactory()}
// 						handleShowRow={this.handleShowRow}
// 					/>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

export default Table;
