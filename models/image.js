module.exports = function(sequelize, DataTypes) {
  var Image = sequelize.define("Image", {
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 160]
      }
    }
  });

  Image.associate = function(models) {
    Image.hasMany(models.User, {
      onDelete: "cascade"
    });
  };

  return Image;
};
