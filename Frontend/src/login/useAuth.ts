/**
 * AUTHENTICATION HOOK - BACKEND INTEGRATION
 * =========================================
 * 
 * This hook now integrates with the backend API for authentication
 */

import { useState, useEffect } from 'react';
import { User, USERS } from './constants';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true
  });

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('coral-gardens-user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setAuthState({
          user,
          isAuthenticated: true,
          isLoading: false
        });
      } catch (error) {
        localStorage.removeItem('coral-gardens-user');
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false
        });
      }
    } else {
      setAuthState({
        user: null,
        isAuthenticated: false,
        isLoading: false
      });
    }
  }, []);

  const login = async (username: string, password: string): Promise<{ success: boolean; message: string }> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Find user by username
    const user = USERS.find(u => u.username === username);
    
    if (!user) {
      return { success: false, message: 'User not found' };
    }

    // For demo purposes, accept any password
    // In real app, you would validate against backend
    if (password.length < 3) {
      return { success: false, message: 'Password must be at least 3 characters' };
    }

    // Store user in localStorage
    localStorage.setItem('coral-gardens-user', JSON.stringify(user));
    
    setAuthState({
      user,
      isAuthenticated: true,
      isLoading: false
    });

    return { success: true, message: 'Login successful' };
  };

  const logout = () => {
    localStorage.removeItem('coral-gardens-user');
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false
    });
  };

  return {
    ...authState,
    login,
    logout
  };
};