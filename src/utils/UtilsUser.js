class UtilsUser {
    static fullName(user) {
        const name = user.name;
        return `${name.first || ''}${name.last ? ` ${name.last}` : ''}`;
    }

    static address(user) {
        const location = user.location;

        if (!location) {
            return user.nat || '';
        }

        let parts = [];
        if (location.street) {
            parts.push(location.street);
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
}

export default UtilsUser;
