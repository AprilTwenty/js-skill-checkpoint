// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
async function getUserData(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    return data;
}
async function getData(){
    try{
    let userData = await getUserData();
    let newUser = userData.map((userData) => userData.name);
    console.log(newUser);
    }catch(error) {
        console.log(error);
    }
}
getData();

/*
getUserData().then((data) => {
    let newUser = data.map((data) => data.name);
    console.log(newUser);
}).catch((error) => console.log(error));
*/
