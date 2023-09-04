import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { supabase } from "../../../../supabase";


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      credentials: 'Credentials',
       async authorize(credentials, req) {
        
        let { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', credentials.email)

          if (data) {
               return data
          }
          return null //error 
       }
    })
   ], callbacks:{
    async jwt({token, user}){
      return {...token, ...user}
    },
    async session({session, token}){
      session.user = token;
      return session
    },
  },
  });
  
  export { handler as GET, handler as POST };