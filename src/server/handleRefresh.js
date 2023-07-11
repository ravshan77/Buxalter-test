export const handleRefresh = () => {
    localStorage.clear();
    sessionStorage.clear()
    document.location.reload();
  }