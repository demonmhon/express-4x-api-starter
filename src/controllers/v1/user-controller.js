const { ResourceNotfound, BadRequest } = require('../../utils/custom-errors');

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

const getAll = (req, res) => {
  return res.send({
    total: users.length,
    data: [...users],
  });
};

const getById = (req, res) => {
  const id = req.params.id;
  if (!id) {
    throw new BadRequest();
  }
  const matchUser = users.filter((u) => u.id == id);
  if (matchUser.length) {
    return res.send(matchUser[0]);
  }
  throw new ResourceNotfound(`No user with given id: ${id}`);
};

const postUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    throw new BadRequest();
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

module.exports = {
  getAll,
  getById,
  postUser,
};
