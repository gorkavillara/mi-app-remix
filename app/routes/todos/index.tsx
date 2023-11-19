import type { ActionFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import type { Todo } from "./models";
import TodoList from "./components/TodoList";

const todos: Todo[] = [];

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  todos.push({
    title: body.get("title")!.toString(),
  });
  return todos;
}

export function loader() {
  return todos;
}

export default function Todos() {
  const data = useLoaderData<Todo[]>();
  return (
    <>
      <TodoList todos={data} />
      <Form method="post">
        <input type="text" name="title" />
        <button type="submit">Create Todo</button>
      </Form>
    </>
  );
}
