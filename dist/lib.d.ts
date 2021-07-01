export declare function sum(num1: number, num2: number): number;
interface IJStest {
    name: string;
    surname: string;
}
export declare class JStest implements IJStest {
    constructor({ name, surname }: {
        name?: string | undefined;
        surname?: string | undefined;
    });
    name: string;
    surname: string;
    fullName(): string;
}
export {};
