class Schedule {
    constructor() {
        this.schedule = {};
    }

    addServer(serverName) {
        this.schedule[serverName] = {};
        this.schedule[serverName]["Monday"] = [];
        this.schedule[serverName]["Tuesday"] = [];
        this.schedule[serverName]["Wednesday"] = [];
        this.schedule[serverName]["Thursday"] = [];
        this.schedule[serverName]["Friday"] = [];
        this.schedule[serverName]["Saturday"] = [];
    }

    modeifySchedule(serverName, weekDay, morningShift, eveningShift) {
        this.schedule[serverName][weekDay][0] = morningShift;
        this.schedule[serverName][weekDay][1] = eveningShift;
    }

    generateRandomShifts() {
        let servers = Object.keys(this.schedule);
        let weekDays = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];

        let randomNumber = 0;

        for (let i = 0; i < servers.length; i++) {
            randomNumber = Math.floor(Math.random() * Math.floor(2));

            for (let j = 0; j < weekDays.length; j++) {
                randomNumber = Math.floor(Math.random() * Math.floor(2));
                this.schedule[servers[i]][weekDays[j]][0] = randomNumber;

                randomNumber = Math.floor(Math.random() * Math.floor(2));
                this.schedule[servers[i]][weekDays[j]][1] = randomNumber;
            }
            randomNumber = Math.floor(Math.random() * Math.floor(2));
        }

        // // phew, monday, morning
        // console.log(this.schedule[servers[0]][weekDays[0]][0], "phew");
        // console.log(this.schedule[servers[0]]);

        // // yanlon, monday
        // console.log(this.schedule[servers[1]][weekDays[0]], "yanlon");
        // console.log(this.schedule[servers[0]]);
    }

    printServerSchedule() {
        console.table(this.schedule);
    }
}
