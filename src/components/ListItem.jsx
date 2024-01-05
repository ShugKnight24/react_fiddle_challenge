import { memo } from 'react';

export const ListItem = memo(({ item, handleListItemClick }) => (
  <li
    className={`List__item List__item--${item.color}`}
    onClick={() => handleListItemClick(item.name)}
  >
    {item.name}
  </li>
));
