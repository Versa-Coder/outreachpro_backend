import type { Sequelize } from 'sequelize';

export type SEQUELIZE_BOOTSTRAP_INIT_FN = (sequelize: Sequelize) => void;

export type COMMON_TABLE_TYPE = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
};

export type COMMON_TABLE_TYPE_PARANOID = COMMON_TABLE_TYPE & {
  deletedAt: Date;
};
