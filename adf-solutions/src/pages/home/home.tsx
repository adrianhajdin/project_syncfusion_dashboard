import { useState } from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import './home.css';
import Kanban from '../../components/kanban/kanban';

function Home() {
  const [selectedComponent, setSelectedComponent] = useState("default"); // Initialize with the default component

  function handleState(componentName : string) {
	console.log(componentName);
	setSelectedComponent(componentName); // Change the selected component
 }
  return (
    <>
      <Sidebar onClick={handleState} selectedComponent={selectedComponent}/>
      <div className="content">
        {selectedComponent === "kanban" && <Kanban />} {/* Render the selected component */}
        {/* Add more conditions for other components... */}
      </div>
    </>
  );
}

export default Home;
