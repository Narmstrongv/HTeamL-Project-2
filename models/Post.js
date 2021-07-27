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
    }
    }, 
    {
       hooks: {
            // set up beforeCreate lifecycle "hook" functionality
        async beforeCreate(newData) {
            newData.password = await bcrypt.hash(newData.password, 10);
               return newData;
             
           },
           async beforeUpdate(updatedData){
             updatedData.password = await bcrypt.hash(updatedData.password, 10);
             return updatedData; 
           }
        },
        //Defines table config opts
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user' 
    }
);

module.exports = Post;