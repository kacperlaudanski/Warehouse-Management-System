interface RegisterTypes {
  firstName: string | null;
  lastName: string | null;
  email: string;
  password: string;
  phoneNumber: string | null;
}

interface Action<T, P> {
  type: T;
  payload: P;
}

export function registerReducer(
  state: RegisterTypes,
  action: Action<string, string>
) {
  switch (action.type) {
    case "FIRSTNAME":
      return { ...state, firstName: action.payload };
    case "LASTNAME":
      return { ...state, lastName: action.payload };
    case "EMAIL":
      return { ...state, email: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };
    case "PHONE_NUMBER":
      return { ...state, phoneNumber: action.payload };
    default:
      return state;
  }
}

export const INITIAL_STATE: RegisterTypes = {
  firstName: null,
  lastName: null,
  email: "",
  password: "",
  phoneNumber: null,
};
