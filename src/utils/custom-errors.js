class ResourceNotfound extends Error {
  constructor(message) {
    super(message);
    this.name = 'ResourceNotfound';
  }
}

module.exports = {
  ResourceNotfound,
};
