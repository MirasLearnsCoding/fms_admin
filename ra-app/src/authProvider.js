const authProvider = {
    login: ({ username, password }) => {
      // Replace with your authentication logic
      if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('auth', JSON.stringify({ username }));
        return Promise.resolve();
      }
      return Promise.reject(new Error('Invalid credentials'));
    },
    logout: () => {
      localStorage.removeItem('auth');
      return Promise.resolve();
    },
    checkAuth: () =>
      localStorage.getItem('auth') ? Promise.resolve() : Promise.reject(),
    checkError: () => Promise.resolve(),
    getPermissions: () => Promise.resolve(),
  };
export default authProvider;