import { useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

export default function ToDo() {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState<TodoItem[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

  const handleAddTask = () => {
    const title = taskTitle.trim();
    if (!title) return;

    const nextTask: TodoItem = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks((current) => [nextTask, ...current]);
    setTaskTitle("");
  };

  const handleToggleTask = (taskId: number) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks((current) => current.filter((task) => task.id !== taskId));
  };

  const handleStartEdit = (taskId: number, currentTitle: string) => {
    setEditingId(taskId);
    setEditingText(currentTitle);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  const handleSaveEdit = (taskId: number) => {
    const title = editingText.trim();
    if (!title) return;
    setTasks((current) => current.map((t) => (t.id === taskId ? { ...t, title } : t)));
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div>
      <PageMeta
        title="React.js ToDo Dashboard | TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
        description="This is React.js ToDo page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="ToDo" />

      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                New Task
              </label>
              <input
                value={taskTitle}
                onChange={(event) => setTaskTitle(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    handleAddTask();
                  }
                }}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                placeholder="Add a new task"
              />
            </div>
            <button
              type="button"
              onClick={handleAddTask}
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Add Task
            </button>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Tasks
            </h3>
            {tasks.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400">No tasks added yet. Add one to get started.</p>
            ) : (
              <ul className="space-y-3">
                {tasks.map((task) => (
                  <li
                    key={task.id}
                    className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 sm:flex-row sm:items-center sm:justify-between"
                  >
                    {editingId === task.id ? (
                      <div className="flex w-full items-center gap-3">
                        <input
                          autoFocus
                          value={editingText}
                          onChange={(e) => setEditingText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              handleSaveEdit(task.id);
                            }
                            if (e.key === "Escape") {
                              e.preventDefault();
                              handleCancelEdit();
                            }
                          }}
                          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm dark:bg-gray-800 dark:border-gray-700"
                        />
                        <button
                          type="button"
                          onClick={() => handleSaveEdit(task.id)}
                          className="rounded-md bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          onClick={handleCancelEdit}
                          className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() => handleToggleTask(task.id)}
                          className="text-left flex-1"
                        >
                          <span
                            className={`block text-base font-medium ${
                              task.completed ? "text-green-600 line-through dark:text-green-400" : "text-gray-900 dark:text-white"
                            }`}
                          >
                            {task.title}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {task.completed ? "Completed" : "Pending"}
                          </span>
                        </button>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleStartEdit(task.id, task.title)}
                            className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteTask(task.id)}
                            className="rounded-lg border border-red-200 px-3 py-2 text-sm text-red-600 transition hover:bg-red-50 hover:text-red-700 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900"
                          >
                            Delete
                          </button>
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
