import { Button, Flex, Input, Spacer } from '@chakra-ui/react';
import React from 'react';
import { Task } from '../';

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  newTaskLabel: string;
  setNewTaskLabel: React.Dispatch<React.SetStateAction<string>>;
};

export const TaskForm: React.FC<Props> = ({ tasks, setTasks, newTaskLabel, setNewTaskLabel }) => {
  // フォームの値を保持する
  const handleNewTaskLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskLabel(e.target.value);
  };

  // Taskの登録
  const handleAddTask = () => {
    const newTask = { label: newTaskLabel, isDone: false };
    setTasks([...tasks, newTask]);
    setNewTaskLabel('');
  };

  // 完了したTaskを削除する
  const handleClearTasks = () => {
    const newTasks = tasks.filter((task) => !task.isDone);
    setTasks(newTasks);
  };

  return (
    <Flex w='50%' justify='center'>
      <Input
        onChange={handleNewTaskLabel}
        type='text'
        value={newTaskLabel}
        placeholder='enter the task'
        width='50%'
      />
      <Spacer />
      <Button onClick={handleAddTask} colorScheme='blue'>
        Add
      </Button>
      <Spacer />
      <Button onClick={handleClearTasks} colorScheme='blue'>
        Clear
      </Button>
    </Flex>
  );
};
