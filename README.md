# Postify

### A Modern Blog Publishing Platform Built With React, Vite, Redux, Appwrite, and Tailwind CSS

Postify is a full-featured blog application where users can create accounts, write rich-text posts, upload featured images, manage their own content, and explore published posts through a clean and responsive interface.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-State_Management-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Appwrite](https://img.shields.io/badge/Appwrite-Backend-F02E65?style=for-the-badge&logo=appwrite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![TinyMCE](https://img.shields.io/badge/TinyMCE-Rich_Text_Editor-0F7BFF?style=for-the-badge)
![React Router](https://img.shields.io/badge/React_Router-Routing-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-Forms-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Core Features](#core-features)
- [Project Objectives](#project-objectives)
- [Application Flow](#application-flow)
- [Project Structure](#project-structure)
- [Routing](#routing)
- [Appwrite Integration](#appwrite-integration)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [UI Highlights](#ui-highlights)
- [Current Limitations](#current-limitations)
- [Future Improvements](#future-improvements)
- [Documentation](#documentation)
- [Conclusion](#conclusion)

## Project Overview

### Project Name

**Postify**

### Project Type

**Frontend Blog Application with Appwrite Backend Services**

### Purpose

Postify is designed to provide a simple and modern blogging experience where users can:

- Create an account and log in securely
- Write blog posts using a rich text editor
- Upload featured images
- Edit and delete their own posts
- Browse published posts
- Access protected content based on authentication state

This project demonstrates practical frontend architecture, backend service integration, route protection, state management, and content publishing workflows in a real-world application structure.

## Tech Stack

### Frontend

- **React 19** for building the user interface
- **Vite** for fast development and production builds
- **React Router DOM** for client-side routing
- **Redux Toolkit** for authentication state management
- **React Redux** for connecting Redux to React components
- **React Hook Form** for form handling
- **Tailwind CSS 4** for styling and responsive UI
- **TinyMCE** for rich text content editing
- **html-react-parser** for rendering saved HTML post content

### Backend Services

- **Appwrite Authentication** for user account management
- **Appwrite Database** for storing posts
- **Appwrite Storage** for storing featured images

### Tooling

- **ESLint** for code quality
- **Vite React Plugin** for React integration

## Core Features

- User signup, login, and logout
- Protected routes for authenticated users
- Rich text blog post creation
- Featured image upload and preview
- Create, edit, and delete post functionality
- Post listing page for all available posts
- Single post details page
- Responsive layout using Tailwind CSS
- Shared reusable components for forms and UI structure

## Project Objectives

### 1. Authentication System

Provide secure user registration, session-based login, and logout using Appwrite accounts.

### 2. Content Publishing

Allow authenticated users to create and manage blog posts with structured content and images.

### 3. Protected User Experience

Restrict post management pages to logged-in users while keeping public viewing routes accessible.

### 4. Rich Writing Experience

Use a full-featured editor to improve the blogging workflow beyond simple plain-text input.

### 5. Clean Responsive Design

Deliver a modern interface that works smoothly across desktop and mobile devices.

## Application Flow

### Authentication Flow

1. A new user signs up with name, email, and password.
2. Appwrite creates the account and starts a session.
3. The app fetches the current user and stores auth state in Redux.
4. Protected pages become available to the authenticated user.

### Post Management Flow

1. The user opens the create post page.
2. The user adds a title, slug, content, image, and status.
3. The image is uploaded to Appwrite Storage.
4. The post is saved to Appwrite Database.
5. The user is redirected to the created post page.

### Session Persistence Flow

1. On application startup, the app checks Appwrite for an existing session.
2. If a session exists, Redux restores authenticated state.
3. If no session exists, the user stays in guest mode.

## Project Structure

```text
Postify/
├── public/
├── src/
│   ├── appwrite/
│   │   ├── auth.js
│   │   └── config.js
│   │
│   ├── components/
│   │   ├── container/
│   │   │   └── Container.jsx
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── LogoutBtn.jsx
│   │   ├── post-form/
│   │   │   └── PostForm.jsx
│   │   ├── AuthLayout.jsx
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Login.jsx
│   │   ├── Logo.jsx
│   │   ├── PostCard.jsx
│   │   ├── RTE.jsx
│   │   ├── Select.jsx
│   │   ├── Signup.jsx
│   │   └── index.js
│   │
│   ├── conf/
│   │   └── conf.js
│   │
│   ├── pages/
│   │   ├── AddPost.jsx
│   │   ├── AllPosts.jsx
│   │   ├── EditPost.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Post.jsx
│   │   └── Signup.jsx
│   │
│   ├── store/
│   │   ├── authSlice.js
│   │   └── store.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .env
├── eslint.config.js
├── index.html
├── package.json
├── PROJECT_REPORT.md
└── vite.config.js
```

## Routing

### Public Routes

- `/` - Home page
- `/login` - Login page
- `/signup` - Signup page
- `/post/:slug` - Single post page

### Protected Routes

- `/all-posts` - View all posts
- `/add-post` - Create a new post
- `/edit-post/:slug` - Edit an existing post

### Route Protection

The application uses `AuthLayout` to control access:

- Guests trying to access protected routes are redirected to `/login`
- Logged-in users trying to access guest-only routes are redirected to `/`

## Appwrite Integration

The project uses Appwrite for three major backend responsibilities:

### 1. Authentication

- Create user accounts
- Create sessions
- Fetch current logged-in user
- Delete sessions on logout

### 2. Database

- Create post documents
- Read single and multiple posts
- Update existing posts
- Delete posts

### 3. Storage

- Upload featured images
- Delete old images when needed
- Generate file preview URLs for rendering images in the UI

## Environment Variables

Create a `.env` file in the project root and add the following values:

```env
VITE_APPWRITE_URL=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
VITE_APPWRITE_BUCKET_ID=
VITE_TINYMCE_API_KEY=
```

### Variable Purpose

- `VITE_APPWRITE_URL` - Appwrite API endpoint
- `VITE_APPWRITE_PROJECT_ID` - Appwrite project ID
- `VITE_APPWRITE_DATABASE_ID` - Appwrite database ID
- `VITE_APPWRITE_COLLECTION_ID` - Posts collection ID
- `VITE_APPWRITE_BUCKET_ID` - Storage bucket ID for post images
- `VITE_TINYMCE_API_KEY` - API key for TinyMCE editor

## Getting Started

### Prerequisites

- Node.js
- npm
- Appwrite project setup
- TinyMCE API key

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint checks
- `npm run preview` - Preview the production build locally

## UI Highlights

- Clean modern layout
- Responsive navigation and content containers
- Card-based post listing UI
- Rich text writing interface
- Loading state for initial app session check
- Protected route redirection behavior
- Reusable input, button, select, and form components

## Current Limitations

- The project currently has no automated test suite
- Some files still contain legacy commented code
- Error handling is limited in a few API-related flows
- The default project started from a Vite template and is still being polished into a production-ready portfolio version

## Future Improvements

- Add real publish dates and timestamps
- Improve error and success notifications
- Add search and category filtering for posts
- Add user profile information
- Improve backend-level document permissions
- Add comments or reactions for posts
- Add automated tests
- Add deployment and CI/CD documentation

## Conclusion

Postify is a strong React project that showcases:

- Modern frontend development
- Real backend service integration
- Authentication and protected routing
- Rich text content management
- File upload handling
- Reusable component architecture

