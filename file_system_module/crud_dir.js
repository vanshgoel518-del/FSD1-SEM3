import fs from "fs";

fs.mkdir("./myfolder", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Folder Created");

    fs.writeFile("./myfolder/index.txt", "ELCE_A", (err) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log("File created");

        fs.readdir("./myfolder", { encoding: "utf-8" }, (err, data) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log("Data: ", data);
        });
    });
});