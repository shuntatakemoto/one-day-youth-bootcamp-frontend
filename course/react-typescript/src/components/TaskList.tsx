import { Box, Stack } from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import React from 'react';
import { Task } from '..';

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
  // Taskの状態を切り替える
  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const newTasks = tasks.map((task, _i) => {
      return _i === i ? { ...task, isDone: e.target.checked } : task;
    });
    setTasks(newTasks);
  };

  return (
    <Stack>
      {tasks.map((task, index) => (
        <Box key={`todo-${index}`}>
          <Checkbox onChange={(e) => handleCheckBox(e, index)} checked={task.isDone}>
            {task.isDone ? <s>{task.label}</s> : task.label}
          </Checkbox>
        </Box>
      ))}
    </Stack>
  );
};
