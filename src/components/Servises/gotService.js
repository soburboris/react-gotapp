export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async(url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }
        return await res.json();
    }

     getAllBooks = async() => {
        const res = await this.getResource(`/books/`);
        return res.map(this._transformBook);
    }
    
    getBook = async(id) => {
        const book = await this.getResource(`/books/${id}/`);
        return this._transformBook(book);
    }
    
    getAllCharacters = async() => {
        const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharacter);
    }
    
    getCharacter = async(id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }
    
    getAllHouses = async() => {
        const res = await this.getResource(`/houses/`);
        return res.map(this._transformHouse);
    }
    
    getHouse = async(id) => {
        const house = await this.getResource(`/houses/${id}/`);
        return this._transformHouse(house);
    }

    isSet(data) {
        if (data) {
            return data
        } else {
            return 'unknown';
        }
    }    
    
    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];

    }
    
    _transformCharacter = (item) => {
        return {
            id: this._extractId(item),
            name: this.isSet(item.name),
            gender: this.isSet(item.gender),
            born: this.isSet(item.born),
            died: this.isSet(item.died), 
            culture: this.isSet(item.culture)
        };
        
    }

    _transformHouse = (item) => {
        return {
            id: this._extractId(item),
            name: this.isSet(item.name),
            region: this.isSet(item.region),
            words: this.isSet(item.words),
            titles: this.isSet(item.titles),
            coatOfArms: this.isSet(item.coatOfArms)
        };
    }
    
    _transformBook = (item) => {
        return {
            id: this._extractId(item),
            name: this.isSet(item.name),
            numberOfPages: this.isSet(item.numberOfPages),
            publisher: this.isSet(item.publisher),
            released: this.isSet(item.released)
        };
    }
}
