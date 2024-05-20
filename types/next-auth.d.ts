import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    isadmin: boolean;
    user:{
        id: string;
        isadmin: boolean
    } & DefaultSession["user"]
  }

  interface User {
    id: string;
    isadmin: boolean;
  }

  interface DefaultUser {
    id: string;
    isadmin: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    isadmin: boolean;
  }
}
