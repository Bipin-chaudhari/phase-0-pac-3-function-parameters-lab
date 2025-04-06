function introduction(name) {
    const introduction = `Hi, my name is ${name}.`
    return introduction;
}

function introductionWithLanguage(name, language) {
    const introduction = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return introduction;
}

function introductionWithLanguageOptional(name, language) {
    const introduction = `Hi, my name is ${name} and I am learning to program in ${language ? language : "JavaScript"}.`
    return introduction;
}