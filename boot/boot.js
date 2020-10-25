const readline = require("readline");

process.on('uncaughtExceptionMonitor', (err, origin) => {
    npmlog.error("Boot", "--- HSI Boot Loader ---")
    npmlog.error("Boot", "An error has occured. See details below.")
    npmlog.error("Boot", "Error Details:")
    npmlog.error("Boot", `${err} ${err.message} ${err.stack}`)
    npmlog.error("Boot", "Origin of the error")
    npmlog.error("Boot", origin)
    npmlog.error("Boot", "You may need to update this application.")
    npmlog.error("Boot", "Go to advanced options. Then choose Update Application. [Select Option 2, Then 1.]")
    npmlog.error("Boot", "Writing Error Data To File.")
    const fs = require("fs")
    fs.writeFileSync("./hbltraceback.txt", `An Exception Has occured. The error details follows.\n${err.title}\n${err.message}\n${err.stack}`)
    npmlog.error("Boot", "Complete.")
    npmlog.error("Boot", "Press any key to quit.")
});

//█▒
const readlinefunction = function (ans) {
    if (ans == "2") {
        npmlog.info("Boot", "------------------------------- HSI Boot Loader -------------------------------")
        npmlog.info("Boot", "███████████████████████████████████████████████████████████████████████████████")
        npmlog.info("Boot", "█                                                                             █▒")
        npmlog.info("Boot", "█ 1. Update Application                                                       █▒")
        npmlog.info("Boot", "█                                                                             █▒")
        npmlog.info("Boot", "█ 2. Update Bootloader                                                        █▒")
        npmlog.info("Boot", "█                                                                             █▒")
        npmlog.info("Boot", "█ 3. Diagnostics Data                                                         █▒")
        npmlog.info("Boot", "█                                                                             █▒")
        npmlog.info("Boot", "█ 4. Test Exception - This causes the error handler to run.                   █▒")
        npmlog.info("Boot", "█                                                                             █▒")
        npmlog.info("Boot", "███████████████████████████████████████████████████████████████████████████████▒")
        npmlog.info("Boot", "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒")
        npmlog.info("Boot", "Type Your Option Here: ")
        rl.question("", (ans) => {
            if (ans == "4") {
                NonExistentFunction()
            } else if (ans == "1") {

            }
        })
    }
}
const npmlog = require("npmlog");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
npmlog.heading = "HBCI"
npmlog.info("Boot", "------------------------------- HSI Boot Loader -------------------------------")
npmlog.info("Boot", "███████████████████████████████████████████████████████████████████████████████")
npmlog.info("Boot", "█                                                                             █▒")
npmlog.info("Boot", "█ 1. Launch Application Listed in hsi-package.json                            █▒")
npmlog.info("Boot", "█                                                                             █▒")
npmlog.info("Boot", "█ 2. Advanced Options                                                         █▒")
npmlog.info("Boot", "█                                                                             █▒")
npmlog.info("Boot", "█ 3. Network Boot - Downloads the files and runs the files.                   █▒")
npmlog.info("Boot", "█                                                                             █▒")
npmlog.info("Boot", "███████████████████████████████████████████████████████████████████████████████▒")
npmlog.info("Boot", "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒")
npmlog.info("Boot", "Type Your Option Here: ")
rl.question("", ans => { readlinefunction(ans) })