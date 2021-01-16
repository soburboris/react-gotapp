import React, {Component} from 'react';
import './itemDetails.css';

import Spinner from '../spinner';


const Field = ({item,field,label}) => {
   
    return (
        <li className="list-group-item d-flex justify-content-between">
             <span className="term">{label}</span>
             <span>{item[field]}</span>
             
        </li>
    )
}
export {Field}

export default class ItemDetails extends Component {

    
    state = {
       item:null
                
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
       
    }

    updateItem () {
        const {itemId,itemOut} =this.props;
        if (!itemId) {
            return;
        }
            itemOut(itemId)
                .then((item) => {
                
                    this.setState({
                        item,
                        loading: false,
                        renew: false,
                        error: false
                        
                })            
                })
      
        
            // this.foo.ddd = 3;
    }

    render() {
        
        if (!this.state.item) {
            return <Spinner/>
        }
        const {item} = this.state;
        const { name}  = item;
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