var UserSession = (function () {
  var token: string | null = null;

  var getToken = function () {
    if (token) return token;
    var tokenfromLocalStorage: string | null = localStorage.getItem('token');
    if (tokenfromLocalStorage) return tokenfromLocalStorage;
    return null;
  };

  var setToken = function (access_token: string) {
    token = access_token;
    localStorage.setItem('token', token);
  };

  var removeToken = function () {
    localStorage.removeItem('token');
  };

  return {
    getToken: getToken,
    setToken: setToken,
    removeToken: removeToken,
  };
})();

export default UserSession;
