module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT,
    username: DataTypes.STRING,
    userpass: DataTypes.STRING,
    email: DataTypes.STRING,
    score: DataTypes.INTEGER
  });
  return User;
};
