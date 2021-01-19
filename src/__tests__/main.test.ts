import { add } from "../main";

describe("Tests!", () => {
    describe("add()", () => {
        it.each`
            a               | b           | expected
            ${1}            | ${3}        | ${4}
            ${-4}           | ${5}        | ${1}
            ${480193248209} | ${74278204} | ${480267526413}
        `("should add numbers: $a + $b = $expected", ({ a, b, expected }) => {
            expect(add(a, b)).toBe(expected);
        });
    });
});
