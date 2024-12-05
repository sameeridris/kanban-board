import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  const response = await fetch(
    '/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo)
  }
  )
  const data = response.json();

  if (!response.ok) {
    throw new Error('invalid API response, check network tab!');
  }
  return data;
}

const signUp = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  const response = await fetch(
    '/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo)
  }
  )
  const data = response.json();

  if (!response.ok) {
    throw new Error('invalid API response, check network tab!');
  }
  return data;
}

export { login, signUp };
