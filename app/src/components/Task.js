
/**
 * 
 * @param {string} name - name of the task
 * @param {number} id -  unique identifier of the task
 * @param {number} boardId - unique identifier of the board of which the task belongs to
 * @param {function} dragEnd -  called when the task has completed the drag process
 * 
 * @returns {Component<props>}
 */

const Task = ({ name, id, boardId, dragEnd }) => {

    const handleDragStart = e => {
        e.stopPropagation();
        e.dataTransfer.setData("drag-item", JSON.stringify({ name, id, boardId }))
        e.dataTransfer.effectAllowed = 'move'
    }

    const handleDragEnd = e => {
        e.stopPropagation();
        dragEnd()
    }

    return (
        <div draggable onDragStart={e => handleDragStart(e)} onDragEnd={e => handleDragEnd(e)} className="bg-dark-gray rounded-md p-2 mb-2 cursor-pointer">
            <p className="text-typo-gray">{name}</p>
        </div>
    );
}

export default Task;
