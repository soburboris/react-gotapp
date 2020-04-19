import React, { Component, useState } from 'react';
import {Col, Row, Container, Collapse, Button, CardBody, Card } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import styled from 'styled-components';
import CharacterPage from '../characterPage';
import GotService from '../Servises/gotService';
import HousePage from '../housePage';
import BookPage from '../bookPage/';





const Toggless = styled.div`      
    `;
    const Collapses = {
      marginLeft: "0px" 
    };
    
  



const Error = () => {
    return(
        <>
            <img src={process.env.PUBLIC_URL + '/img/images.jpg'} alt ='error'
             style={{width: '25%', display:'inline-block', marginLeft: '450px' }}></img>
            
        </>

        
    );
}

export {
    Error
}

export default class App extends Component{
     
    GotService = new GotService();
    state ={
        selectedChar: null,
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

  

    
    
    render() {
        
        if (this.state.error){
              return <Error/> ;
         }
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            <Toggles/>
                        </Col>
                    </Row>
                    <CharacterPage />
                    <BookPage/>
                    <HousePage/>
                        
                </Container>
            </>
        );

    }
    
}



const Toggles = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    
        const toggle = () => {
            setIsOpen(!isOpen);
        
      }
      const fill = isOpen ? null : <RandomChar/>  
      
      return (
        <Toggless style={{marginBottom: '15px' }}>
           <Collapse isOpen={!isOpen} style={Collapses} >
            <Card>
              <CardBody >
                {fill}
              </CardBody>
            </Card>
          </Collapse>
          <Button color="primary" onClick={toggle} style={{marginBottom: '15px', marginTop:'15px' }}>Toggle</Button>
        </Toggless>
      );

}
