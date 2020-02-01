module.exports = function (sequelize, DataTypes) {
  var Books = sequelize.define('books', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    authorName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    desciption : {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    ISBN : {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    images : {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    pageNumbers : {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    year : {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    totalCopies : {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    copiesIN : {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    checkOut : {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    checkIn : {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    dueDate : {
      type: Sequelize.DATE
    },
    freezeTableName: true,
  });

  return Books;
};

// Syncs with DB
Books.sync();
