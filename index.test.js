const index = require ('./index')

let ade = index.ade
let jakob = index.jakob
let maddy = index.maddy

describe(" THE TEST GROUP FOR GRADUATE ADE", ()=>{

    test("test that ade softskills has increased after gaining straigthTalking attributes",() =>{
        ade.softSkills = 67
        ade.straigthTalking()
        expect(ade.softSkills).toBe(77)
        ade.softSkills = 67
    })

    test("test that ade technicalSkills has increased after gaining excellence attributes",() =>{
        ade.technicalSkills = 88
        ade.excellence()
        expect(ade.technicalSkills).toBe(98)
        ade.technicalSkills = 88
    })

    test("test that ade teamWork has increased after gaining commitment attributes",() =>{
        ade.teamWork = 79
        ade.commitment()
        expect(ade.teamWork).toBe(89)
        ade.softSkills = 79
    })

    test("test that ade degree has increased after gaining passionate attributes",() =>{
        ade.degree = 85
        ade.passionate()
        expect(ade.degree).toBe(95)
        ade.degree = 85
    })

})

    
describe("THE TEST GROUP FOR ACADEMY CONSULTANT JAKOB", () =>{

    test("test that jakob poolScore has increased after gaining straigthTalking attributes",() =>{
        jakob.poolScore = 76
        jakob.straigthTalking()
        expect(jakob.poolScore).toBe(86)
        jakob.poolScore = 76
    })

    test("test that jakob vsCodeSkills has increased after gaining excellence attributes",() =>{
        jakob.vsCodeSkills = 58
        jakob.excellence()
        expect(jakob.vsCodeSkills).toBe(68)
        jakob.vsCodeSkills = 58
    })

    test("test that jakob gitHubSkills has increased after gaining commitment attributes",() =>{
        jakob.gitHubSkills = 69
        jakob.commitment()
        expect(jakob.gitHubSkills).toBe(79)
        jakob.gitHubSkills = 69
    })

    test("test that ade cliSkills has increased after gaining passionate attributes",() =>{
        jakob.cliSKills = 88
        jakob.passionate()
        expect(jakob.cliSKills).toBe(98)
        jakob.cliSKills = 88
    })

})

describe("THE TEST GROUP FOR TESTER MADDY", ()=>{

    
    test("test that maddy presentation has increased after gaining straigthTalking attributes",() =>{
        maddy.presentation = 79
        maddy.straigthTalking()
        expect(maddy.presentation).toBe(89)
        maddy.presentation = 79
    })

    test("test that maddy testAutomation has increased after gaining excellence attributes",() =>{
        maddy.testAutomation = 88
        maddy.excellence()
        expect(maddy.testAutomation).toBe(98)
        maddy.testAutomation = 88
    })

    test("test that maddy javascript has increased after gaining commitment attributes",() =>{
        maddy.javascript = 85
        maddy.commitment()
        expect(maddy.javascript).toBe(95)
        maddy.javascript = 85
    })

    test("test that maddy analyticSkills has increased after gaining passionate attributes",() =>{
        maddy.analyticSkills = 86
        maddy.passionate()
        expect(maddy.analyticSkills).toBe(96)
        maddy.analyticSkills = 86
    })


})
    



