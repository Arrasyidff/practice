import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

const Todos: Todo[] = [
  { id: 1, title: 'Todo 1', done: false },
  { id: 1, title: 'Todo 2', done: false },
];

app.get('/todos', (req: Request, res: Response) => {
  res.status(200).json({ data: Todos });
});

app.get('/todos/:id', (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const todo: Todo | undefined = Todos.find((item: Todo) => item.id == id);

  if (!todo) res.status(400).json({ msg: 'Todo is not found' });

  res.status(200).json({ data: todo });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
