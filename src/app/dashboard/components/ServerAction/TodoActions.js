"use server"
import prisma from '@/lib/prisma';


export async function getAllTodos() {
  return await prisma.todo.findMany();
}

export async function createTodo(task) {
  return await prisma.todo.create({
    data: {
      task,
    },
  });
}

export async function deleteTodo(id) {
  return await prisma.todo.delete({
    where: {
      id,
    },
  });
}

export async function updateTodo(id, updatedTask) {
  return await prisma.todo.update({
    where: {
      id,
    },
    data: {
      task: updatedTask,
    },
  });
}
