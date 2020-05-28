import React, {Component} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import {connect} from 'react-redux';
import {addItem} from '../actions/ItemActions.js';

class ItemModal extends Component{
    state = {
        modal: false,
        name: ''
    }

    toggle = () =>{
        this.setState({
            modal: !this.state.modal
        });
    } 

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = (e) => {
        //prevent from running Submit default function
        e.preventDefault();

        const newItem = { 
            name: this.state.name
        }
        //Add item via addItem action
        this.props.addItem(newItem);

        //Close Modal after adding item
        this.toggle();
    };
    
    render(){
        return(
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle }>
                    Add Item
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}>
                    <ModalHeader
                        toggle={this.toggle}>
                        Shopping List
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">
                                    What else do I need?
                                </Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="i.e. Tortillas, Salsa, Guacamole"
                                    onChange={this.onChange}/>
                                <Button
                                    color="primary"
                                    style={{marginTop: '2rem'}}
                                    block>
                                    Add Item
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    item: state.item
});

export default connect (mapStateToProps, {addItem}) (ItemModal);
