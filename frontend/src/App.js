import React from 'react';
import Label from './components/Label';
import DropdownBar from './components/Dropdown_bar';

function App() {
  return (
    <div className="p-4 grid gap-1">
      <Label />
      <div className='m-auto'>
        <DropdownBar />
      </div>
    </div>
  );
}

export default App;
