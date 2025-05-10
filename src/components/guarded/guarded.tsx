import { AuthContext } from "@/providers/auth/authContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom";

interface IProps {
    children: React.ReactNode
}
const Guarded = (props: IProps) => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    if(!user) {
        navigate("/access-denied");
        return;
    }

    return (
        props.children
    )
}

export default Guarded