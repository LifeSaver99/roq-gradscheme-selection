class grads {
    constructor(name, softSkills, degree, technicalSkills, teamWork) {
        this.name = name
        this.softSkills = softSkills
        this.degree = degree
        this.technicalSkills = technicalSkills
        this.teamWork = teamWork
    }

    straigthTalking() {
        this.softSkills += 10
    }
    excellence() {
        this.technicalSkills += 10

    }
    commitment() {
        this.teamWork += 10
    }

    passionate() {
        this.degree += 10
    }
}

const ade = new grads("ade", 67, 85, 88, 79)

class tester {
    constructor(name, javascript, analyticSkills, testAutomation, presentation) {
        this.name = name
        this.javascript = javascript
        this.analyticSkills = analyticSkills
        this.testAutomation = testAutomation
        this.presentation = presentation
    }

    straigthTalking() {
        this.presentation += 10
    }
    excellence() {
        this.testAutomation += 10

    }
    commitment() {
        this.javascript += 10
    }

    passionate() {
        this.analyticSkills += 10
    }
}


const maddy = new tester("maddy", 85, 86, 88, 79)

class academyConsultant {
    constructor(name, poolScore, vsCodeSkills, cliSKills, gitHubSkills) {
        this.name = name
        this.poolScore = poolScore
        this.vsCodeSkills = vsCodeSkills
        this.cliSKills = cliSKills
        this.gitHubSkills = gitHubSkills
    }

    straigthTalking() {
        this.poolScore += 10
    }
    excellence() {
        this.vsCodeSkills += 10

    }
    commitment() {
        this.gitHubSkills += 10
    }

    passionate() {
        this.cliSKills += 10
    }
}


const jakob = new academyConsultant("jakob", 76, 58, 88, 69)

module.exports = {
    grads,
    tester,
    academyConsultant,
    ade,
    maddy,
    jakob

}



