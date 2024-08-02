import type { Schema, Attribute } from '@strapi/strapi';

export interface TaskSubtask extends Schema.Component {
  collectionName: 'components_task_subtasks';
  info: {
    displayName: 'subtask';
    icon: 'check';
  };
  attributes: {
    done: Attribute.Boolean & Attribute.DefaultTo<false>;
    content: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'task.subtask': TaskSubtask;
    }
  }
}
