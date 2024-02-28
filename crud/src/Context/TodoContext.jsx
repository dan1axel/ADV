import { useState, createContext, useContext } from "react";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {

    const [todos, setTodos] = useState([]);

    return (
        <TodoContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodoContext.Provider>
    )
}

const useTodoList = () => useContext(TodoContext);

export { TodoContextProvider, useTodoList }