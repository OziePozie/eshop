import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        // Установите пользователя в состоянии приложения
        setUser(userData);
    };

    const logout = () => {
        // Удалите пользователя из состояния приложения
        setUser(null);
    };

    const value = {
        user,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
