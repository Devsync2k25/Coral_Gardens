# Coral Gardens Frontend

A modern desktop application for restaurant management built with React, TypeScript, Tailwind CSS, and Electron.

## 🚀 Features

- **Beautiful Login System**: Modern, responsive login interface with role-based authentication
- **Dashboard**: Clean, intuitive dashboard with statistics and recent activity
- **Role-Based Access**: Different user roles (Admin, Manager, Staff, Customer) with appropriate permissions
- **Desktop App**: Native desktop application using Electron
- **Modern UI**: Built with Tailwind CSS for a beautiful, responsive design

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Electron** - Desktop application framework

## 📁 Project Structure

```
Frontend/
├── src/
│   ├── login/                    # Login system components
│   │   ├── LoginPage.tsx        # Main login UI
│   │   ├── useAuth.ts           # Authentication logic
│   │   ├── constants.ts         # User data & roles
│   │   ├── Preloader.tsx        # Loading component
│   │   ├── Sidebar.tsx          # Navigation sidebar
│   │   └── index.ts             # Exports
│   ├── App.tsx                  # Main application component
│   └── index.css                # Global styles
├── electron/
│   └── main.js                  # Electron main process
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the Frontend directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

#### Web Development (Browser)
```bash
npm run dev
```
This starts the Vite development server at `http://localhost:5173`

#### Desktop Development (Electron)
```bash
npm run electron-dev
```
This starts both the Vite dev server and Electron app simultaneously.

### Building

#### Web Build
```bash
npm run build
```

#### Desktop Build
```bash
npm run dist
```

## 👥 Demo Users

The application includes demo users for testing:

| Username | Role | Description |
|----------|------|-------------|
| `admin` | Administrator | Full system access |
| `manager` | Manager | Restaurant management |
| `staff` | Staff | Basic staff access |
| `customer` | Customer | Customer interface |

**Password**: Any password with 3+ characters

## 🎨 Features

### Login System
- Beautiful gradient background
- Form validation
- Loading states
- Error handling
- Session persistence

### Dashboard
- Role-based navigation
- Statistics cards
- Recent activity feed
- Responsive design

### Sidebar Navigation
- User profile display
- Role-based menu items
- Logout functionality
- Clean, modern design

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration is in `tailwind.config.js`.

### Electron
Electron configuration is in `electron/main.js` and `package.json`.

## 📦 Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run electron` - Run Electron app (requires built files)
- `npm run electron-dev` - Run Electron with dev server
- `npm run dist` - Build and package for distribution

## 🚀 Deployment

### Web Deployment
Build the project and deploy the `dist` folder to your web server.

### Desktop Distribution
Use `npm run dist` to create distributable packages for Windows, macOS, and Linux.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is part of the Coral Gardens Restaurant Management System.

---

**Coral Gardens** - Restaurant Management System
