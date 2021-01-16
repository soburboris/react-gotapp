import React, {Component} from 'react';
import styled from 'styled-components';
import GotService from '../Servises/gotService';
import Spinner from '../spinner';
import PropTypes from 'prop-types';

const Img = styled.img`
width: 50%;
margin-left:100px;
`;


const RandomBlock = styled.div`
background-color: #fff;
padding: 25px 25px 15px 25px;
margin-bottom: 40px;
`;

const RandomBlockH4 = styled.h4`
margin-bottom: 20px;
text-align: center;
`;
const RandomBlockH3 = styled.h3`
text-align: center;
`;

const Term = styled.span`
font-weight: bold;
`;



export default class RandomChar extends Component {
   
    static defaultProps = {
        interval:3333
    }
    
    static propTypes = {
        interval: PropTypes.number
    }
    GotService = new GotService();
    state = {
       char:{},
       loading:true,
       error:null,
      
    }


    componentDidMount() {
        this.timerId = setInterval(this.updareChar,this.props.interval);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
        // console.log('Unmounting')
    }



    onCharLoaded = (char) => {

        this.setState({
            char,
            loading: false,
            renew: false,
            error: false
            
        })
        
    }

    onError = (error) => {
              
        this.setState({
                
            char:{},
            loading: false,
            error: true
           
            
        })
        
    }

    updareChar =()=> {
      
        const id = Math.floor(Math.random()*100+315);
        
        this.GotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    
        
    }

       
    render() {
       
        const { char, loading, error } = this.state;
        const spinner = loading ? <Spinner/> : null;
        const viewer = !(loading || error) ? <View char={char}/> : null;
        const viewError = error ? <ErrorS/> : null;
        

        return (
            <RandomBlock>
                {viewError}
                {spinner}
                {viewer}
                               
            </RandomBlock>
        );
    }
    
}



const ErrorS = () => {
    return (
        <>  
            <RandomBlockH3>
                        
                        No connect to server!
            </RandomBlockH3>
            <Img src={process.env.PUBLIC_URL + '/img/images.jpg'} alt ='error'></Img>
        </>
    )

}

const View =({char}) => {
    const { name,born,gender,died,culture}  = char;
    return (
            <>
                <RandomBlockH4>
                        
                        Random Character: <br/>
                        {name}

                    </RandomBlockH4>
                    <ul className="list-group list-group-flush" >
                        <li className="list-group-item d-flex justify-content-between">
                            <Term className="term">Gender </Term>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <Term className="term">Born </Term>
                            <span>{born}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <Term className="term">Died </Term>
                            <span>{died}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <Term className="term">Culture </Term>
                            <span>{culture}</span>
                        </li>
                    </ul>

            </>

                
    ) 
}

