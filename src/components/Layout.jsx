import Sidebar from './Sidebar';
import Navbar from './Navbar';
import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-4 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
