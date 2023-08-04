var fs = require("fs");
var path = require("path");
var rootdir = process.env.PWD;
var valuesPath = "/platforms/android/app/src/main/res/values/";
var themesFile = "themes.xml";
var destFile = path.join(rootdir, valuesPath, themesFile);
var destDir = path.dirname(destFile);

module.exports = function (context) {
    console.log("*************************************");
    console.log(`before_plugin_install running`);
    console.log("*************************************");

    if (fs.existsSync(destDir)) {
        if (!fs.existsSync(destFile)) {
            console.log("*************************************");
            console.log(`creating new  ${destFile}`);
            console.log("*************************************");
            fs.writeFile(
                destFile,
                '<?xml version="1.0" encoding="utf-8"?>\n<resources>\n<style name="MyTheme" parent="android:Theme.Holo.Light">\n</style>\n</resources>',
                function (err) {
                    if (err) {
                        console.error("writeFile error" + err);
                    }
                    console.log(`${themesFile} created!`);
                }
            );
        } else {
            console.log(`skipping, file ${themesFile}  exists`);
        }
    } else {
        console.log("skipping, android platform not found");
    }
};