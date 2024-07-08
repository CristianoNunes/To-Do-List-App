# To-Do List

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite
- Jest
- React Testing Library
- React Icons
- Eslint

## Features

- Add tasks
- Edit task names
- Mark tasks as completed
- Delete tasks
- Save tasks to Local Storage
- Confirmation modal for deleting tasks

## Development Methodology: Atomic Design

Atomic Design is a methodology for creating more consistent and manageable design systems. It is divided into five stages: atoms, molecules, organisms, templates, and pages. Here is how Atomic Design was applied in this project:

### Atoms

Atoms are the most basic building blocks of the interface, such as buttons, inputs, and checkboxes. In the To-Do List project, the following atoms were created:

- `Button`: a reusable button component.
- `Input`: a text input field component.
- `Checkbox`: a checkbox component.
- `Header`: a header component for the list title.

### Molecules

Molecules are simple combinations of atoms working together as a unit. In the To-Do List project, the following molecules were created:

- `TaskItem`: a task item that combines atoms like `Checkbox`, `Button`, and `Input`.
- `Modal`: a confirmation modal for task deletion.

### Organisms

Organisms are relatively complex components composed of groups of molecules and/or atoms and/or other organisms. In the To-Do List project, the following organism was created:

- `TaskList`: a task list that groups multiple `TaskItem` components.

### Templates

Templates consist of groups of organisms assembled together to form page layouts. Templates focus on the structure and placement of information.

- `TaskTemplate`: a template that organizes the layout of the application, including the task list and the input field to add new tasks.

### Pages

Pages are specific instances of templates. They represent the final interface that users will see.

- `TaskPage`: the main page of the To-Do List application, which uses the `TaskTemplate` to organize all components.

By following the Atomic Design methodology, we were able to create a modular and scalable application where each component has a clear responsibility and can be easily maintained and tested.
