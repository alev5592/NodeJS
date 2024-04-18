import { log } from "node:console"
import * as fs from "node:fs/promises"

fs.readFile("file1.txt",{ encoding:"utf-8"})
    .then((file1Data) => {
        console.log("file1Data:", file1Data);
    })

    .then(() => fs.readFile("file2.txt", {encoding: "utf-8"}))
    .then((file2Data) => console.log("file2Data: ", file2Data))

    .then(() => fs.readFile("file3.txt", {encoding: "utf-8"}))
    .then((file3Data) => console.log("file3Data: ", file3Data))

    .catch((error) => {
        console.log(error);
    })