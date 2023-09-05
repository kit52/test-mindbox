import { Card, Checkbox, FormControlLabel } from '@mui/material';
import { FC, memo, useCallback } from 'react';
import { green, blue } from '@mui/material/colors';
import { TaskType } from 'entities/Task/model/types/task';
import DeleteIcon from '@mui/icons-material/Delete';
interface TaskProps {
  task: TaskType;
  toggleTask: (id: string) => void;
}
export const Task: FC<TaskProps> = (props) => {
  const { task, toggleTask } = props;
  const style = {
    color: !task.checked ? blue : green[800],
  };
  const handleToggle = useCallback(() => {
    toggleTask(task.id);
  }, [toggleTask]);
  return (
    <Card>
      <FormControlLabel
        control={
          <Checkbox
            checked={task.checked}
            onClick={handleToggle}
            color={task.checked ? 'success' : 'default'}
          />
        }
        label={task.text}
        sx={style}
      />
      <DeleteIcon />
    </Card>
  );
};
