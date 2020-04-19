

import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import styled from 'styled-components';
import RandomChar from '../randomChar';


const Toggless = styled.div`
   
    
    `;
    const Collapses = {
      marginLeft: "0px" 

    };
     
     
     
    
    // const {updareChar} = this.props;

const Toggles = (props) => {

  
  
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
        
        if (!isOpen) {
          setIsOpen(!isOpen);
         
        }else {
          window.location.reload();
          
      }
       
        
  
  }

  return (
    <Toggless>
       <Collapse isOpen={!isOpen} style={Collapses} >
        <Card>
          <CardBody>
            <RandomChar
                        
            />
          </CardBody>
        </Card>
      </Collapse>
      <Button color="primary" onClick={toggle} style={{marginBottom: '15px', marginTop:'15px' }}>Toggle</Button>
    </Toggless>
  );
}

export default Toggles;


