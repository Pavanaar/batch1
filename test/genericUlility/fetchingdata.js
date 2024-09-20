import excel from "exceljs"

class exceltestdata {

    // async readdata(){
    //     //to create a page in excel
    //     const book=new excel.Workbook()
    //     //since book is storing excelpage give .xlsx extention 
    //     //and allow to read that file by ur testsvcript
    //     book.xlsx.readFile("./test/testdata/exceldata.xlsx")
    //     //caccess the sheet which we already created-by passing ur sheet name
    //     const sheet=book.getWorksheet("Sheet1")
    //     //we have identified the sheet now we have to get data from that..
    //     //get data by the cell and row number
    //     //whatever im fetching it sld be in string only so give tostring()
    //     let data=sheet.getRow(1).getCell(1).toString()
    //     //console.log(data);
    //     return data
    // }
    //filepath="./test/testdata/exceldata.xlsx";
    async readdatautil(filepath, sheetname, rowno, cellno) {
        //to create a page in excel
        const book = new excel.Workbook()
        //since book is storing excelpage give .xlsx extention 
        //and allow to read that file by ur testscript
        await book.xlsx.readFile(filepath)
        //caccess the sheet which we already created-by passing ur sheet name
        const sheet = await book.getWorksheet(sheetname)
        //we have identified the sheet now we have to get data from that..
        //get data by the cell and row number
        //ehatever im fetching it sld be in string only so give tostring()
        let data = await sheet.getRow(rowno).getCell(cellno).toString()
        //console.log(data);
        return data
    }


    async writedatautil(filepath, sheetname, rowno, cellno, Text) {
        const book2 = new excel.Workbook()
        await book2.xlsx.readFile(filepath)
        let sheet2 = book2.addWorksheet(sheetname)
        let row = sheet2.getRow(rowno)
        row.getCell(cellno).value = Text
        row.commit()
        await book2.xlsx.writeFile(filepath)
        // await book2.xlsx.writeBuffer()
    }

    async writeData(filepath, sheetName, rowIndex, columnIndex, text) {
        const Workbook = new excel.Workbook();
        await Workbook.xlsx.readFile(filepath).catch(async () => {
            console.log("File Not found");
        });
        let sheet = Workbook.getWorksheet(sheetName)
        if (!sheet) { sheet = Workbook.addWorksheet(sheetName) }
        const row = sheet.getRow(rowIndex)
        row.getCell(columnIndex).value = text
        row.commit()
        await Workbook.xlsx.writeFile(filepath)
    }

}

export default new exceltestdata()