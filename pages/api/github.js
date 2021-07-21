import { USER, API_TOKEN, URL} from '../../configFiles/TOKEN';
import axios from 'axios';

export default async function recebedorDeRequests(request, response) {

    //console.log("/users/" + USER +"/repos?access_token="+API_TOKEN);

    if(request.method === 'GET') {
 
        const dados = await fetch(URL + `/search/repositories?q=user:${USER}`, {
                headers: {
                    'Authorization': `token ${API_TOKEN}`,
                    'Content-Type': 'application/json',
                },
            }).then(function (res) {
                return res.json();
            })
            .then(function(resCompleta) {
                return resCompleta;
            })
            .catch((e) => {
                return e.json();
            })

        response.status(200).json({ dados })

    } else if(request.method === 'POST') {

        response.status(200).json({ name: 'John Doe' })
        return;
    }


    return;
}