const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const { Community } = require('./Community');


class Post extends Model {}

Post.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
    },
    upvotes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    downvotes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
}, {
    sequelize,
    modelName: 'post',
})

Post.belongsTo(Community, {
    foreignKey: "communityId",
    as: 'community',
    onDelete: 'CASCADE',
});

module.exports = {Post}
