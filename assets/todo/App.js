/**
 * Created by juraj on 14.07.2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';

// import '../../node_modules/bootstrap/dist/js/bootstrap'
// import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import 'normalize.css/normalize.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import {
    Grid, Row, Col,
    ListGroup, ListGroupItem,
    Form, FormGroup, ControlLabel, FormControl,
    Glyphicon, Button
} from 'react-bootstrap';

export default class App extends React.Component {
    constructor() {
        super(arguments);

        this.state = {
            todos: [
                {
                    title: 'toto je todo',
                    category: 'waka'
                }
            ],
            categories: []
        }

        this.renderTodoFilter = this.renderTodoFilter.bind(this);
        this.renderTodoList = this.renderTodoList.bind(this);
        this.renderTodoAddForm = this.renderTodoAddForm.bind(this);
        this.renderCategoryAddForm = this.renderCategoryAddForm.bind(this);
        this.renderCategoryList = this.renderCategoryList.bind(this);
    }

    renderTodoFilter() {
        return (
            <FormControl type="text" placeholder="Filter"/>
        )
    }

    renderTodoAddForm() {

        // const cats = this.state.categories.map((category) => {
        //     return (<option value={category.id}>{category.title}</option>)
        // })

        const cats = ''

        return (
            <Form horizontal>
                <FormGroup controlId="formInlineName">
                    <Col componentClass={ControlLabel} sm={4}>Todo</Col>
                    <Col sm={8}><FormControl type="text" placeholder="New todo"/></Col>
                </FormGroup>

                <FormGroup controlId="formInlineCat">
                    <Col componentClass={ControlLabel} sm={4}>Kategoria</Col>
                    <Col sm={8}>
                        <FormControl componentClass="select" placeholder="select">
                            {cats}
                        </FormControl>
                    </Col>
                </FormGroup>


            </Form>
        )
    }

    renderTodoList() {
        const todos = this.state.todos.map((todo)=> {
            return (
                <ListGroupItem>{todo.title}</ListGroupItem>
            )
        });

        return (
            <ListGroup>
                {todos}
            </ListGroup>
        )
    }

    renderCategoryAddForm() {

        const cats = this.state.categories.map((category) => {
            return (<option value={category.id}>{category.title}</option>)
        })

        const addCategory = (name) => {
            if (this.state.categories.indexOf(name) == -1) {
                let cats = this.state.categories;
                cats.push(name);
                this.setState({
                    categories: cats
                });
            }
        }

        return (
            <Form onSubmit={(e) => {
                e.preventDefault();
                addCategory(ReactDOM.findDOMNode(this.refs.catInput).value);
            }}>
                <FormGroup controlId="formInlineName">
                    <Col componentClass={ControlLabel} sm={4}>New</Col>
                    <Col sm={8}><FormControl type="text" placeholder="New cat" ref="catInput"/></Col>
                </FormGroup>
            </Form>
        )
    }

    renderCategoryList() {
        const cats = this.state.categories.map((c)=> (
            <ListGroupItem>
                {c}
                <Button>X</Button>
            </ListGroupItem>
        ));

        return (
            <ListGroup>
                {cats}
            </ListGroup>
        )
    }

    render() {
        return (
            <Grid style={{maxWidth: '900px'}}>
                <Row>
                    <Col md={6}>
                        {this.renderTodoAddForm()}
                        {this.renderTodoFilter()}
                        {this.renderTodoList()}
                    </Col>
                    <Col md={6}>
                        <Row>
                            {this.renderCategoryAddForm()}
                        </Row>
                        <Row>
                            {this.renderCategoryList()}
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }
}