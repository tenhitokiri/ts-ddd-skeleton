export const evalENVBoolean = (val: string | undefined): boolean => {
    return (val?.toLocaleLowerCase() === "true");
}
