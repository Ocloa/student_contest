import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    isadmin: boolean;
    user:{
        isadmin: boolean
    } & DefaultSession["user"]
  }

  interface User {
    isadmin: boolean;
  }

  interface DefaultUser {
    isadmin: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    isadmin: boolean;
  }
}
