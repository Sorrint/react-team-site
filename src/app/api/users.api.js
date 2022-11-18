import Users from '../mockData/participants.json'

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(Users);
        }, 2000);
    });

export default {
    fetchAll
}