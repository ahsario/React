export const getState = (store) => store

export function del(id, chat) {
  const arr = [...[...chat].slice(0, id - 1), ...[...chat].slice(id)]
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
