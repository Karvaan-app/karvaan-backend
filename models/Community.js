const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const { Post } = require('./Posts');

class Community extends Model {}

Community.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
}, {
  sequelize,
  modelName: 'community',
});



Community.hasMany(Post, {
    foreignKey: "communityId",
    as: 'posts',
    onDelete: 'CASCADE',
});

module.exports = { Community };
