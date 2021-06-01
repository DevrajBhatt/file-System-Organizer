function organizefn(dirPath) {
    let desPath;
    if (dirPath === undefined) {
        desPath = process.cwd();
    } else {
        let doesExits = fs.existsSync(dirPath);
        if (doesExits) {
            desPath = path.join(dirPath, "organized_files");
            if (fs.existsSync(desPath) === false) {
                fs.mkdirSync(desPath);
            }
        } else {
            console.log("Kindly enter the correct path");
            return;
        }
    }
    organizeHelper(dirPath, desPath);
}

function organizeHelper(src, dest) {
    let childName = fs.readdirSync(src);
    for (let i = 0; i < childName.length; i++) {
        let childAddress = path.join(src, childName[i]);
        let isFile = fs.lstatSync(childAddress).isFile;
        if (isFile) {
            // console.log(childName[i]);
            let category = getCategory(childName[i]);
            console.log(childName[i], " belongs to --> ", category);
            sendFile(childAddress, dest, category);
        }
    }
}

function getCategory(name) {
    let ext = path.extname(name);
    ext = ext.slice(1);
    for (let type in types) {
        let currentTypeArray = types[type];
        for (let i = 0; i < currentTypeArray.length; i++) {
            if (ext === currentTypeArray[i]) {
                return type;
            }
        }
    }
    return "other type";
}

function sendFile(srcFilePath, dest, category) {
    let categoryPath = path.join(dest, category);
    if (fs.existsSync(categoryPath) === false) {
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(fileName, " copied to -> ", category);
}

module.exports = {
    organizeKey: organizefn,
};