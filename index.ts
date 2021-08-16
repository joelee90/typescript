import axios from "axios";

let url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response => {
    console.log('response.data', response.data);
    const todo = response.data as Todo;

    interface Todo {
        id: number,
        title: string,
        completed: boolean
    };

    // const id = todo.id;
    // const title = todo.title;
    // const completed = todo.completed;

    const {id, title, completed} = todo;

    logTodo(id, title, completed)
});

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
        ${id},
        ${title},
        ${completed}
    `);
}