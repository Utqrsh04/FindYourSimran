export const getNews = () =>{
    return fetch(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0004179c4e1d46a88ba2cd52f2bf9efa&pageSize=5",
        {
            method:"GET",
        }
    ).then(res => res.json())
    .then( (response) =>  response)
    .catch(error => console.log(error))
}