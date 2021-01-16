import React, { Component } from 'react';
// import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import GotService from '../Servises/gotService';
import  {Error} from '../app';
import {withRouter} from 'react-router-dom';






class BookPage extends Component {

    GotService = new GotService();

    state ={
  
        error: false
    }

    componentDidCatch () {
        console.log('error!!!');
        this.setState({
            error:true
        })
    }
 


    render(){

        
        if (this.state.error){
            return <Error/>;
       }
   

        return (
            <ItemList 
            onItemSelected={(itemId) => {
                this.props.history.push(itemId)
            }}
            getData={this.GotService.getAllBooks}
            renderItem={({name}) => name}/>
        )
    }

}

export default withRouter(BookPage);
