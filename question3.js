/*
* Do not modify this class.
* Custom Dialog Element.
*/
class MyDlg extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const div = document.createElement('div');
        div.id = "container";
        div.style.position = "relative";
        div.style.width = div.style.height = "100px";
        div.style.border = "1px solid black";
        const closeBtn = document.createElement('button');
        closeBtn.textContent = "X";
        closeBtn.style.position = "absolute";
        closeBtn.style.right = "0";
        closeBtn.addEventListener('click', () => {
            if (this.dispatchEvent(new CustomEvent('close-dlg', {cancelable: true}))) {
                div.style.display = "none";
            }
        })
        div.appendChild(closeBtn);
        this.appendChild(div);
    }
}
// Define the new element
customElements.define('my-dlg', MyDlg);

/* Quiz: Write code to prevent dialog to close when click close button */
const dlg = document.getElementById('dlg');
dlg.addEventListener('close-dlg', function (e) {
    e.preventDefault();
});
/****/