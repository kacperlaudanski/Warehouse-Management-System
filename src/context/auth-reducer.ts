interface Action<T, P> {
  type: T;
  payload: P;
}

export type InitialContext = {
  currentUser: any;
  dispatch: React.Dispatch<any>;
};

export function AuthReducer(state: any, action: Action<string, Event>) {
  switch (action.type) {
    case "LOGIN":
      return {currentUser: action.payload};
    case "LOGOUT":
      return { currentUser: null };
    default:
      return state;
  }
}
