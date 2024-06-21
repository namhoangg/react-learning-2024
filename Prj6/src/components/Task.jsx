import NewTask from "./NewTask";

export default function Task({onAddTask,onDelete,tasks}) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask />
      <p className="text-stone-800 my-4">
        {tasks.map((task, index) => {
          return (
            <li key={task.id}>
              <button onClick={() => onDelete(task.id)} className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200">
                {task.title}
              </button>
            </li>
          )
        })}
      </p>
    </section>
  )
}