import { Container, Flex, Heading, HStack, Input, Button, Box } from '@chakra-ui/react'
import { useState } from 'react'
import { FiCheckSquare } from 'react-icons/fi'
import { TaskList } from '../TaskList'

type Task = {
  uid: number
  task: string
  isCompleted: boolean
}

export const TaskCard = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('')

  const uid = Math.random()

  const handleCreateNewTask = () => {
    if (newTask.trim() === "") {
      throw new Error("Preencha o campos task")
    } else {
      setTasks(task => [
        ...task, 
        {
          uid: uid, 
          task: newTask, 
          isCompleted: false
        }
      ])
    }
  }

  return (
    <Container maxWidth="container.xl">
      <Flex flexDirection="column" justifyContent="center" backgroundColor="white" padding={28} marginTop="-6rem" rounded="md" boxShadow="base">
        <Flex flexDirection="row" justifyContent="space-around">
          <Heading>My Tasks</Heading>
          <HStack spacing={3}>
            <Input placeholder="Enter new task" size="lg" value={newTask} onChange={(event) => setNewTask(event.target.value)} />
            <Button colorScheme="green" variant="solid" onClick={handleCreateNewTask}>
              <FiCheckSquare size={22} color="#fff"/>
            </Button>
          </HStack>
        </Flex>
        <TaskList />
      </Flex>
    </Container>
  );
}