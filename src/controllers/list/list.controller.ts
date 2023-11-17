import type { LIST_INFO_MODEL_OPTIONAL_ID_TYPE } from '../../models';

import { LIST_ERR_EMAIL_OR_PHONE_MISSING, LIST_ERR_TITLE_MISSING } from '../../errors';
import { ListInfoModel, UserModel } from '../../models';
import { loggerUtil } from '../../utils/logger.util';
import { LIST_INFO_TYPE } from '../../types/list/list.type';
import { Order, where } from 'sequelize';

export type LIST_INFO_WITHOUT_USER_ID_TYPE = Omit<LIST_INFO_TYPE, 'userId'>;

export class ListController {
  constructor(private readonly MAX_ROW_PER_PAGE = parseInt(process.env.MAX_RECORDS_PER_PAGE as string)) {}

  async createList(info: LIST_INFO_MODEL_OPTIONAL_ID_TYPE): Promise<LIST_INFO_WITHOUT_USER_ID_TYPE> {
    if (info.title.length < 0) {
      throw LIST_ERR_TITLE_MISSING;
    } else if (!(info.forEmail || info.forPhone)) {
      throw LIST_ERR_EMAIL_OR_PHONE_MISSING;
    }
    const stat = await ListInfoModel.create(info);

    return {
      id: stat.id,
      title: stat.title,
      description: stat.description,
      forEmail: stat.forEmail,
      forPhone: stat.forPhone,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  async getListsForUser(
    userId: number,
    page: number = 1,
    filter: {
      search?: string[];
      deepSearch?: boolean;
      order?: { type: 'ASC' | 'DESC'; field: string }[];
      startData?: Date;
      endDate?: Date;
    } = {},
  ) {
    let offset = page * this.MAX_ROW_PER_PAGE - this.MAX_ROW_PER_PAGE;
    let order = [['id', 'DESC']] as Order;

    if (Array.isArray(filter.order) && filter.order.length > 0) {
      (order as Array<unknown>).pop();

      filter.order.forEach((o) => {
        (order as Array<unknown>).push([o.field, o.type]);
      });
    }

    const lists = await ListInfoModel.findAll({
      where: {
        userId,
      },
      order,
      offset,
      limit: this.MAX_ROW_PER_PAGE,
    });

    return lists;
  }
}
