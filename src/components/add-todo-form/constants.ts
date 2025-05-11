import { ECategory, EPriority } from "@/@types";
import { IOptions } from "../motionedSelect/types";

export const INTIAT_VALUES = {
    title: "",
    description: "",
    expiresAt: undefined,
    priority: EPriority.MEDIUM,
    hasExpiration: false,
    category: ECategory.Personal,
}
