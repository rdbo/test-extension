function btn_on_click()
{
    text = get_input();
    alert(text);
}

function get_input()
{
    return document.getElementById("in_text").value;
}

document.getElementById("btn_save").addEventListener("click", btn_on_click);