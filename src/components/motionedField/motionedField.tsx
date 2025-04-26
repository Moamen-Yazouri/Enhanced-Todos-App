import { useState } from "react";
import { useField } from "formik"
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Eye, EyeOff } from "lucide-react";
import withMotion from "@/HOC/withMotion";
interface IStyle {
    input: string,
    label: string,
}
type IProps = Omit <
    React.InputHTMLAttributes<HTMLInputElement>,
    "name"
> &
{
    name: string,
    label: string,
    isPassword: boolean,
    styles?: IStyle,
}


const motionField = (props: IProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [field, meta] = useField<string>(props.name);
    
    return (
        <div className="space-y-2">
            <Label htmlFor={props.name} className={props.styles ? `${props.styles.label}` : "my-2"}>
                {
                    props.label 
                }
                {
                    props.required
                        ? <span className="text-red-500 ml-1">*</span>
                        :<span className="text-gray-400 text-xs ml-1">(optional)</span>
                }

            </Label>
            <div className="relative">
                <Input
                    id={props.name}
                    type={props.isPassword ? (showPassword ? "text" : "password") : props.type}
                    {...field}
                    {...props}
                    className={props.styles ? props.styles.input : "my-2"}
                />
                {
                    props.isPassword && (
                        <div>
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-transparent"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                            {
                                showPassword ? (<EyeOff />) : (<Eye/>)
                            }   
                            </Button>
                        </div>
                    )
                }
            </div>
            {
                meta.touched && meta.error && (
                    <p className="text-sm text-red-500 mt-1">{meta.error}</p>
                )
            }
        </div>
    )
}
const MotionedField = withMotion(motionField);

export default MotionedField;