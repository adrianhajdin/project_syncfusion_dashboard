import { useRef } from "react";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { TreeViewComponent } from "@syncfusion/ej2-react-navigations";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import "./sidebar.css";

type SidebarProps = {
  onClick: (componentName: string) => void;
  onToolbarPosChanged: (componentName: boolean | undefined) => void;
};

interface NodeId {
  nodeData: {
    id: string;
  };
}

const data: { [key: string]: unknown }[] = [
  {
    nodeId: "01",
    nodeText: "Kanban",
    iconCss: "icon-microchip icon",
  },
  {
    nodeId: "02",
    nodeText: "Deployment",
    iconCss: "icon-thumbs-up-alt icon",
  },
  {
    nodeId: "03",
    nodeText: "Quick Start",
    iconCss: "icon-docs icon",
  },
  {
    nodeId: "04",
    nodeText: "Components",
    iconCss: "icon-th icon",
    nodeChild: [
      {
        nodeId: "04-01",
        nodeText: "Calendar",
        iconCss: "icon-circle-thin icon",
      },
      {
        nodeId: "04-02",
        nodeText: "DatePicker",
        iconCss: "icon-circle-thin icon",
      },
      {
        nodeId: "04-03",
        nodeText: "DateTimePicker",
        iconCss: "icon-circle-thin icon",
      },
      {
        nodeId: "04-04",
        nodeText: "DateRangePicker",
        iconCss: "icon-circle-thin icon",
      },
      {
        nodeId: "04-05",
        nodeText: "TimePicker",
        iconCss: "icon-circle-thin icon",
      },
      {
        nodeId: "04-06",
        nodeText: "SideBar",
        iconCss: "icon-circle-thin icon",
      },
    ],
  },
  {
    nodeId: "05",
    nodeText: "API Reference",
    iconCss: "icon-code icon",
    nodeChild: [
      {
        nodeId: "05-01",
        nodeText: "Calendar",
        iconCss: "icon-circle-thin icon",
      },
      {
        nodeId: "05-02",
        nodeText: "DatePicker",
        iconCss: "icon-circle-thin icon",
      },
      {
        nodeId: "05-03",
        nodeText: "DateTimePicker",
        iconCss: "icon-circle-thin icon",
      },
      {
        nodeId: "05-04",
        nodeText: "DateRangePicker",
        iconCss: "icon-circle-thin icon",
      },
      {
        nodeId: "05-05",
        nodeText: "TimePicker",
        iconCss: "icon-circle-thin icon",
      },
      {
        nodeId: "05-06",
        nodeText: "SideBar",
        iconCss: "icon-circle-thin icon",
      },
    ],
  },
  {
    nodeId: "06",
    nodeText: "Browser Compatibility",
    iconCss: "icon-chrome icon",
  },
  {
    nodeId: "07",
    nodeText: "Upgrade Packages",
    iconCss: "icon-up-hand icon",
  },
  {
    nodeId: "08",
    nodeText: "Release Notes",
    iconCss: "icon-bookmark-empty icon",
  },
  {
    nodeId: "09",
    nodeText: "FAQ",
    iconCss: "icon-help-circled icon",
  },
  {
    nodeId: "10",
    nodeText: "License",
    iconCss: "icon-doc-text icon",
  },
];

const Sidebar = ({ onClick, onToolbarPosChanged }: SidebarProps) => {
  const sidebarobj = useRef<SidebarComponent>(null);
  const width: string = "290px";
  const target: string = ".main-sidebar-content";
  const mediaQuery: string = "(min-width: 600px)";
  const fields: object = {
    dataSource: data,
    id: "nodeId",
    text: "nodeText",
    child: "nodeChild",
    iconCss: "iconCss",
  };

  const toolbarClicked = (): void => {
    sidebarobj.current!.toggle();
    onToolbarPosChanged(sidebarobj.current?.isOpen);
  };

  // Inside your Sidebar component
  const handleNodeClick = (nodeId: NodeId) => {
    // Logic to determine which component to display based on nodeId
    switch (nodeId!.nodeData.id) {
      case "01":
        onClick("kanban");
        break;
      case "02":
        onClick("flow");
        break;
      // Add more cases for other nodes...
      default:
      // setSelectedComponent("default");
    }
  };

  return (
    <div
      className="control-section full-screen-wrapper"
      id="responsive-wrapper"
    >
      <div id="reswrapper">
        {/* toggle the sidebar */}
        <div>
          <ButtonComponent
            onClick={toolbarClicked.bind(this)}
            className="toggle-sidebar-button"
            cssClass="e-flat e-primary"
          >
            Toggle Sidebar
          </ButtonComponent>
        </div>
        <SidebarComponent
          id="sideTree"
          className="sidebar-treeview"
          ref={sidebarobj}
          width={width}
          target={target}
          mediaQuery={mediaQuery}
          isOpen={true}
          closeOnDocumentClick={false}
          close={toolbarClicked.bind(this)}
        >
          <div className="res-main-menu">
            <div className="table-content">
              <TextBoxComponent
                id="resSearch"
                placeholder="Search..."
              ></TextBoxComponent>
              <p className="main-menu-header">TABLE OF CONTENTS</p>
            </div>
            <div>
              <TreeViewComponent

                id="mainTree"
                cssClass="main-treeview"
                fields={fields}
                expandOn="Click"
                nodeSelected={handleNodeClick}
                autoCheck={false}
              />
            </div>
          </div>
        </SidebarComponent>
        {/* end of sidebar element */}
      </div>
    </div>
  );
};
export default Sidebar;
