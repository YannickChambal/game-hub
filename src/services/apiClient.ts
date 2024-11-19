import axios from "axios";

export default axios.create( {
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '67c898def0a945568029b852e9d45dfa'
    }
})