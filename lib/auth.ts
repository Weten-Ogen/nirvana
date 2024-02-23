import { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

export  const authOptions:NextAuthOptions ={
    providers: [
        GoogleProvider({
            clientId: process.env.client_id!,
            clientSecret: process.env.client_secret!,
        })
    ]
}