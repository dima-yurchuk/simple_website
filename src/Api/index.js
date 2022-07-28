
export const sendData = (cookies) => {
    fetch("http://127.0.0.1:5000/user/save", {
        method: "POST",
        headers: {'Content-Type': 'application/json', "Access-Control-Allow-Origin": "http://localhost:3000/"},
        body:  JSON.stringify({end_user_id:cookies['end_user_id'], web_page_url:window.location.href})
    }).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data)
    });
}