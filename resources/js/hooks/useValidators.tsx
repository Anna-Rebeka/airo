export const ValidateFName = function (entry: string): boolean {
    // ziadne specialne znaky (-)
    let regex = '^[a-z]+';
    let result = entry.match(regex);
    return result != null && result[0] == result.input;
}

export const ValidateLName = function (entry: string) {
    // na zaciatku velke pismeno, zvysok male pismena alebo specialne znaky (-, \\s)
    let regex = '[A-Z][a-z]+\\s?[-]?\\s?[A-Za-z]+';
    let result = entry.match(regex);
    return result != null && result[0] == result.input;
}
export const ValidateEmail = function (entry: string): boolean {
    /*'[a-zA-Z0-9-._,?*+]+';   <-- username check, since it is email, different is used */
    //na ziaciatku pismena+cisla, niekde @ za nim pismena+cisla, ., domena 2-5 znakov
    let regex = '^[a-zA-Z0-9].*[@][a-zA-Z0-9]+.[a-z]{2,10}$';
    let result = entry?.match(regex);
    return result != null && result[0] == result.input;
}
export const ValidatePW = function (entry: string) {
    // musi obsahovat aspon 1 cislo, aspon 1 velke pismeno a mat aspon 8 znakov dlzku
    let regex = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[A-Z])[A-Za-z\\d]{8,}$";
    let result = entry.match(regex);
    return result != null && result[0] == result.input;
}
