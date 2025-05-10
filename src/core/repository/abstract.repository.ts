import { Logger, NotFoundException } from '@nestjs/common';
import {
  DeepPartial,
  FindOptionsWhere,
  ObjectLiteral,
  Repository,
} from 'typeorm';

export abstract class AbstractRepository<T extends ObjectLiteral> {
  protected abstract readonly logger: Logger;

  constructor(protected readonly repository: Repository<T>) {}

  async create(data: DeepPartial<T>): Promise<T> {
    const entity = this.repository.create(data);
    return await this.repository.save(entity);
  }

  async findOne(filter: FindOptionsWhere<T>): Promise<T> {
    const entity = await this.repository.findOneBy(filter);

    if (!entity) {
      this.logger.warn('Entity not found with filter', entity);
      throw new NotFoundException('Entity not found');
    }

    return entity;
  }

  async find(filter: FindOptionsWhere<T>): Promise<T[]> {
    return await this.repository.findBy(filter);
  }

  async findOneAndUpdate(
    filter: FindOptionsWhere<T>,
    updateData: DeepPartial<T>,
  ): Promise<T> {
    const entity = await this.repository.findOneBy(filter);

    if (!entity) {
      this.logger.warn('Entity not found for update', entity);
      throw new NotFoundException('Entity not found');
    }

    const updated = this.repository.merge(entity, updateData);
    return await this.repository.save(updated);
  }

  async findOneAndDelete(filter: FindOptionsWhere<T>): Promise<T> {
    const entity = await this.repository.findOneBy(filter);

    if (!entity) {
      this.logger.warn('Entity not found for delete', entity);
      throw new NotFoundException('Entity not found');
    }

    await this.repository.remove(entity);
    return entity;
  }
}
