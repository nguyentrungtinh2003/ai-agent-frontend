import React from 'react';
import GridDisplay from './components/Sidebar/Lecturer/GridDisplay';
import Header from './components/Sidebar/Lecturer/Header';
import Sidebar from './components/Sidebar/Lecturer/SideBar';

function App() {

  return (
    <div className="h-screen flex flex-col">
    {/* Header */}
    <Header />

    {/* Main content */}
    <div className="flex flex-1 overflow-hidden">
      {/* Main grid area */}
      <div className="flex-1 w-screen overflow-y-auto">
        <GridDisplay />
      </div>
    </div>
  </div>
  );
}

export default App;
