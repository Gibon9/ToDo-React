import { rest } from 'msw';
import { todos } from 'mocks/data/todos';

export const handlers = [
  rest.get('/todos', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        todos,
      })
    );
  }),
];
