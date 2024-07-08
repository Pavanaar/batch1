import excel from "../genericUlility/excel.js";
describe("read utility",async()=>{
    it("readdata and write",async()=>{
    
       // await excel.readdata("./test/testdata/exceldata.xlsx","Sheet1",1,1)
        console.log(await excel.readdata("./test/testdata/exceldata.xlsx","Sheet1",1,2));
        await excel.writedataa("./test/testdata/exceldata.xlsx","Sheet4",1,2,"wdio")
    })
})