import excel from "exceljs"
// to create a page in excel
// const book=new excel.Workbook()
// book.xlsx.readFile("./test/testdata/exceldata.xlsx")
// const sheet=book.getWorksheet("Sheet1")
// let data=sheet.getRow(1).getCell(1).toString()
class exceluti{
 async readdata(filepath,sheetname,rowno,cellno){
    const book=new excel.Workbook()
    await book.xlsx.readFile(filepath)
    const sheet=book.getWorksheet(sheetname)
    let row=await sheet.getRow(rowno)
    let data=row.getCell(cellno).toString()
    return data
 }

 async writedataa(filepath,sheetname,rowno,cellno,message){
    const book=new excel.Workbook()
    await book.xlsx.readFile(filepath)
    const sheet=book.addWorksheet(sheetname)
    let row=await sheet.getRow(rowno)
    row.getCell(cellno).value=message
    row.commit()
    await book.xlsx.writeFile(filepath)

 }
}
export default new exceluti()