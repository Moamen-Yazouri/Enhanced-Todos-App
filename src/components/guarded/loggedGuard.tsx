import { AuthContext } from "@/providers/auth/authContext"
import { useContext } from "react"
import AlreadyLoggedIn from "../alredy-logged/alreadyLogged";
interface IProps {
    children: React.ReactNode
}
const LoggedGuard = (props: IProps) => {
    const {user, loadingUser} = useContext(AuthContext);
    if(!user && !loadingUser) {            
        return (
            props.children
        )
    }
    else if (loadingUser) {
        return null;
    }
    else {
        return <AlreadyLoggedIn />;
    }
    }

export default LoggedGuard