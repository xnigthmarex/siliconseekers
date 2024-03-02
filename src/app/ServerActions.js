"use server"
import prisma from '@/lib/prisma';

export default async function authenticateUser(email, password) {
    // Find the user by email address
    console.log("email", email)
    const user = await prisma.user.findUnique({
      where: { email },
    });
  
    if (!user) {
      return null;
    }
  
   
  
    // Check that the password is valid
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      return null;
    }
  
    // Return the user
    return user;
  }