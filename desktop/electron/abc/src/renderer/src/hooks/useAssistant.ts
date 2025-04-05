import { useAppSelector } from '@renderer/store'

// 从 state 中获取是否助手列表
// export function useAssistants() {
//   const { assistants } = useAppSelector((state) => state.assistants)
//   const dispatch = useAppDispatch()
//   return {
//     assistants,
//     updateAssistants: (assistants: Assistant[]) => dispatch(updateAssistants(assistants)),
//     addAssistant: (assistant: Assistant) => dispatch(addAssistant(assistant)),
//     removeAssistant: (id: string) => {
//       dispatch(removeAssistant({ id }))
//       const assistant = assistants.find((a) => a.id === id)
//       const topics = assistant?.topics || []
//       topics.forEach(({ id }) => TopicManager.removeTopic(id))
//     }
//   }
// }

// 通过助手ID从state查询助手信息并提供更新助手配置（比如使用模型）修改助手下面主题的函数
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useAssistant(id: string) {
  const assistant = useAppSelector(
    // state 即 initState 值的引用，不过可能已经不是原对象了
    (state) => state.assistants.assistants.find((a) => a.id === id) as Assistant
  )
  const dispatch = useAppDispatch()
  const { defaultModel } = useDefaultModel()

  return {
    assistant,
    model: assistant?.model ?? assistant?.defaultModel ?? defaultModel,
    addTopic: (topic: Topic) => dispatch(addTopic({ assistantId: assistant.id, topic })),
    removeTopic: (topic: Topic) => {
      TopicManager.removeTopic(topic.id)
      dispatch(removeTopic({ assistantId: assistant.id, topic }))
    },
    moveTopic: (topic: Topic, toAssistant: Assistant) => {
      dispatch(
        addTopic({ assistantId: toAssistant.id, topic: { ...topic, assistantId: toAssistant.id } })
      )
      dispatch(removeTopic({ assistantId: assistant.id, topic }))
      // update topic messages in database
      db.topics
        .where('id')
        .equals(topic.id)
        .modify((dbTopic) => {
          if (dbTopic.messages) {
            dbTopic.messages = dbTopic.messages.map((message) => ({
              ...message,
              assistantId: toAssistant.id
            }))
          }
        })
    },
    updateTopic: (topic: Topic) => dispatch(updateTopic({ assistantId: assistant.id, topic })),
    updateTopics: (topics: Topic[]) =>
      dispatch(updateTopics({ assistantId: assistant.id, topics })),
    removeAllTopics: () => dispatch(removeAllTopics({ assistantId: assistant.id })),
    setModel: (model: Model) => dispatch(setModel({ assistantId: assistant.id, model })),
    updateAssistant: (assistant: Assistant) => dispatch(updateAssistant(assistant)),
    updateAssistantSettings: (settings: Partial<AssistantSettings>) => {
      dispatch(updateAssistantSettings({ assistantId: assistant.id, settings }))
    }
  }
}
