import React, { Component } from 'react'
import {Button, Modal } from 'react-bootstrap'
import axios from 'axios';
import { isTemplateExpression } from 'typescript';


class TheModal extends Component {
	constructor(props) {
		super(props);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
            show: false,
            resultData: []
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

    componentDidMount(){
        axios.get('http://localhost:3000/modalresults')
        .then((response) => {
			console.log(response.data);

			this.setState({
                resultData: response.data.data,

            });
            
        });
        
    }
    
	render() {
		return (
			<>
				<Button variant="primary" onClick={this.handleShow}>
					Launch demo modal
        </Button>
                
				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
				{ this.state.resultData.map(i => 	
                <Modal.Body> {i.trans_Id} {i.Item_Name} {i.Individual_Price}
          
                
                
                 </Modal.Body>   )}
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
            </Button>
						<Button variant="primary" onClick={this.handleClose}>
							Save Changes
            </Button>
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}

export default TheModal