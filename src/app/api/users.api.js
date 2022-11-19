import Users from "../mockData/participants.json";

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(Users);
        }, 2000);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(Users.find((user) => user._id === id));
        }, 1000);
    });

export default {
    fetchAll,
    getById
};
