module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // eslint-disable-next-line camelcase
    user_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  User.associate = function(models) {
    User.belongsTo(models.Image, {});
  };

  return User;
};
