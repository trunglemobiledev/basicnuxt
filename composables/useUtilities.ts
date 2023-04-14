const useUtilities = () => {

    const toTitleCase = (str: String) => {
        return str.replace(/\w\S*/g, function (txt: String) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };

    // Export functions
    return {
        toTitleCase,
    }
}