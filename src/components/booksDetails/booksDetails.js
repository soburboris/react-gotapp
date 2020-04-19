import React, {Component} from 'react';
import './booksDetails.css';
import GotService from '../Servises/gotService';
import Spinner from '../spinner';


export default class BooksDetails extends Component {

    GotService = new GotService();
    state = {
        item:null
                
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
       
    }

    updateChar () {
        const {charId} =this.props;
        if (!charId) {
            return;
        }
        this.GotService.getBook(charId)
            .then((item) => {
              
                this.setState({
                    item,
                    loading: false,
                    renew: false,
                    error: false
                    
                })
                
            })
            
    }

    render() {
        
        if (!this.state.item) {
            return <Spinner/>
        }
        const {item} = this.state;   
        const { name}  = this.state.item;
        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">{
                    React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child, {item})
                    })
                }
                    
                </ul>
            </div>
        );
    }
}