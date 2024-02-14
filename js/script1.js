window.jsPDF = window.jspdf.jsPDF;

function saveAsPDF() {
    const element = document.getElementById('editableContent');
    const pages = element.querySelectorAll('.page');

    var doc = new jsPDF({
        unit: 'mm',
        format: 'a4',
    });

    // Recursive function to capture and add pages sequentially
    function addPageToPDF(index) {
        if (index >= pages.length) {
            // Save PDF when all pages are processed
            doc.save('myfile.pdf');
            return;
        }

        // Change the color of span elements to #000 before capturing
        const editableSpans = pages[index].querySelectorAll('span[contenteditable="true"]');
        editableSpans.forEach(span => {
            span.style.color = "#000";
        });

        // Delay to ensure styles are applied before capturing
        setTimeout(() => {
            editableSpans.forEach(span => {
                span.style.color = "#F00";
            });


        }, 500);

        html2canvas(pages[index], { scale: 2 }) // Increase scale for higher resolution
            .then(canvas => {
                var imgData = canvas.toDataURL('image/jpeg', 1.0); // Use JPEG format with high quality
                var imgWidth = 210;
                var imgHeight = (canvas.height * imgWidth) / canvas.width;

                if (index > 0) {
                    doc.addPage();
                }

                doc.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);

                // Recursively call the function for the next page
                addPageToPDF(index + 1);
            });
    }

    // Start the process with the first page
    addPageToPDF(0);
}


const editableSpans = document.querySelectorAll('span[contenteditable="true"]');
editableSpans.forEach(span => {
    span.style.color = "#F00";

});

document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('[id^="yesCheckbox"], [id^="noCheckbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const correspondingCheckboxId = checkbox.id.startsWith('yes') ? checkbox.id.replace('yes', 'no') : checkbox.id.replace('no', 'yes');
            const correspondingCheckbox = document.getElementById(correspondingCheckboxId);

            if (checkbox.checked) {
                correspondingCheckbox.checked = false;
                updateLabelClass(checkbox, 'checked');
                updateLabelClass(correspondingCheckbox, ''); // Видаляємо клас 'checked' для відповідного чекбокса
                showMessage(`${checkbox.id} is selected!`);
            } else {
                correspondingCheckbox.checked = true;
                updateLabelClass(checkbox, '');
                showMessage(`${checkbox.id} is deselected!`);
            }
        });
    });

    function updateLabelClass(checkbox, className) {
        const label = checkbox.closest('label');
        if (label) {
            label.classList.toggle('checked', checkbox.checked);
        }
    }

    function showMessage(message) {
        console.log(message);

    }
});




// -------------------------------
document.addEventListener('DOMContentLoaded', () => {
let editableSpansTrue = document.querySelectorAll('span[contenteditable="true"]');
console.log(editableSpansTrue.length)

editableSpansTrue.forEach(editableSpan => {
    editableSpan.addEventListener("keydown", e => {
        if (e.keyCode == 13) {
            e.preventDefault();
            e.stopPropagation();
            insertTextAtSelection(editableSpan, "\n");
        }
    });

    editableSpan.addEventListener("paste", e => {
        console.log('paste');
        e.preventDefault();
        let text = (e.originalEvent || e).clipboardData.getData('text/plain');
        insertTextAtSelection(editableSpan, text);
    });
});

function insertTextAtSelection(element, txt) {
    let sel = window.getSelection();
    let text = element.textContent;
    let before = Math.min(sel.focusOffset, sel.anchorOffset);
    let after = Math.max(sel.focusOffset, sel.anchorOffset);
    let afterStr = text.substring(after);
    if (afterStr == "") afterStr = "\n";
    element.textContent = text.substring(0, before) + txt + afterStr;
    sel.removeAllRanges();
    let range = document.createRange();
    range.setStart(element.childNodes[0], before + txt.length);
    range.setEnd(element.childNodes[0], before + txt.length);
    sel.addRange(range);
}

});











