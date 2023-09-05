import { TaskType } from '../../model/types/task';
import { FC, memo, useCallback } from 'react';
import { Task } from '../Task/Task';
import { observer } from 'mobx-react-lite';
import { Grid, styled } from '@mui/material';
import Paper from '@mui/material/Paper';
interface TasksListProps {
  tasks: TaskType[];
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export const TasksList: FC<TasksListProps> = observer((props) => {
  const { toggleTask, tasks, removeTask } = props;
  return (
    <Grid container rowGap={2}>
      {tasks.length
        ? tasks.map((task, index) => {
            return (
              <Grid item={true} xs={12} key={index}>
                <Task
                  task={task}
                  toggleTask={toggleTask}
                  removeTask={removeTask}
                  key={task.id}
                />
              </Grid>
            );
          })
        : 'Empty'}
    </Grid>
  );
});
