import { useCallback } from 'react';
import { Tabs } from '@mui/base/Tabs';
import { StyledTab, StyledTabPanel, StyledTabsList } from 'shared/ui';

import { TasksList } from 'entities/Task/ui/TasksList/TasksList';
import State from '../../model/store';
import { observer } from 'mobx-react-lite';
export const TabsCustom = observer(() => {
  const toggleTodo = (id: string) => {
    State.toggleTodo(id);
  };
  const removeTask = (id: string) => {
    State.removeTask(id);
  };

  return (
    <Tabs defaultValue={0}>
      <StyledTabsList>
        <StyledTab value={0}>All</StyledTab>
        <StyledTab value={1}>Active</StyledTab>
        <StyledTab value={2}>Completed</StyledTab>
      </StyledTabsList>
      <StyledTabPanel value={0}>
        <TasksList
          tasks={State.todos}
          toggleTask={toggleTodo}
          removeTask={removeTask}
        />
      </StyledTabPanel>
      <StyledTabPanel value={1}>
        <TasksList
          tasks={State.incompleteTodos}
          toggleTask={toggleTodo}
          removeTask={removeTask}
        />
      </StyledTabPanel>
      <StyledTabPanel value={2}>
        <TasksList
          tasks={State.completeTodos}
          toggleTask={toggleTodo}
          removeTask={removeTask}
        />
      </StyledTabPanel>
    </Tabs>
  );
});
