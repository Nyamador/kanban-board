import { Board } from './components'


function KanbanApp() {
  return <main className="h-screen bg-dark overflow-hidden overflow-x-scroll ">
    <section className="kanban-container p-4 flex flex-row gap-4">
      {[1, 2, 3, 4].map(item =>
        <Board title="Work In Progress" tasks={["One Task", "Two Tasks"]} />
      )}
    </section>
  </main>
}

export default KanbanApp;
