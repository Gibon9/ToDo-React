import { rest } from 'msw';
import { todos } from 'mocks/data';

export const handlers = [rest.get('/todos', (req, res, ctx) => {})];
