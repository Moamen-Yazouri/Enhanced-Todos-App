import { useField } from "formik";
import { Label } from "../ui/label";
import { IOptions } from "./types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import withMotion from "@/HOC/withMotion";

type IProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "name"> & {
name: string;
label: string;
defaultValue?: string;
options: IOptions[];
placeholder?: string;
};

const CustomSelect = (props: IProps) => {
const [field, meta, helpers] = useField<string>(props.name);

return (
    <div className="space-y-2">
    <Label htmlFor={props.name} className="text-white">
        {props.label}
        {props.required ? (
        <span className="text-red-500 ml-1">*</span>
        ) : (
        <span className="text-white text-xs ml-1">(optional)</span>
        )}
    </Label>

    <div>
        <Select
        onValueChange={(value) => helpers.setValue(value)}
        value={field.value}
        name={field.name}
        >
        <SelectTrigger
            className="px-3 py-2 rounded-md border border-white/20 bg-white/10 text-white 
                    focus:outline-none focus:ring-2 focus:ring-orange-500 
                    focus:border-orange-500 placeholder:text-gray-400 
                    transition-colors duration-150"
        >
            <SelectValue placeholder={props.placeholder || ""} />
        </SelectTrigger>

        <SelectContent className="bg-white/10 border border-white/20 text-white backdrop-blur-md shadow-md">
            {props.options.map((option, index) => (
            <SelectItem
                key={index}
                value={option.value}
                className="cursor-pointer px-3 py-2 hover:bg-orange-500/20 focus:bg-orange-500/30 transition-colors"
            >
                {option.label}
            </SelectItem>
            ))}
        </SelectContent>
        </Select>
    </div>

    {meta.touched && meta.error && (
        <p className="text-red-500 text-sm">{meta.error}</p>
    )}
    </div>
);
};

const MotionedSelect = withMotion(CustomSelect);
export default MotionedSelect;
