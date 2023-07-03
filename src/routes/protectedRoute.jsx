import { logOut } from "../functions";
import { userData } from "../functions/jsonParser";

function Protected({ children }) {
  const user = userData?.token && userData?.role;

  if (!user)
    logOut()
  
    return children;
}
export default Protected;