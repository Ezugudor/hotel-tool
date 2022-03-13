import { ChangeEvent, useState } from "react";

export const useInput = (intialValue: string | number = "", inputType = "num") => {
    const [value, setValue] = useState(intialValue);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        let actualInput = e.target.value;
        switch (inputType) {
            case "num":
                if (actualInput.match(/[^0-9]+/g)) {
                    return false;
                }
                break;
        }
        setValue(actualInput)

    }
    return { value, onChange };
}