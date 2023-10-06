import axios, * as others from 'axios';

class AxoisService{

    static getAllUsers(){
        let serverUrl = "https://jsonplaceholder.typicode.com/users";
        return axios.get(serverUrl);
    }
}

export default AxoisService;