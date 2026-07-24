import { createContext, useState } from "react";
export const UserContext = createContext();
export const UserProvider = ({ children }) => {

    const [token, setToken] = useState(null);
    const [email, setEmail] = useState(null);
    const [token, setToken] = useState(null);


    // Requerimiento 1: Método para hacer login
  const login = async (emailInput, passwordInput) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput, password: passwordInput }),
      });
      const data = await response.json();

      if (response.ok) {
        setToken(data.token); // Guardamos el token JWT real
        setEmail(data.email); // Guardamos el email
        return { success: true };
      } else {
        return { success: false, error: data.error || "Credenciales incorrectas" };
      }
    } catch (error) {
      return { success: false, error: "Error al conectar con el servidor" };
    }
  };

  const register = async (emailInput, passwordInput) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput, password: passwordInput }),
      });
      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
        return { success: true };
      } else {
        return { success: false, error: data.error || "Error en el registro" };
      }
    } catch (error) {
      return { success: false, error: "Error al conectar con el servidor" };
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
  };

const getProfile = async () => {
    if (!token) return;
    try {
      const response = await fetch(`${BASE_URL}/auth/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al obtener el perfil:", error);
    }
  };

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};