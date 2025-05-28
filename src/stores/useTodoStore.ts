import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TodoType = {
  id: string;
  text: string;
  completed: boolean;
};
export interface TodoStore {
  todos: TodoType[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
  removeTodo: (id: string) => void;
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],

      addTodo: (text: string) => {
        const newTodo: TodoType = {
          id: crypto.randomUUID(),
          text,
          completed: false,
        };
        set((state) => ({
          todos: [...state.todos, newTodo],
        }));
      },
      toggleTodo: (id: string) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        }));
      },
      editTodo: (id: string, newText: string) => {
        set((state) => ({
          todos: state.todos.map((todo) => {
            return todo.id === id ? { ...todo, text: newText } : todo;
          }),
        }));
      },
      removeTodo: (id: string) => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        }));
      },
    }),
    {
      name: "todo-storage",
    }
  )
);
