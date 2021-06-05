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
    case "ADD_MESSAGE_ACTION":
      return {
        ...state,
        initialChats: [
          ...state.initialChats.filter((chat) => chat.id != state.currentChat),
          {
            id: state.currentChat,
            name: state.initialChats[state.currentChat - 1].name,
            messages: [
              ...state.initialChats[state.currentChat - 1].messages,
              action.payload.message,
            ],
          },
        ].sort((a, b) => a.id - b.id),
      }

    case "EXAMPLE_ACTION":
      return {
        ...state,
        showName: !state.showName,
        name: action.payload.name,
      }

    case "SET_CURRENT_CHAT":
      return {
        ...state,
        currentChat: action.payload.currentChat,
      }

    case "NEW_CHAT_ACTION":
      return {
        ...state,
        initialChats: [
          ...state.initialChats,
          {
            id: state.initialChats.length + 1,
            name: action.payload.name,
            messages: [
              { text: "Привет!", sender: "bot" },
              { text: "Как дела?", sender: "bot" },
            ],
          },
        ],
      }

    case "DEL_CHAT_ACTION":
      return {
        ...state,
        initialChats: [
          ...[...state.initialChats].slice(0, action.payload.id - 1),
          ...[...state.initialChats].slice(action.payload.id),
        ],
      }

    default:
      return state
  }
}
