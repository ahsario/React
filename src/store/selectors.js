export const getState = (state) => state.messageFieldReducer

export function del(id, chat) {
  const arr = chat.filter((el, index) => index !== id - 1)
  return arr
}

export const addMessage = (state, message) => {
  const res = [
    ...state.initialChats.filter((chat) => chat.id != state.currentChat),
    {
      id: state.currentChat,
      name: state.initialChats[state.currentChat - 1].name,
      messages: [
        ...state.initialChats[state.currentChat - 1].messages,
        message,
      ],
    },
  ].sort((a, b) => a.id - b.id)
  return res
}

export const selectGists = (state) => state.gistsReducer.gists
export const selectGistsError = (state) => state.gistsReducer.error
export const selectGistsLoading = (state) => state.gistsReducer.pending
