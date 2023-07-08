class ResourceNotfound extends Error {
  constructor(message) {
    super(message);
    this.name = 'ResourceNotfound';
  }
}

class BadRequest extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequest';
  }
}

module.exports = {
  ResourceNotfound,
  BadRequest,
};
