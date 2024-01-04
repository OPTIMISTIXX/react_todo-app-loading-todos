import { Dispatch, SetStateAction } from 'react';
import cn from 'classnames';
import { TasksFilter } from '../types/tasksFilter';

interface Props {
  tasksFilter: TasksFilter,
  setTasksFilter: Dispatch<SetStateAction<TasksFilter>>
}

export const Footer: React.FC<Props> = ({
  tasksFilter,
  setTasksFilter,
}) => {
  const handleAll = () => {
    setTasksFilter(TasksFilter.all);
  };

  const handleActive = () => {
    setTasksFilter(TasksFilter.active);
  };

  const handleCompleted = () => {
    setTasksFilter(TasksFilter.completed);
  };

  return (
    <footer
      className="todoapp__footer"
      data-cy="Footer"
    >
      <span className="todo-count" data-cy="TodosCounter">
        3 items left
      </span>

      {/* Active filter should have a 'selected' class */}
      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={cn('filter__link',
            { selected: TasksFilter.all })}
          data-cy="FilterLinkAll"
          onClick={handleAll}
        >
          All
        </a>

        <a
          href="#/active"
          className={cn('filter__link',
            { selected: tasksFilter === TasksFilter.active })}
          data-cy="FilterLinkActive"
          onClick={handleActive}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={cn('filter__link',
            { selected: tasksFilter === TasksFilter.completed })}
          data-cy="FilterLinkCompleted"
          onClick={handleCompleted}
        >
          Completed
        </a>
      </nav>

      {/* don't show this button if there are no completed todos */}
      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
      >
        Clear completed
      </button>
    </footer>
  );
};
