import { TaskType } from '../../model/types/task';
import { FC, memo, useCallback } from 'react';
import { Task } from '../Task/Task';
import { observer } from 'mobx-react-lite';
interface TasksListProps {
  tasks: TaskType[];
  toggleTask: (id: string) => void;
}

export const TasksList: FC<TasksListProps> = observer((props) => {
  const { toggleTask, tasks } = props;
  return (
    <div>
      {tasks.length
        ? tasks.map((task) => {
            return <Task task={task} toggleTask={toggleTask} key={task.id} />;
          })
        : 'Empty'}
    </div>
  );
});
