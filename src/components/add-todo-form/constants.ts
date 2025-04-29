import { EPriority } from "@/@types";
import { IOptions } from "../motionedSelect/types";

export const OPTIONS: IOptions[] = [
    {value: "low", label: "Low"},
    {value: "medium", label: "Medium"},
    {value: "high", label: "High"}
]

export const INTIAT_VALUES = {
    title: "",
    description: "",
    expiresAt: new Date(),
    priority: EPriority.MEDIUM,
    hasExpiration: false,
}
