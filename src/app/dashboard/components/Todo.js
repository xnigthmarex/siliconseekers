"use client"
import React, { useRef, useEffect, useState } from "react";
import { getAllTodos, createTodo, deleteTodo, updateTodo } from "./ServerAction/TodoActions";

export default function Todo() {
    const inputRef = useRef(null);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const todosData = await getAllTodos();
                setTodos(todosData);
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        };

        fetchTodos();
    }, []);

    const Addtest = async () => {
        const task = inputRef.current.value;
        try {
            const newTodo = await addTodo(task);
            setTodos([...todos, newTodo]);
            inputRef.current.value = ""; // Clear input field
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    };

    // Add functions for deleteTodo and updateTodo if needed

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl glow-text mt-2 font-bold">Todo</h1>
            <div className="mt-4 flex items-center">
                <input 
                    type="text" 
                    className="border-4 glow border-red-900 p-1.5 rounded-lg w-full bg-inherit text-white flash-red" 
                    placeholder="ADD TASK" 
                    ref={inputRef}  
                />
                <button 
                    className="ml-2 border-4 border-purple-500 bg-inherit glow-text p-2 px-4 rounded-lg flash-green" 
                    onClick={Addtest}
                >
                    ADD
                </button>
            </div>
            <div className="mt-4 w-full">
                
                <ul className="divide-y divide-gray-300">
                    {todos.map((todo) => (
                        <li key={todo.id} className="py-2">{todo.task}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
