import { Board } from './components'


function KanbanApp() {
  return <main className="h-screen bg-dark overflow-hidden overflow-x-scroll ">
    <section className="kanban-container p-4 flex flex-row gap-4">
      {[{
        id: 1,
        boardTitle: 'Derrick',
        tasks: [{ 'name': 'Discover Gravity', id: 972441 }, { 'name': 'Store data on stones', id: 851725 }]
      },
      {
        id: 2,
        boardTitle: 'Desmond',
        tasks: [{ 'name': 'Build Vreact', id: 526760 }, { 'name': 'Build Flux', id: 774629 }]
      },
      {
        id: 3,
        boardTitle: 'Elon',
        tasks: [{ 'name': 'Build Model Z', id: 988813 }, { 'name': 'Construct space tunnel', id: 345345 }]
      },
      {
        id: 4,
        boardTitle: 'Jeff',
        tasks: [{ 'name': 'Move in with Aliens', id: 953813 }, { 'name': 'Give every indivdual $1', id: 453459 }]
      }
      ].map(item =>
        <Board key={item.id} id={item.id} title={item.boardTitle} tasks={[...item.tasks]} />
      )
      }
    </section>
  </main>
}

export default KanbanApp;
