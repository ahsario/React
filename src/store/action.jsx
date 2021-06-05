const EXAMPLE_ACTION = "EXAMPLE_ACTION"
const ADD_MESSAGE_ACTION = "ADD_MESSAGE_ACTION"
const SET_CURRENT_CHAT = "SET_CURRENT_CHAT"
const NEW_CHAT_ACTION = "NEW_CHAT_ACTION"
const DEL_CHAT_ACTION = "DEL_CHAT_ACTION"

export const exampleAction = (name) => {
  return {
    type: EXAMPLE_ACTION,
    payload: {
      name,
    },
  }
}

export const addMessageAction = (message) => {
  return {
    type: ADD_MESSAGE_ACTION,
    payload: {
      message,
    },
  }
}

export const setCurrentChatAction = (currentChat) => {
  return {
    type: SET_CURRENT_CHAT,
    payload: {
      currentChat,
    },
  }
}

export const addChatAction = (name) => {
  return {
    type: NEW_CHAT_ACTION,
    payload: {
      name,
    },
  }
}

export const deleteCurrentChatAction = (id) => {
  return {
    type: DEL_CHAT_ACTION,
    payload: {
      id,
    },
  }
}
deleteCurrentChatAction
