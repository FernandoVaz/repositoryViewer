import { USER, API_TOKEN, URL} from '../../configFiles/TOKEN';

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

//  https://api.github.com/repos/FernandoVaz/vazkut/commits?author=FernandoVaz
        const commits = await Promise.all(dados.items.map((item) => {
            return fetch(URL + `/repos/${item.full_name}/commits?author=${USER}`, {
                headers: {
                    'Authorization': `token ${API_TOKEN}`,
                    'Content-Type': 'application/json',
                },
            }).then(function (res) {
                return res.json();
            })
        }));

        const dataResponse = {repo: dados, commit: commits};

        response.status(200).json({ dataResponse })

    } else if(request.method === 'POST') {

        response.status(200).json({ name: 'John Doe' })
        return;
    }


    // (async() => {
    //     // Final results 
    //     let results;
    //     try {
    //       // Get all repositories
    //       const repos = await fetch(url).then((res) => res.json());
    //       const responses = await Promise.all(
    //         // Request file named 'build-with.json' from each repository
    //         repos.map((item) => {
    //           return fetch(
    //             `https://raw.githubusercontent.com/${item.full_name}/master/built-with.json`
    //           );
    //         })
    //       );
    //       // Filter out all non-200 http response codes (essentially 404 errors)
    //       const filteredResponses = responses.filter((res) => res.status === 200);
    //       results = Promise.all(
    //         // Get the project name from the URL and skills from the file
    //         filteredResponses.map(async(fr) => {
    //           const project = fr.url.match(/(RodrigoWebDev)\/(\S+)(?=\/master)/)[2];
    //           const skills = await fr.json();
    //           return {
    //             project: project,
    //             skills: skills
    //           };
    //         })
    //       );
    //     } catch (err) {
    //       console.log("Error: ", err);
    //     }
    //     results.then((s) => console.log(s));
    //   })();

    return;
}