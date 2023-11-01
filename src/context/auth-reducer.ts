interface Action {
  type: string;
  payload: Event;
}

export type InitialContext = {
  currentUser: any;
  dispatch: React.Dispatch<any>;
};

export function AuthReducer(state: any, action: Action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, currentUser: action.payload };
    case "LOGOUT":
      return { currentUser: null };
    default:
      return state;
  }
}
