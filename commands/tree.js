function treefn(dirPath) {
    // let desPath;
    if (dirPath === undefined) {
        treeHelper(process.cwd(), " ");
    } else {
        let doesExits = fs.existsSync(dirPath);
        if (doesExits) {
            treeHelper(dirPath, " ");
        } else {
            console.log("Kindly enter the correct path");
            return;
        }
    }
}

function treeHelper(dirPath, indent) {
    let isFile = fs.lstatSync(dirPath).isFile();
    if (isFile === true) {
        let fileName = path.basename(dirPath);
        console.log(indent + "|-----" + fileName);
    } else {
        let dirName = path.basename(dirPath);
        console.log(indent + " -----> " + dirName);
        let childrens = fs.readdirSync(dirPath);
        for (let i = 0; i < childrens.length; i++) {
            let childPath = path.join(dirPath, childrens[i]);
            treeHelper(childPath, indent + "\t");
        }
    }
}

module.exports = {
    treeKey: treefn,
};