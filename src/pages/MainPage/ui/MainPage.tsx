import { observer } from 'mobx-react-lite';
import { TabsCustom } from './TabsCustom/TabsCustom';
import { AddTodo } from 'features/AddTodo/AddTodo';
import State from '../model/store';
import { Grid } from '@mui/material';
const MainPage = observer(() => {
  const addTask = () => {
    State.createTask();
  };
  const changeNewTask = (text: string) => {
    State.changeNewTask(text);
  };
  return (
    <Grid container rowGap={2}>
      <Grid xs={12} item={true}>
        <h1>Todos</h1>
      </Grid>
      <Grid xs={12} item={true}>
        <AddTodo
          onChange={changeNewTask}
          addTodo={addTask}
          value={State.newTask}
        />
      </Grid>
      <Grid xs={12} item={true}>
        <TabsCustom />
      </Grid>
    </Grid>
  );
});

export default MainPage;
