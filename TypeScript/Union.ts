function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${typeof padding}'.`);
}

function demonstratePadLeft() {
    try {
        const result1 = padLeft("Hello", 22);  
        const result2 = padLeft("Hello", "!!! ");  
        console.log(result1);
        console.log(result2);
    } catch (error) {
        console.error(error);
    }
}
