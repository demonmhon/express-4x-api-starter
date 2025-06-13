import { Request, Response } from 'express';

import { ResourceNotfound, BadRequest } from '../../utils/custom-errors';

// TODO: implement real getAll() resource
const users = [
  {
    id: '1',
    name: 'John',
    email: 'john@email.domain.com',
    age: 35,
    gender: 'M',
    active: true,
  },
  {
    id: '2',
    name: 'Jane',
    email: 'jane@email.domain.com',
    age: 30,
    gender: 'F',
    active: true,
  },
  {
    id: '3',
    name: 'Sam',
    email: 'sam@email.domain.com',
    age: 24,
    gender: 'M',
    active: false,
  },
  {
    id: '4',
    name: 'Bob',
    email: 'bob@email.domain.com',
    age: 41,
    gender: 'M',
    active: false,
  },
  {
    id: '5',
    name: 'Anna',
    email: 'anna@email.domain.com',
    age: 38,
    gender: 'F',
    active: false,
  },
];

export const getAll = (req: Request, res: Response) => {
  return res.send({
    total: users.length,
    data: [...users],
  });
};

export const getById = (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id) {
    throw new BadRequest();
  }
  const matchUser = users.filter((u) => u.id == id);
  if (matchUser.length) {
    return res.send(matchUser[0]);
  }
  throw new ResourceNotfound(`User ${id} not found`);
};

export const postUser = (req: Request, res: Response) => {
  const { name, email } = req.body;
  if (!name || !email) {
    throw new BadRequest('Required fields missing');
  }
  if (typeof name !== 'string' || typeof email !== 'string') {
    throw new BadRequest('Incorrect data type');
  }
  return res.send({
    id: '999',
    name,
    email,
    age: null,
    gender: 'M',
    active: false,
  });
};

export default { getAll, getById, postUser };
