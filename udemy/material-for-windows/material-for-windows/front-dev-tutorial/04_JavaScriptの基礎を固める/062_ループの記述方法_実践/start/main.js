const todos = [
    {
        id: 1,
        title: 'Go to school',
        completed: true
    },

    {
        id: 2,
        title: 'Go to museum',
        completed: true
    },

    {
        id: 3,
        title: 'Go shopping',
        completed: false
    }
]

for(let i in todos){
    let todo = todos[i];
    if(todo.completed === true){
        comsole.log(i, todo.title);
    }
    console.log(todos[i].title);
}