import {
  EXAMPLE_ACTION,
  ADD_MESSAGE_ACTION,
  SET_CURRENT_CHAT,
  NEW_CHAT_ACTION,
  DEL_CHAT_ACTION,
} from "../constants"
import { del, addMessage } from "./selectors"

const initialState = {
  showName: false,
  name: "",
  currentChat: 1,
  initialChats: [
    {
      id: 1,
      name: "Joe",
      messages: [
        { text: "Привет!", sender: "bot" },
        { text: "Как дела?", sender: "bot" },
      ],
    },
    {
      id: 2,
      name: "Snoop",
      messages: [
        { text: "Привет!", sender: "bot" },
        { text: "Как дела?", sender: "bot" },
      ],
    },
    {
      id: 3,
      name: "Scott",
      messages: [
        { text: "Привет!", sender: "bot" },
        { text: "Как дела?", sender: "bot" },
      ],
    },
    {
      id: 4,
      name: "Mark",
      messages: [
        { text: "Привет!", sender: "bot" },
        { text: "Как дела?", sender: "bot" },
      ],
    },
  ],
}

export const messageFieldReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE_ACTION:
      return {
        ...state,
        initialChats: addMessage(state, action.payload),
      }

    case EXAMPLE_ACTION:
      return {
        ...state,
        showName: !state.showName,
        name: action.payload,
      }

    case SET_CURRENT_CHAT:
      return {
        ...state,
        currentChat: action.payload,
      }

    case NEW_CHAT_ACTION:
      return {
        ...state,
        initialChats: [
          ...state.initialChats,
          {
            id: state.initialChats.length + 1,
            name: action.payload,
            messages: [
              { text: "Привет!", sender: "bot" },
              { text: "Как дела?", sender: "bot" },
            ],
          },
        ],
      }

    case DEL_CHAT_ACTION:
      return {
        ...state,
        initialChats: del(action.payload, state.initialChats),
      }

    default:
      return state
  }
}
