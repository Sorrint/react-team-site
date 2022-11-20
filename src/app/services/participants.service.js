import API from "../api";

const participantService = {
    getAll: async () => {
        const data = await API.users.fetchAll();
        return data;
    },
    getById: async (userId) => {
        const data = await API.users.getById(userId);
        return data;
    },
    getFavourites: async (userIds) => {
        const data = Promise.all(
            userIds.map(async (id) => {
                return await API.users.getById(id);
            })
        );

        return data;
    }
};

export default participantService;
