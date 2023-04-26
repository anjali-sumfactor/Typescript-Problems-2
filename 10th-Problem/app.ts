//10. Write a function that takes a string as input and returns true if it is a valid IPv4 address in dot-decimal notation, and false otherwise.

export function validateIPaddress(ipaddress: string): boolean {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
        return true;
    }
    return false;
}
console.log(validateIPaddress("01.102.103104"));