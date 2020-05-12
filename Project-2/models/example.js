module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    userpass: DataTypes.STRING,
    email: DataTypes.STRING,
    score: DataTypes.INTEGER
  });
  return User;
};
