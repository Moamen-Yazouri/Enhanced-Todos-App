import { AuthContext } from "@/providers/auth/authContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom";
interface IProps {
    children: React.ReactNode
}
const LoggedGuard = (props: IProps) => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    if(user) {
        navigate("/already-logged");
        return;
    }
    return (
        props.children
    )
}

export default LoggedGuard