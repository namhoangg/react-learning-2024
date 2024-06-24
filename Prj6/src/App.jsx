import SiderBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });
  function handleAddTask(taskData) {
    const newTask = {
      ...taskData,
      projectId: projectsState.selectedProjectId,
      id: Math.random()
    }
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      }
    })
  }

  function handleDeleteTask(taskId) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== taskId)
      }
    })
  }
  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }
  function handleCancel() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }
  function handleClickProject(projectId) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      }
    })
  }
  function handleAddProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random()
    }
    setProjectsState(prevState => {
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: undefined,
      }
    })
  }
  function handleDeleteProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId),
        selectedProjectId: undefined,
      }
    })
  }
  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />
  }
  else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }
  else {
    content = <SelectedProject onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} onDelete={handleDeleteProject} project={projectsState.projects.find(project => project.id === projectsState.selectedProjectId)} tasks={projectsState.tasks.find(
      task => task.projectId === projectsState.selectedProjectId
    )} />
  }
  return (
    <>

      <main className="h-screen my-8 flex gap-8">
        <SiderBar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onClick={handleClickProject} selectedProjectId={projectsState.selectedProjectId} />
        {content}
      </main>
    </>
  );
}

export default App;
