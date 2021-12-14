import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';
import { request } from './server';
import { Box, ChakraProvider, Flex } from '@chakra-ui/react';

// TODOタスクの型
export type Task = { label: string; isDone: boolean };

const App: React.VFC = () => {
  // タスクリストを格納する
  const [tasks, setTasks] = useState<Task[]>([]);
  // 追加前のタスクを格納する
  const [newTaskLabel, setNewTaskLabel] = useState<string>('');
  // ページマウント時にモックAPIからデータを取得
  useEffect(() => {
    request.fetchTasks((payload: Task[]) => setTasks(payload));
  }, []);

  return (
    <ChakraProvider>
      {/* ヘッダー */}
      <Box bg='tomato' w='100%' p={4} color='white' letterSpacing='0.2em'>
        React Todo List
      </Box>

      {/* 一覧表示 */}
      <Flex justify='center' my={16}>
        <TaskList {...{ tasks, setTasks }} />
      </Flex>

      {/* タスク追加、削除 */}
      <Flex justify='center'>
        <TaskForm {...{ tasks, setTasks, newTaskLabel, setNewTaskLabel }} />
      </Flex>
    </ChakraProvider>
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));
