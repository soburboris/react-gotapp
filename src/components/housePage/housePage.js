import React, { Component } from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
// import styled from 'styled-components';
import GotService from '../Servises/gotService';
import HouseDetails from '../houseDetails';
import  {Error} from '../app'





export default class HousePage extends Component {

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
        return (
            <Row>
                <Col md='5'>
                    <ItemList 
                            onItemSelected={this.onItemSelected}
                            getData={this.GotService.getAllHouses}
                            renderItem={({name}) => name}/>
                </Col>
                <Col md='6'>
                    <HouseDetails charId={this.state.selectedChar} />
                </Col>
            </Row>
        )
    }

}

