export const useAuth = () => {
  const auth = JSON.parse(sessionStorage.getItem("user"))
    return auth && auth.token;
};
  
export const useLogOut = () => {
  sessionStorage.removeItem("user");
  window.location.reload()
}
