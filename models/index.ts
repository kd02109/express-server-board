import { Sequelize } from 'sequelize';
import config from '../config/config';
import User from './user';
import Comment from './comment';

export interface DB {
  sequelize?: Sequelize;
  User?: typeof User;
  Comment?: typeof Comment;
}

const db: DB = {};

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: 'mysql',
    timezone: '+09:00', // MySQL 내부의 디폴트 시간 UTC를 한국 시간으로 바꿔주기 위해
  },
);

db.sequelize = sequelize;
db.User = User;
db.Comment = Comment;

User.initiate(sequelize);
Comment.initiate(sequelize);

User.associate(db);
Comment.associate(db);

export default db;
