import { useRef } from 'react';
import { SidebarComponent, ToolbarComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-navigations';
import { MenuComponent, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import './sidebar-menu.css';
const SidebarWithMenu = () => {
    const sidebarobj = useRef<SidebarComponent>(null);
    const menuItems: MenuItemModel[] = [
        {
            text: 'Overview',
            iconCss: 'icon-user icon',
            items: [
                { text: 'All Data' },
                { text: 'Category2' },
                { text: 'Category3' }
            ]
        },
        {
            text: 'Notification',
            iconCss: 'icon-bell-alt icon',
            items: [
                { text: 'Change Profile' },
                { text: 'Add Name' },
                { text: 'Add Details' }
            ]
        },
        {
            text: 'Info',
            iconCss: 'icon-tag icon',
            items: [
                { text: 'Message' },
                { text: 'Facebook' },
                { text: 'Twitter' }
            ]
        },
        {
            text: 'Comments',
            iconCss: 'icon-comment-inv-alt2 icon',
            items: [
                { text: 'Category1' },
                { text: 'Category2' },
                { text: 'Category3' }
            ]
        },
        {
            text: 'Bookmarks',
            iconCss: 'icon-bookmark icon',
            items: [
                { text: 'All Comments' },
                { text: 'Add Comments' },
                { text: 'Delete Comments' }
            ]
        },
        {
            text: 'Images',
            iconCss: 'icon-picture icon',
            items: [
                { text: 'Add Name' },
                { text: 'Add Mobile Number' }
            ]
        },
        {
            text: 'Users ',
            iconCss: 'icon-user icon',
            items: [
                { text: 'Mobile User' },
                { text: 'Laptop User' },
                { text: 'Desktop User' }
            ]
        },
        {
            text: 'Settings',
            iconCss: 'icon-eye icon',
            items: [
                { text: 'Change Profile' },
                { text: 'Add Name' },
                { text: 'Add Details' }
            ]
        }
    ];
    const enableDock: boolean = true;
    const dockSize: string = '50px';
    const width: string = '220px';
    const target: string = '.main-menu-content';
    const folderEle: string = '<div class= "e-folder"><div class= "e-folder-name">Navigation Pane</div></div>';

    const toolbarCliked = (args: { item: { tooltipText: string; }; }) => {
        if(args.item.tooltipText == "Menu") {
            sidebarobj.current!.toggle();
        }
    }

    return (
        <div id="menu-wrapper" className="control-section">
            <div id="sidebarmenu">
                {/* header-section  declaration */}
                <div>
                    <ToolbarComponent id="menuToolbar" clicked={toolbarCliked.bind(this)}>
                        <ItemsDirective>
                            <ItemDirective prefixIcon="icon-menu" tooltipText="Menu"></ItemDirective>
                            <ItemDirective template={folderEle}></ItemDirective>
                        </ItemsDirective>
                    </ToolbarComponent>
                </div>
                {/* main content declaration */}
                <div className="main-menu-content" id="maintext">
                    <div className="menu-content">
                        <div className="sidebar-heading">Responsive Sidebar with Menu</div>
                        <p className="paragraph-content">The React Sidebar is an expandable and collapsible component that typically acts as a side container to place primary or secondary content alongside the main content. It provides flexible options that can be shown and hidden based on user interactions. Any type of HTML content or component can be placed in the React Sidebar for quick access and easy navigation, like quick references, menus, lists, and tree views.</p>
                        <div className="sidebar-heading">HTML side content position</div>
                        <p className="paragraph-content">The React Sidebar component positions its content to the left or right side of the main content area. This option allows the placement of two sidebars on a page, one on the left and one on the right, to show primary and secondary content simultaneously.</p>
                        <div className="sidebar-heading">Responsive sidebar</div>
                        <p className="paragraph-content">Auto closing the React Sidebar component’s content, makes the main content area more readable.</p>
                    </div>
                </div>
                {/* end of main content declaration
                sidebar element declaration */}
                <SidebarComponent id="menuSidebar" className="sidebar-menu" ref={sidebarobj} enableDock={enableDock} dockSize={dockSize} width={width} target={target} isOpen={true} type="Auto">
                        <div className="main-menu">
                            <div>
                                <MenuComponent id="dockMenu" items={menuItems} orientation='Vertical' cssClass='dock-menu'></MenuComponent>
                            </div>
                        </div>
                </SidebarComponent>
            </div>
        </div>
    );
}
export default SidebarWithMenu;