import React, {Component} from 'react';
import './houseDetails.css';
import GotService from '../Servises/gotService';
import Spinner from '../spinner';



export default class HouseDetails extends Component {

    GotService = new GotService();
    state = {
       char:null
                
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
        this.GotService.getHouse(charId)
            .then((char) => {
              
                this.setState({
                    char,
                    loading: false,
                    renew: false,
                    error: false
                    
                })
                // for (var key in char) {
                    
                //     if (char[key].length === 0){
                //         char[key] ='unknown';
                //     }
                // }
                // this.setState({
                //     char:{name: `${char.name}`,
                //     words: `${char.words}`,
                //     region: `${char.region}`,
                //     titles: `${char.titles}`,
                //     ancestralWeapons: `${char.ancestralWeapons}`},
                //     loading: false,
                //     renew: false,
                //     error: false
                    
                // })
                // console.log(char)
                
            })
            // this.foo.ddd = 3;
            
    }

    render() {
        
        if (!this.state.char) {
            return <Spinner/>
        }

        const { name,words,region,titles,ancestralWeapons}  = this.state.char;
        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Region</span>
                        <span> {region}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Words</span>
                        <span> {words}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Titles</span>
                        <span> {titles}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Ancestral Weapons</span>
                        <span> {ancestralWeapons}</span>
                    </li>
                </ul>
            </div>
        );
    }
}