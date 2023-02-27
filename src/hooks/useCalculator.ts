import { useState } from "react";
import { evaluate } from "mathjs";

export default function UseCalculatorService() {
    const [value, setValue] = useState<string>("");
    const [displayValue, setDisplayValue] = useState<string>("");

    const enter = function (val: string): void {
        if (val === "x") {
            setValue(value + "*");
        } else {
            setValue(value + val);
        }

        setDisplayValue(displayValue + val);
    }

    const reset = function (): void {
        setValue("");
        setDisplayValue("");
    }

    const remove = function (): void {
        if (value.length === 1) {
            setValue("");
            setDisplayValue("");
        } else {
            setValue(value.substring(0, value.length - 1));
            setDisplayValue(displayValue.substring(0, value.length - 1));
        }
    }

    const equal = function (): void {
        var result: number = evaluate(value);
        setValue(result.toString());
        setDisplayValue(result.toString());
    }

    return { displayValue, enter, reset, remove, equal };
}