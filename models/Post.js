const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            len: [1]
        }
    },
    body:{
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            len: [10]
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    }
    }, 
    {

        //Defines table config opts
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post' 
    }
);

module.exports = Post;