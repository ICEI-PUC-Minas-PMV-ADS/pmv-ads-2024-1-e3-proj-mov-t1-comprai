import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
    const [signed, setSigned] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <UserContext.Provider
            value={{
                signed,
                setSigned,
                name,
                setName,
                email,
                setEmail,
                password,
                setPassword
            }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext);
    const { signed, setSigned, name, setName, email, setEmail, password, setPassword } = context
    return { signed, setSigned, name, setName, email, setEmail, password, setPassword }
}