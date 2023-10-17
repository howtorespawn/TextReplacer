function textreplacer(){
    let text = document.getElementById('textvalue').value;
    replacing = prompt('Enter the text to be replaced');
    replacer = prompt('Enter the new text');
    console.log(text,replacer,replacing); 
    document.getElementById('newtext').innerHTML = text;
    document.getElementById('newtext').innerHTML = text.replaceAll(replacing,replacer);
}
function save(){
    document.getElementById("textvalue").value = document.getElementById("newtext").value
}