const fs = require("fs");
const path = require("path");

class Logger {
    constructor() {
        this.rootPath = path.resolve("./");
        this.folderPath = path.join(this.rootPath, "logs");

        if (!fs.existsSync(this.folderPath)) {
            fs.mkdir(this.folderPath, {}, (err) => {
                if (err) {
                    console.log(colors.red("Dossier existe"));
                }

                this.info("Dossier logs créé");
            });
        }
    }

    info(msg) {
        this.writeLog(msg, "info");
    }

    log(msg) {
        this.writeLog(msg, "log");
    }

    warn(msg) {
        this.writeLog(msg, "warn");
    }

    error(msg) {
        this.writeLog(msg, "error");
    }

    writeLog(msg, level) {
        const today = new Date();
        const date = `${today.getFullYear()}.${today.getMonth()}.${today.getDate()}`;

        const fileName = `${level}_${date}.log`;
        const filePath = path.join(this.folderPath, fileName);

        if (!fs.existsSync(filePath)) {
            fs.writeFile(filePath, msg + "\n", "utf-8", () => {
                console.log(date, msg);
            });
        } else {
            fs.appendFile(filePath, msg + "\n", "utf-8", () => {
                console.log(date, msg);
            });
        }
    }
}
module.exports = Logger;
