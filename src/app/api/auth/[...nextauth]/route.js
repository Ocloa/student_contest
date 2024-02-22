import NextAuth from "next-auth"
import { CredentialsProvider } from "next-auth/providers"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: "creds",
            credentials:{
                email:{label:"Email", placeholder: "Enter your email"},
                password:{label:"Password", placeholder: "Passwords"},
            },
            async authorize(credentials, req){
                
            }
        })
    ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }