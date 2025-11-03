const markdownInput = document.getElementById('markdown-input');
const htmlOutput = document.getElementById('html-output');

markdownInput.addEventListener('input', () => {
    const markdownText = markdownInput.value;
    const htmlText = marked.parse(markdownText);
    htmlOutput.innerHTML = htmlText;
});

const saveButton = document.getElementById('save-button');
saveButton.addEventListener('click', () => {
    const markdownText = markdownInput.value;
    const blob = new Blob([markdownText], { type: 'text/markdown' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'untitled.md';
    a.click();
});

const loadButton = document.getElementById('load-button');
const loadInput = document.getElementById('load-input');
loadButton.addEventListener('click', () => {
    loadInput.click();
});

loadInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            markdownInput.value = e.target.result;
            markdownInput.dispatchEvent(new Event('input'));
        };
        reader.readAsText(file);
    }
});
