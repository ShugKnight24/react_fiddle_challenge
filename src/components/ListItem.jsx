import { memo } from 'react';

export const ListItem = memo(({ item, handleListItemClick, isSelected }) => (
  <li
    className={`List__item List__item--${item.color} ${isSelected ? 'selected' : ''}`}
    onClick={() => handleListItemClick(item.name)}
  >
    {item.name}
  </li>
));
