

const addToDb = (id, name) => {

    let todoCart = addCart()
    console.log(todoCart)
    // if(id in todoCart){

    //     todoCart.todoName=name;
    // }
    // else{
    //     todoCart.todoName=name;
    // }

    for (let t of todoCart) {
        if (id in t) {
            t.todoName = name;
        }
        else {
            todoCart.push({ id, todoName: name })
        }
    }
    localStorage.setItem('todo-carts', JSON.stringify(todoCart));
}

const addCart = () => {
    let todoCart = [];
    //get the todo cart from local storage
    const storedCart = localStorage.getItem('todo-carts');
    if (storedCart) {
        todoCart = JSON.parse(storedCart);
    }
    return todoCart
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('todo-carts');
    if (storedCart) {
        const todoCart = JSON.parse(storedCart);
        if (id in todoCart) {
            delete todoCart[id];
            localStorage.setItem('todo-carts', JSON.stringify(todoCart));
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('todo-carts');
}

export {
    addToDb,
    addCart,
    removeFromDb,
    deleteShoppingCart
}