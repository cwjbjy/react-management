import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Task from './task';

export default class Column extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">{this.props.column.title}</div>
        <Droppable droppableId={this.props.column.id} type="TASK">
          {(provided, snapshot) => (
            <div
              className="taskList"
              ref={provided.innerRef}
              {...provided.droppableProps}
              isdraggingover={snapshot.isDraggingOver.toString()}
            >
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}
