import { observer } from 'mobx-react-lite';
import { TabsCustom } from './TabsCustom/TabsCustom';

const MainPage = observer(() => {
  return (
    <div>
      <h1>Todos</h1>
      <TabsCustom />
    </div>
  );
});

export default MainPage;
