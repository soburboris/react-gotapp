import React, { Component } from 'react';
import ItemDetails, {Field} from '../itemDetails';
import GotService from '../Servises/gotService';


export default class BooksItem extends Component {
    GotService = new GotService();

  

    render () {
        
        return (
            <ItemDetails  itemId={this.props.booksId}
            itemOut= {this.GotService.getBook}>
                 <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='died' label='Died'/>
                <Field field='released' label='Released'/>
            </ItemDetails> 
        )
    }
}