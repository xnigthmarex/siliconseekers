"use server"
import prisma from '@/lib/prisma';


export default async function todoActions() {
  const todos = await prisma.todo.findMany();
  return todos;
}