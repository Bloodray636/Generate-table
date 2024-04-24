function copyToClipboard(elementId) {
    const textToCopy = document.getElementById(elementId).value;
    const input = document.createElement("textarea");
    input.style.cssText = "position: absolute; left: -9999px;";
    input.value = textToCopy;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    console.log('Код скопирован успешно!');
}