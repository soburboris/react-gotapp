import React, { Component } from 'react';
// import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
// import styled from 'styled-components';
import GotService from '../Servises/gotService';
import RowBlock from '../rowBlock';
import  {Error} from '../app';
import ItemDetails, {Field} from '../itemDetails';





export default class HousePage extends Component {

    GotService = new GotService();

    state ={
        selectedHouse: 10,
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
            selectedHouse:id
        })
       
    }


    render(){

        
        if (this.state.error){
            return <Error/>;
       }
       const itemList = (
        <ItemList 
                        onItemSelected={this.onItemSelected}
                        getData={this.GotService.getAllHouses}
                        renderItem={({name}) => name}/>
    )

    const houseDetails = (
        <ItemDetails  itemId={this.state.selectedHouse}
        itemOut= {this.GotService.getHouse}>
            <Field field='region' label='Region'/>
            <Field field='words' label='Words'/>
            <Field field='titles' label='Titles'/>
            <Field field='coatOfArms' label='Coat Of Arms'/>
        </ItemDetails>        
    )

    return (
        <RowBlock left={itemList} right={houseDetails}/>
    )
    }

}

