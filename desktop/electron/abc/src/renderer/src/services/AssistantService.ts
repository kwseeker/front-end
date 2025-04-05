import i18n from '@renderer/i18n'
import { Assistant, Topic } from '@renderer/types'
import { uuid } from '@renderer/utils'

// 在 state 初始状态中调用，其实是创建默认助手配置信息
export function getDefaultAssistant(): Assistant {
  return {
    id: 'default',
    name: i18n.t('chat.default.name'),
    emoji: '⭐️',
    prompt: '',
    topics: [getDefaultTopic('default')],
    type: 'assistant'
  }
}

// 新建默认主题
export function getDefaultTopic(assistantId: string): Topic {
  return {
    id: uuid(),
    assistantId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    name: i18n.t('chat.default.topic.name'),
    // 历史消息
    messages: [],
    isNameManuallyEdited: false
  }
}
