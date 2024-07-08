import adddata from "../pageobjects/adddata.js";
import fs from "fs"
let data=fs.readFileSync("./test/testdata/adddata.json")
let cred=JSON.parse(data)

describe("",()=>{
let u=cred.usn
let p=cred.pwd

    it("",async()=>{
        await browser.url("https://practicetestautomation.com/practice-test-login/")
        await adddata.login(u,p) 
    })
})