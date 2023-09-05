import { ChangeEvent, memo } from 'react';
import { Card, TextField } from '@mui/material';
import { OutlinedInput } from '@mui/material';
import { Button } from '@mui/material';
interface AddTodoProps {
  onChange: (text: string) => void;
  addTodo: () => void;
  value: string;
}
export const AddTodo = memo(({ onChange, addTodo, value }: AddTodoProps) => {
  const changeInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(e.target.value);
  };
  const handleAddTodo = () => {
    addTodo();
  };
  return (
    <div>
      <OutlinedInput value={value} onChange={changeInput} />
      <Button
        onClick={handleAddTodo}
        disabled={!Boolean(value)}
        size="large"
        variant="contained"
      >
        Add
      </Button>
    </div>
  );
});
