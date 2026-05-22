import { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",

      credentials: {
        email: {},

        password: {},
      },

      async authorize(credentials) {
        if (
          credentials?.email ===
            "admin@test.com" &&
          credentials?.password ===
            "123456"
        ) {
          return {
            id: "1",
            name: "John Doe",
            email:
              "admin@test.com",
          };
        }

        return null;
      },
    }),
  ],

  session: {
    strategy: "jwt",

    maxAge: 60 * 60,
  },

  jwt: {
    maxAge: 60 * 60,
  },

  pages: {
    signIn: "/login",
  },

  secret:
    process.env.NEXTAUTH_SECRET,
};