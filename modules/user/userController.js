var path = require('path');
var db = require(path.resolve('.', 'modules/database/databaseConnector.js'));
var responseGenerator = require(path.resolve('.', 'utils/responseGenerator.js'))
var msg = require(path.resolve('./', 'utils/errorMessages.js'))
var config = require(path.resolve('./', 'config'));
logger = require(path.resolve('./logger'));
var fs = require('fs')
var PDFDocument = require('pdfkit')




exports.get = function (req, res) {
    console.log('TCL: exports.get -> req', req.body);
    var details = req.body;
    // res.writeHead( 200, {
    //     'Content-Type': 'application/pdf',
    //     'Content-Disposition': 'attachment; filename=output.pdf'
    // } );
    var doc = new PDFDocument;
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/pdf');
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Header to force download
    res.setHeader('Content-disposition', 'attachment; filename=Untitled' + new Date() + '.pdf');

    doc.pipe(res);
    // doc.pipe(fs.createWriteStream(path.resolve('./', 'public/insurance/output.pdf')));

    //1. Set a title and pass the X and Y coordinates
    doc.fontSize(25).fillColor('blue').text('My Insurance', 75, 50);

    //2 MetaData to the Pdf
    doc.info = {
        "Title": "My Insurance Pdf",
        "Author": "Predict my Premium",
        "Subject": "Details of Insure"
    };
    doc.moveDown();

    //------------------Details --------------//
    //1. insurance name
    doc.moveDown();
    doc.fontSize(15).fillColor('black').text('Insurance Name :', {
        width: 410,
        align: 'left',
        continued:true,
        lineGap: 5
    });
    doc.fontSize(15).text('   '+details.insuranceName, {
        width: 410,
        
    });
    //2. insuranceBasis
    doc.moveDown();
    doc.fontSize(15).fillColor('black').text('Insurance Basis :', {
        width: 410,
        align: 'left',
        continued:true,
        lineGap: 5
    });
    doc.fontSize(15).text('   '+details.insuranceBasis, {
        width: 410,
        
    });
    //3. equipmentDetail
    doc.moveDown();
    doc.fontSize(15).fillColor('black').text('Equipment Detail :', {
        width: 410,
        align: 'left',
        continued:true,
        lineGap: 5
    });
    doc.fontSize(15).text('   '+details.equipmentDetail, {
        width: 410,
        
    });
    //4. addressLine1
    doc.moveDown();
    doc.fontSize(15).fillColor('black').text('Address Line 1 :', {
        width: 410,
        align: 'left',
        continued:true,
        lineGap: 5
    });
    doc.fontSize(15).text('   '+details.addressLine1, {
        width: 410,
        
    });
    //5. insuredValue
    doc.moveDown();
    doc.fontSize(15).fillColor('black').text('Insured Value :', {
        width: 410,
        align: 'left',
        continued:true,
        lineGap: 5
    });
    doc.fontSize(15).text('   '+details.insuredValue, {
        width: 410,
        
    });
    //6. area
    doc.moveDown();
    doc.fontSize(15).fillColor('black').text('Area :', {
        width: 410,
        align: 'left',
        continued:true,
        lineGap: 5
    });
    doc.fontSize(15).text('   '+details.area, {
        width: 410,
        
    });
    //7. insuranceCoverage
    doc.moveDown();
    doc.fontSize(15).fillColor('black').text('Insurance Coverage :', {
        width: 410,
        align: 'left',
        continued:true,
        lineGap: 5
    });
    doc.fontSize(15).text('   '+details.insuranceCoverage, {
        width: 410,
        
    });

    //8. policyStartDate
    doc.moveDown();
    doc.fontSize(15).fillColor('black').text('Policy Start Date :', {
        width: 410,
        align: 'left',
        continued:true,
        lineGap: 5
    });
    doc.fontSize(15).text('   '+details.policyStartDate, {
        width: 410,
        
    });




    // doc.fontSize(25)
    //     .text('Insurance Details', 100, 100);
    // doc.moveDown()
    // doc.text('This text is centered.', {
    //     width: 410,
    //     align: 'center'
    // })

    // doc.save()
    //     .moveTo(100, 150)
    //     .lineTo(100, 250)
    //     .lineTo(200, 250)
    //     .fill("#FF3300");

    doc.end()

    //     // res.sendFile('public/output.pdf', { root: __dirname });
    //     var file =path.resolve('./', 'insurance/output.pdf');
    //     // var file="http://localhost:6003/output.pdf"
    //   res.download(file);
    // res.send(200,"file created");
}