import { useState } from 'react';
import { ListItem } from './ListItem';

import './List.css';

// Implement a feature to allow item selection with the following requirements:
// ~~1. Clicking an item selects/unselects it.~~
// ~~2. Multiple items can be selected at a time.~~
// ~~3. Make sure to avoid unnecessary re-renders of each list item in the big list (performance).~~
// ~~4. Currently selected items should be visually highlighted.~~
// 5. Currently selected items' names should be shown at the top of the page.
//
// Feel free to change the component structure at will.

export const List = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleListItemClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  }

  return (
    <>
      <ul className="List">
        {items.map(item => (
          <ListItem
            key={item.name}
            handleListItemClick={handleListItemClick}
            isSelected={selectedItems.includes(item.name)}
            item={item}
          />
        ))}
      </ul>
    </>
  );
}
