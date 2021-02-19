import axios from 'axios';
import { proxy} from '../config';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/' //crossorigin.me proxy
    try {
      const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`); // api url
      this.result = res.data.recipes
      //console.log(this.result);
    } catch(error) {
      alert(error)
    }
  }
}