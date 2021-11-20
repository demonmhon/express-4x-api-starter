// TODO: implement real getAll() resource
const users = [
  {
    id: '1',
    name: 'John',
    email: 'john@email.domain.com',
    age: 35,
    genger: 'M',
    active: true,
  },
  {
    id: '2',
    name: 'Jane',
    email: 'jane@email.domain.com',
    age: 30,
    genger: 'F',
    active: true,
  },
  {
    id: '3',
    name: 'Sam',
    email: 'sam@email.domain.com',
    age: 24,
    genger: 'M',
    active: false,
  },
];

const getAll = (req, res) => {
  return res.send({
    total: 3,
    data: [...users],
  });
};

const getById = (req, res) => {
  const id = req.params.id;
  const matchUser = users.filter((u) => u.id == id);
  if (matchUser.length) {
    return res.send(matchUser[0]);
  }
  throw new Error(`No user with given id: ${id}`);
};

module.exports = {
  getAll,
  getById,
};
