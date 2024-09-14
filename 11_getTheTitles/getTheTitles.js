const getTheTitles = function(...args) {
    let titles = [];

    args.forEach(element => {
        element.forEach(nestedElement => {
            titles.push(nestedElement.title);
        })
    })

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
