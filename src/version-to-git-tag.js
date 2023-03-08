import readPkg from 'read-pkg';

module.exports = async version => {
  if (!version) {
    return null;
  }

  const { name } = await readPkg();
  return `${name}-v${version}`;
};
