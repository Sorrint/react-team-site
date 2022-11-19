import React, { useEffect, useState } from "react";
import API from "../api";
import ParticipantCard from "./participantCard";

const Team = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);

    return (
        users && (
            <div
                name="team"
                className="w-full h-screen bg-[#0a192f] text-gray-300"
            >
                <div className="flex flex-col justify-center items-center w-full h-full">
                    <div className="sm:text-right py-8 px-4">
                        <p className="text-4xl font-bold inline border-b-4 border-yellow-400">
                            Наша команда
                        </p>
                    </div>
                    <div className="max-w-[1000px] pb-8 text-center">
                        <p>
                            Высокомотивированные опытные эксперты решат задачи
                            любого уровня сложности. Каждый из участников нашей
                            команды подготовлен и проверен в боевых условиях,
                            доказал свою способность поднимать сложные решения.
                            На их счету уже более 120 успешно реализованных
                            проектов.{" "}
                        </p>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                        {users.map((user) => {
                            return (
                                <ParticipantCard key={user._id} user={user} />
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    );
};

export default Team;
