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
    <Label htmlFor={props.name}>
        {props.label}
        {props.required ? (
        <span className="text-red-500 ml-1">*</span>
        ) : (
        <span className="text-gray-400 text-xs ml-1">(optional)</span>
        )}
    </Label>

    <div>
        <Select
        onValueChange={(value) => helpers.setValue(value)}
        value={field.value}
        name={field.name}
        >
        <SelectTrigger
            className=" px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
            <SelectValue placeholder={props.placeholder || ""} />
        </SelectTrigger>

        <SelectContent>
            {props.options.map((option, index) => (
            <SelectItem
                key={index}
                value={option.value}
                className="flex items-center px-3 py-2 cursor-pointer"
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
