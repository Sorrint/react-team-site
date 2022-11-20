const FAVOURITE_KEY = "fav-users";

export function getFavouriteUsers() {
    return JSON.parse(localStorage.getItem(FAVOURITE_KEY));
}

export function setFavouriteUser(userId) {
    const users = JSON.parse(localStorage.getItem(FAVOURITE_KEY));
    if (!users) {
        const arr = [userId];
        return localStorage.setItem(FAVOURITE_KEY, JSON.stringify(arr));
    }
    if (users.indexOf(userId) === -1) {
        users.push(userId);
    }
    return localStorage.setItem(FAVOURITE_KEY, JSON.stringify(users));
}

export function removeFavouriteUser(userId) {
    const users = getFavouriteUsers();
    if (users.length === 1) {
        return localStorage.removeItem(FAVOURITE_KEY);
    }
    const arr = users.filter((u) => u !== userId);
    return localStorage.setItem(FAVOURITE_KEY, JSON.stringify(arr));
}
