export function Assert(value: boolean, message: string): asserts value is true {
    if (!value) {
        throw new Error(message)
    }
}
export function AssertDefined<T>(value: T | undefined | null, message: string): asserts value is T {
    if (value === undefined || value === null) {
        throw new Error(message)
    }
}