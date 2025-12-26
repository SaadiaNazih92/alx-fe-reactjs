import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  test('renders TodoList with initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('allows users to add a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Test Todo' } });
    fireEvent.click(button);

    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
  });

  test('toggles a todo item completion status', () => {
    render(<TodoList />);
    const todoText = screen.getByText('Learn React');
    const listItem = todoText.closest('li');

    // Click to complete
    fireEvent.click(todoText);
    expect(listItem).toHaveStyle('text-decoration: line-through');

    // Click to un-complete
    fireEvent.click(todoText);
    expect(listItem).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    const todoText = 'Build a Todo App';
    expect(screen.getByText(todoText)).toBeInTheDocument();

    // Find the delete button for this specific item
    // Since our structure is simple, we find the text, go to parent li, find button
    const deleteButton = screen.getByText(todoText).parentElement.querySelector('button');
    
    fireEvent.click(deleteButton);

    expect(screen.queryByText(todoText)).not.toBeInTheDocument();
  });
});
