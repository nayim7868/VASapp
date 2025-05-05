import React, { createContext, useState, useMemo } from 'react';

/**
 * AuthContext holds   { user, signIn, signUp, signOut }
 */
export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);     // null ➜ logged-out

  const auth = useMemo(
    () => ({
      user,
      /** fake network delay then “log in” */
      signIn: async (email, password) => {
        // TODO add real API call here
        await new Promise(r => setTimeout(r, 400));
        setUser({ email });                   // minimal user object
      },
      signUp: async (email, password) => {
        await new Promise(r => setTimeout(r, 400));
        setUser({ email });
      },
      signOut: () => setUser(null),
    }),
    [user]
  );

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
