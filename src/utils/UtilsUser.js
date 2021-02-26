import { sanitizeString } from 'utils/UtilsString';

export function composeFullName(user) {
    if (!user || !user.name) {
        return '';
    }

    const name = user.name;
    return `${sanitizeString(name.first)}${name.last ? ` ${name.last}` : ''}`;
}

export function composeAddress(user) {
    if (!user) {
        return '';
    }

    const location = user.location;

    if (!location) {
        return sanitizeString(user.nat);
    }

    let parts = [];
    if (location.street) {
        parts.push(`${location.street.number} ${location.street.name}`);
    }
    if (location.city) {
        parts.push(location.city);
    }
    if (location.state) {
        parts.push(location.state);
    }
    if (user.nat) {
        parts.push(user.nat);
    }
    if (location.postcode) {
        parts.push(location.postcode);
    }

    return parts.join(', ');
}
