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
                className="w-full h-full bg-gradient-to-l from-[#201958] to-[#4e54c8] text-gray-300 py-11"
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
                    <div className="max-w-[1000px] grid place-content-center sm:grid-cols-2 gap-y-16 gap-x-8 px-4 py-10">
                        {users.map((user) => {
                            return (
                                <ParticipantCard
                                    key={user._id}
                                    photo={user.photo}
                                    name={user.name}
                                    surname={user.surname}
                                    age={user.age}
                                    about={user.about}
                                    userId={user._id}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    );
};

export default Team;
