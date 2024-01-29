import { DataTypes, Model, Sequelize } from 'sequelize';
import { DB } from '.';

interface UsersAttributes {
  name: string;
  age: number;
  married: boolean;
  created_at: Date;
  comment?: string;
}

export default class Users extends Model<UsersAttributes> {
  static initiate(sequelize: Sequelize) {
    Users.init(
      {
        name: {
          type: DataTypes.STRING(20),
          allowNull: false,
          unique: true,
        },
        age: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        married: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        comment: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'User',
        tableName: 'users',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      },
    );
  }

  static associate(db: DB) {
    db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' });
  }
}
