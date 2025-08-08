export interface User {
  id: number;
  username: string;
  email: string;
  role: UserRole;
  name: string;
  avatar?: string;
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
    name: 'System Administrator',
    avatar: '/avatars/admin.png'
  },
  {
    id: 2,
    username: 'manager',
    email: 'manager@coralgardens.com',
    role: UserRole.MANAGER,
    name: 'Restaurant Manager',
    avatar: '/avatars/manager.png'
  },
  {
    id: 3,
    username: 'staff',
    email: 'staff@coralgardens.com',
    role: UserRole.STAFF,
    name: 'Restaurant Staff',
    avatar: '/avatars/staff.png'
  },
  {
    id: 4,
    username: 'customer',
    email: 'customer@example.com',
    role: UserRole.CUSTOMER,
    name: 'John Customer',
    avatar: '/avatars/customer.png'
  }
];

export const ROLE_LABELS = {
  [UserRole.ADMIN]: 'Administrator',
  [UserRole.MANAGER]: 'Manager',
  [UserRole.STAFF]: 'Staff',
  [UserRole.CUSTOMER]: 'Customer'
};

export const ROLE_COLORS = {
  [UserRole.ADMIN]: 'bg-red-500',
  [UserRole.MANAGER]: 'bg-blue-500',
  [UserRole.STAFF]: 'bg-green-500',
  [UserRole.CUSTOMER]: 'bg-gray-500'
}; 