import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./components/todoData";
import Column from "./components/column";
import { Card } from "antd";
import "./index.scss";

export default class ReactBeautifulTodo extends Component {
  state = initialData;

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);
  };

  render() {
    return (
      <section>
        <Card hoverable title={<strong>可通过拖拽进行分组与排序;暂不支持IE</strong>}>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <div className="content">
              {this.state.columnOrder.map((columnId) => {
                const column = this.state.columns[columnId];
                const tasks = column.taskIds.map(
                  (taskId) => this.state.tasks[taskId]
                );

                return <Column key={column.id} column={column} tasks={tasks} />;
              })}
            </div>
          </DragDropContext>
        </Card>
      </section>
    );
  }
}
