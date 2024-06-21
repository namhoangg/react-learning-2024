export default function SiderBar({ onStartAddProject, projects, onClick, selectedProjectId}) {
  console.log(projects);
  return (
    <>
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
          YOUR PROJECTS
        </h2>
        <div>
          <button onClick={onStartAddProject} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
            +Add Project
          </button>
        </div>
        <ul className="mt-8">
          {projects.map((project, index) => {
            let css = "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200";
            if (project.id === selectedProjectId) {
              css += " bg-stone-800 text-stone-200";
            }
            else{
              css+= " text-stone-400"
            }
    
            return (
              <li key={project.id}>
                <button onClick={() => onClick(project.id)} className={css}>{project.title}</button>
              </li>
            )
          })}
        </ul>
      </aside>
    </>
  );
}
