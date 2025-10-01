const URL_LINK = "https://jsonplaceholder.typicode.com/todos";

async function getTodos() {
    try {
        const res = await axios.get(URL_LINK+"?_limit=5");
        console.log(res.data.map(item => {
            return `ID: ${item.id}; Title: ${item.title}`;
        }));
    } catch(err) {
        console.log(err);
    }
}

getTodos();


async function postTodo() {
    try {
        const res = await axios.post(URL_LINK, { title: "Learn Axios", completed: false, userId: 1 });
        console.log(res.data);
    } catch(err) {
        console.log(err);
    }
}

postTodo();


async function putTodo(){
    try {
        const res = await axios.put(URL_LINK+"/1", {
            "userId": 1,
            "title": "delectus aut autem",
            "completed": true
        });
        console.log(res.data);
    } catch(err) {
        console.log(err);
    }
}

putTodo();


async function deleteTodo(){
    try {
        const res = await axios.delete(URL_LINK+"/1");
        console.log(res.status);
    } catch(err) {
        console.log(err);
    }
}

deleteTodo();