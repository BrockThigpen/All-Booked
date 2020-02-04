module.exports = function (sequelize, DataTypes) {
  var Books = sequelize.define('Books', {
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
  });

  return Books;
};
// Syncs with DB
Books.sync();
