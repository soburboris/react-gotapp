import React, { Component } from 'react';

import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';

import GotService from '../Servises/gotService';
import  {Error} from '../app';
import RowBlock from '../rowBlock';


export default class CharacterPage extends Component {

    GotService = new GotService();
    

    state ={
        selectedChar:111,
        error: false,
        
    }

    componentDidCatch () {
        console.log('error!!!');
        this.setState({
            error:true
        })
    }
    onItemSelected = (id) => {
        this.setState({
            selectedChar:id,
            
        })
       
    }

    renders = ({name,gender}) => 
        `${name} ( ${gender})`;
    
    


    render(){
                
        if (this.state.error){
            return <Error/>;
       }
       

        const itemList = (
            <ItemList 
                            onItemSelected={this.onItemSelected}
                            getData={this.GotService.getAllCharacters}
                            renderItem={this.renders}
                            />
        )

        const charDetails = (
            <ItemDetails  itemId={this.state.selectedChar}
             itemOut= {this.GotService.getCharacter}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
           
        )

        return (
            <RowBlock left={itemList} right={charDetails}/>
        )
    }

}

