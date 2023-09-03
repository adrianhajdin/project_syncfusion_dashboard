import { useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import "./home.css";
import Kanban from "../../components/kanban/kanban";
import Flow from "../../components/flow/flow";

function Home() {
  const [selectedComponent, setSelectedComponent] = useState("default"); // Initialize with the default component
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Track the sidebar state

  function changeComponent(componentName: string) {
    console.log(componentName);
    setSelectedComponent(componentName); // Change the selected component
  }

  // Toggle the sidebar state
  function handleSideBarPosition(isOpen: boolean | undefined){
	if(isOpen === undefined) return;
    setIsSidebarOpen(isOpen);
  }

  return (
    <div className={`home-wrapper ${isSidebarOpen ? 'shifted-content' : 'reset-content'}`}>
      <Sidebar onClick={changeComponent} onToolbarPosChanged={handleSideBarPosition}/>
      {selectedComponent === "kanban" && <Kanban />}
      {selectedComponent === "flow" && <Flow />}
    </div>
  );
}

export default Home;
