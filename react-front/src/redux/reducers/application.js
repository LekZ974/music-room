const initialState = {
  isLoading: false,
};

export default function AppReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'REQUEST': {
      if (action.status === 'success' || action.status === 'error') {
        return {
          ...state,
          isLoading: false,
        };
      }
      return {
        ...state,
        isLoading: true,
      };
    }
    default:
      return state;
  }
}
