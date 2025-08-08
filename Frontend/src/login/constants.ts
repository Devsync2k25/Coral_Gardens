/**
 * LOGIN CONSTANTS - BACKEND INTEGRATION
 * ====================================
 * 
 * This file contains all login-related constants including user roles and mock user data.
 * Backend developers should replace MOCK_USERS with API calls to /api/users
 */

export interface User {
  id: number;
  username: string;
  email: string;
  role: UserRole;
  name: string;
}

export enum UserRole {
  ADMIN = 'admin',
  MANAGER = 'manager',
  STAFF = 'staff',
  CUSTOMER = 'customer'
}

export const USERS: User[] = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@coralgardens.com',
    role: UserRole.ADMIN,
    name: 'System Administrator'
  },
  {
    id: 2,
    username: 'manager',
    email: 'manager@coralgardens.com',
    role: UserRole.MANAGER,
    name: 'Restaurant Manager'
  },
  {
    id: 3,
    username: 'staff',
    email: 'staff@coralgardens.com',
    role: UserRole.STAFF,
    name: 'Restaurant Staff'
  },
  {
    id: 4,
    username: 'customer',
    email: 'customer@example.com',
    role: UserRole.CUSTOMER,
    name: 'John Customer'
  }
];

export const ROLE_LABELS = {
  [UserRole.ADMIN]: 'Administrator',
  [UserRole.MANAGER]: 'Manager',
  [UserRole.STAFF]: 'Staff',
  [UserRole.CUSTOMER]: 'Customer'
};

// Login form validation
export const LOGIN_VALIDATION = {
  MIN_USERNAME_LENGTH: 3,
  MIN_PASSWORD_LENGTH: 6,
  MAX_USERNAME_LENGTH: 50,
  MAX_PASSWORD_LENGTH: 100
};

// Authentication error messages
export const AUTH_ERRORS = {
  INVALID_CREDENTIALS: 'Invalid username or password',
  NETWORK_ERROR: 'Network error. Please check your connection.',
  SERVER_ERROR: 'Server error. Please try again later.',
  SESSION_EXPIRED: 'Session expired. Please login again.'
};

// Local storage keys
export const STORAGE_KEYS = {
  CURRENT_USER: 'currentUser',
  AUTH_TOKEN: 'authToken',
  REMEMBER_ME: 'rememberMe'
};