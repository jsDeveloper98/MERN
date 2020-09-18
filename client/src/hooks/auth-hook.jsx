import { useEffect } from "react";
import { useCallback, useState } from "react";

const storageName = "userData";

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = useCallback((jwtToken, id) => {
    setToken(jwtToken), setUserId(id);

    window.localStorage.setItem(storageName, JSON.stringify({ userId, token }));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);

    window.localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem(storageName));

    if (data && data.token) {
      login(data.token, data.userId);
    }
  }, [login]);

  return { login, logout, token, userId };
};
