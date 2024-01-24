// function saveAsPDF() {
//     const editedDate = document.getElementById('date').innerText;
//     const element = document.getElementById('editableContent');
//
//     // Створення нового об'єкту jsPDF
//     const pdf = new jsPDF({
//         unit: 'mm',
//         format: 'a4',
//         orientation: 'portrait'
//     });
//
//     // Отримання HTML-коду з елементу та вставка його у pdf
//     pdf.html(element, {
//         callback: function (pdf) {
//             // Зберігання PDF
//             pdf.save('myfile.pdf');
//         },
//         x: 10,
//         y: 10
//     });
// }



console.log('rrr')
import { jsPDF } from "jspdf";
function saveAsPDF() {
    const editedDate = document.getElementById('date').innerText;
    const element = document.getElementById('editableContent');

    var doc = new jsPDF();
    doc.addHTML(element, function() {
        doc.save('myfile.pdf');
    });
}












/*
function saveAsPDF() {
    const editableDate = prompt("Enter new date:");

    if (editableDate !== null) {
        document.getElementById('date').innerText = 'DATE: ' + editableDate;

        const element = document.getElementById('editableContent');

        html2pdf(element, {
            margin: 10,
            filename: 'edited_content.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        });
    }
}
*/


// function saveAsPDF() {
//     const editedDate = document.getElementById('date').innerText;
//
//     const element = document.getElementById('editableContent');
//
//     html2pdf(element, {
//         margin: 10,
//         filename: 'edited_content.pdf',
//         image: { type: 'jpeg', quality: 0.98 },
//         html2canvas: { scale: 2 },
//         jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
//     });
// }
// function saveAsPDF() {
//     const editedDate = document.getElementById('date').innerText;
//
//     const element = document.getElementById('editableContent');
//
//
//     var opt = {
//         margin:       1,
//         filename:     'myfile.pdf',
//         image:        { type: 'png', quality: 1 },
//         html2canvas:  { scale: 1 },
//         jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
//     };
//
//     html2pdf().from(element).set(opt).save();
//
// }


// function saveAsPDF() {
//     const editedDate = document.getElementById('date').innerText;
//     const element = document.getElementById('editableContent');
//
//     var opt = {
//         margin: 1,
//         filename: 'myfile.pdf',
//         image: { type: 'png', quality: 1 },
//         html2canvas: { scale: 1 },
//         jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
//     };
//
//     // Визначте стилі для розділення сторінок
//     element.style.pageBreakInside = "avoid";
//
//     html2pdf().from(element).set(opt).save();
// }

console.log(typeof jsPDF);



