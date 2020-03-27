import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Project extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  startDate: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  status: string;

  @property({
    type: 'date',
  })
  endDate: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Project>) {
    super(data);
  }
}

export interface ProjectRelations {
  // describe navigational properties here
}

export type ProjectWithRelations = Project & ProjectRelations;
