//pulled from 13.1.5
//more info https://sequelize.org/v5/manual/models-definition.html#configuration

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
//creates model
class User extends Model {
    checkPassword(loginPw){
        return bcrypt.compareSync(loginPw, this.password);
    }
}

//defines table columns/rules
User.init(
    {
        //Defines columns & datatypes
        //these 'id','username', 'email' can be anything
        //the info inside follows sequelize rules visit above for specifications 
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //PW must be at least 4 characters
                len: [4]
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

module.exports = User;