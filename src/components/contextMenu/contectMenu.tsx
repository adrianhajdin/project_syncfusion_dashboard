import { ContextMenuComponent, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import './App.css';

function ContextMenu() {
  const menuItems: MenuItemModel[] = [
    {
        text: 'Cut'
    },
    {
        text: 'Copy'
    },
    {
        text: 'Paste'
    }];

    return (
      // specifies the tag to render the ContextMenu component
      <div>
        <ContextMenuComponent target="#target" items={menuItems} />
      </div>
    );
}
export default ContextMenu;