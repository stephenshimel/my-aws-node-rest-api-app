const { Oso } = require('oso');

const { User } = require('./User');

module.exports.may = async (user, action, resource) => {
  const oso = new Oso();
  oso.registerClass(Date);
  oso.registerClass(User);
  await oso.loadFile('policy.polar');
  return oso.isAllowed(user, action, resource);
};