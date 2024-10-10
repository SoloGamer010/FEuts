import React, { useState } from 'react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Rooms', href: '#' },
    { name: 'Booking', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2>Feuts</h2>
        <nav>
          <ul>
            {menuItems.map((item, index) => (
              <li key={item.name} style={{animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`, opacity: 0}}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;