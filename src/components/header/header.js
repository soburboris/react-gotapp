import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const HeaderTitle = styled.h3`
    font-size: 24px;
    color: #fff;
    margin: 0;
`;

const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
   
    list-style-type: none;
    li {
        margin-right: 20px;
        font-size: 18px;
       
    }
`;

// const A = styled.a`
     
// `;

const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };


export default class Header  extends Component {
  

    render() {

      
        const {Charvision,Bookvision,Housevision,GOT} = this.props;
        const tur0 = GOT ? mystyle : null
        const tur1 = Charvision ? mystyle : null
        const tur2 = Bookvision ? mystyle : null
        const tur3 = Housevision ? mystyle : null
        

       

        return (
            <HeaderBlock>
                <HeaderTitle>
                    <Link to ='/'
                    style={tur0}                             
                    onClick= { () => this.props.vision0() }>
                    Game of Thrones DB
                    </Link>
                </HeaderTitle>
                <HeaderLinks  >
                    <li >
                        <Link to ='/characters/'                
                            style={tur1}                             
                            onClick= { () => this.props.vision1() }
                        >Characters
                        </Link>
                    </li>
                    <li>
                        <Link to ='/houses/' style={tur3}                         
                        onClick= { () => this.props.vision3()}
                        >Houses</Link>
                    </li>
                    <li>
                        <Link to ='/books/' style={tur2}                         
                        onClick= { () => this.props.vision2()}
                        >Books</Link>   
                    </li>
                        
                </HeaderLinks>
            </HeaderBlock>
        );
    }
    
};
