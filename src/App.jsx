import { List } from './components/List'
import { items } from './data/listData'

export const App = () => {

  return (
    <>
      <List items={items} />
    </>
  );
}
