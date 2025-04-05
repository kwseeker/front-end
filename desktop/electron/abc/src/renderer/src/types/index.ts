export type LanguageVarious =
  | 'zh-CN'
  | 'zh-TW'
  | 'el-GR'
  | 'en-US'
  | 'es-ES'
  | 'fr-FR'
  | 'ja-JP'
  | 'pt-PT'
  | 'ru-RU'

export interface Shortcut {
  // 快捷键名称
  key: string
  // 快捷键的按键组合
  shortcut: string[]
  editable: boolean
  enabled: boolean
  // 是否系统快捷键
  system: boolean
}

// 助手
export type Assistant = {
  id: string
  name: string
  emoji?: string
  // LLM 提示词
  prompt: string
  topics: Topic[]
  type: string
  // knowledge_bases?: KnowledgeBase[]
  // description?: string
  // model?: Model
  // defaultModel?: Model
  // settings?: Partial<AssistantSettings>
  // messages?: AssistantMessage[]
  // enableWebSearch?: boolean
  // enableGenerateImage?: boolean
}

// 助手中的聊天主题
export type Topic = {
  id: string
  assistantId: string
  name: string
  createdAt: string
  updatedAt: string
  messages: Message[]
  pinned?: boolean
  prompt?: string
  isNameManuallyEdited?: boolean
}

export type Message = {
  id: string
  assistantId: string
  role: 'user' | 'assistant'
  content: string
  // reasoning_content?: string
  // translatedContent?: string
  topicId: string
  createdAt: string
  status: 'sending' | 'pending' | 'searching' | 'success' | 'paused' | 'error'
  modelId?: string
  // model?: Model
  // files?: FileType[]
  // images?: string[]
  // usage?: OpenAI.Completions.CompletionUsage
  // metrics?: Metrics
  // knowledgeBaseIds?: string[]
  // type: 'text' | '@' | 'clear'
  // isPreset?: boolean
  // mentions?: Model[]
  // askId?: string
  // useful?: boolean
  // error?: Record<string, any>
  // enabledMCPs?: MCPServer[]
  // metadata?: {
  //   // Gemini
  //   groundingMetadata?: any
  //   // Perplexity
  //   citations?: string[]
  //   // Web search
  //   webSearch?: WebSearchResponse
  //   // MCP Tools
  //   mcpTools?: MCPToolResponse[]
  //   // Generate Image
  //   generateImage?: GenerateImageResponse
  // }
  // // 多模型消息样式
  // multiModelMessageStyle?: 'horizontal' | 'vertical' | 'fold' | 'grid'
  // // fold时是否选中
  // foldSelected?: boolean
}

export enum ThemeMode {
  light = 'light',
  dark = 'dark',
  auto = 'auto' // 根据系统 Theme 选择
}
