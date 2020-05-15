module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT,
    username: DataTypes.STRING,
    userpass: DataTypes.STRING,
    email: DataTypes.STRING,
    shelter: DataTypes.INTEGER,
    evac: DataTypes.INTEGER,
    vehicle: DataTypes.INTEGER,
    cash: DataTypes.INTEGER,
    food: DataTypes.INTEGER,
    medication: DataTypes.INTEGER,
    sanitizer: DataTypes.INTEGER,
    toiletries: DataTypes.INTEGER,
    masks: DataTypes.INTEGER,
    water: DataTypes.INTEGER,
    score: DataTypes.FLOAT,
    // eslint-disable-next-line camelcase
    image_url: DataTypes.STRING
  });
  return User;
};
