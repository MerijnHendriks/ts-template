/// <reference path="Validation/StringValidator.ts" />
/// <reference path="Validation/LettersOnlyValidator.ts" />
/// <reference path="Validation/ZipCodeValidator.ts" />

// Some samples to try
const strings = [
    "Hello",
    "98052",
    "101"
];

// Validators to use
const validators: { [s: string]: Validation.StringValidator } = {
    "ZIP code": new Validation.ZipCodeValidator(),
    "Letters only": new Validation.LettersOnlyValidator()
};

// Show whether each string passed each validator
for (const s of strings)
{
    for (const name in validators)
    {
        console.log(`"${s}" - ${validators[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
    }
}
