import React, { Component, useState } from 'react';
import {Col, Row, Container, Collapse, Button, CardBody, Card } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import styled from 'styled-components';
import {CharacterPage,HousePage,BookPage,BooksItem} from '../Page';
import GotService from '../Servises/gotService';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './app.css';






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
        selectedItem: null,
        error: false,
        Charvision:false,
        Bookvision:false,
        Housevision:false,
        GOT:true
    }
   
    componentDidCatch () {
        console.log('error!!!');
        this.setState({
            error:true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem:id
        })
       
    }
    onItemVision0 = () => {
        this.setState({
            Charvision:false,
            Bookvision:false,
            Housevision:false,
            GOT:true
        })
       
    }

    onItemVision1 = () => {
        this.setState({
            Charvision:true,
            Bookvision:false,
            Housevision:false,
            GOT:false
        })
       
    }

    onItemVision2 = () => {
        this.setState({
            Charvision:false,
            Bookvision:true,
            Housevision:false,
            GOT:false
        })
       
    }

    onItemVision3 = () => {
        this.setState({
            Charvision:false,
            Bookvision:false,
            Housevision:true,
            GOT:false
        })
       
    }

  

    
    
    render() {
        
        if (this.state.error){
              return <Error/> ;
         }
      
        return (
            <Router>
                    <div className='app'> 
                        <Container >
                            <Header vision0 = {this.onItemVision0}
                                    vision1 = {this.onItemVision1}
                                    vision2 = {this.onItemVision2}
                                    vision3 = {this.onItemVision3}
                                    Charvision={this.state.Charvision}
                                    Bookvision={this.state.Bookvision}
                                    Housevision={this.state.Housevision}
                                    GOT={this.state.GOT}/>
                        </Container>
                        <Container>
                            <Row>
                                <Col lg={{size: 5, offset: 0}}>
                                    <Toggles/>
                                </Col>
                            </Row>
                            <Route path ='/' component = {() => <h1 style= {{ color: '#fff'}}> Hello Boris!</h1>} exact/>
                            <Route path = '/characters' component= {CharacterPage}/>
                            <Route path = '/houses' component= {HousePage}/>
                            <Route path = '/books' exact component= {BookPage}/>
                            <Route path = '/books/:id' render={
                                ({match,location}) => {
                                    const {id} = match.params;
                                    console.log(location);
                                return <BooksItem booksId={id} />
                                
                                    }
                                }/>
                                
                        </Container>
                    </div>
            </Router>
          
        );

    }
    
}



const Toggles = (props) => {
    const [isOpen, setIsOpen] = useState(true);
    
        const toggle = () => {
            setIsOpen(!isOpen);
        
      }
      const fill = isOpen ? null : <RandomChar />  
      
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
