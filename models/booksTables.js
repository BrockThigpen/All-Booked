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
      description : {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      ISBN : {
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      totalCopies : {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      copiesIN : {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
     
    });
    // force: true will drop the table if it already exists
    Books.sync({force: false}).then(function() {
      // Table created with new data
      return Books.create({
        title: 'Paraxial Light Beams with Angular Momentum',
        authorName : 'Bobby Reck',
        images :     'http://books.google.com/books/content?id=D9VEIQAACAAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;source=gbs_api',
        year :       '1999',
        description : 'Description: Fundamental and applied concepts concerning the ability of light beams to carry a certain mechanical angular momentum (AM) with respect to the propagation axis are reviewed and discussed in this book. In paraxial beams, the total beam AM can be represented as a sum of the spin (SAM) and orbital (OAM) angular momentums.',
        pageNumbers: '112',
        ISBN :       '1604561149',
      });
    });
  
    return Books;
  };
  
  
  