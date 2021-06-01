function helpfn() {
    console.log(`List of all the command:
        1. node main.js tree "dirpath"
        2. node main.js organize "dirpath
        3. node main.js help
    `);
}

module.exports = {
    helpKey: helpfn,
};