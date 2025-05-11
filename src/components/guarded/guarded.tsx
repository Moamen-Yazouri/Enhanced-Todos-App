import { AuthContext } from "@/providers/auth/authContext"
import { useContext, useEffect} from "react"
import { useNavigate } from "react-router-dom";
import Unauthorized from "../unAuthorized/unAuthorized";

interface IProps {
    children: React.ReactNode
}
const Guarded = (props: IProps) => {
    const {user, loadingUser} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        const loggedOut = localStorage.getItem("logged-out");

        if (loggedOut) {
            localStorage.removeItem("logged-out");
            navigate("/sign-in");
            return;
        }
    }, [user, navigate]);

    if(loadingUser) return null;

    else if(!loadingUser && user) return (props.children);

    else return (
        <Unauthorized />
    );
}

export default Guarded