import React, { Component } from 'react';
// import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
// import styled from 'styled-components';
import GotService from '../Servises/gotService';
import BooksDetails from '../booksDetails';
import  {Error} from '../app';
import RowBlock from '../rowBlock';





export default class BookPage extends Component {

    GotService = new GotService();

    state ={
        selectedChar: 10,
        error: false
    }

    componentDidCatch () {
        console.log('error!!!');
        this.setState({
            error:true
        })
    }
    onItemSelected = (id) => {
        this.setState({
            selectedChar:id
        })
       
    }


    render(){

        
        if (this.state.error){
            return <Error/>;
       }
        const itemList = (
            <ItemList 
                            onItemSelected={this.onItemSelected}
                            getData={this.GotService.getAllBooks}
                            renderItem={({name}) => name}/>
        )

        const bookDetails = (
            <BooksDetails  charId={this.state.selectedChar}>
                 <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='died' label='Died'/>
                <Field field='released' label='Released'/>
            </BooksDetails>        
        )

        return (
            <RowBlock left={itemList} right={bookDetails}/>
        )
    }

}

