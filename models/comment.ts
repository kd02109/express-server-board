import { DataTypes, Model, Sequelize } from 'sequelize';
import { DB } from '.';

interface CommentsAttributes {
  comment: string;
  created_at: Date;
}

export default class Comment extends Model<CommentsAttributes> {
  static initiate(sequelize: Sequelize) {
    Comment.init(
      {
        comment: {
          type: DataTypes.TEXT,
          allowNull: false,
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
        modelName: 'Comment',
        tableName: 'comments',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      },
    );
  }

  static associate(db: DB) {
    db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id' });
  }
}
