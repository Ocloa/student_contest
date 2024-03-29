import NextAuth from "next-auth/next";
import { CredentialsProvider } from "next-auth/providers/credentials";

const handler = NextAuth(
    {
    providers: [CredentialsProvider({
        credentials: {
            email: {},
            password: {},
        },
        async authorize(credentials, req) {
            const user = {id: "1", name: "John", email: "john@gmail.com"};

            if (user){
                return user;
            } else{
                return null;
            }
        },
    }),
]
}
)

export {handler as GET, handler as POST}