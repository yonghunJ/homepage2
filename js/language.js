function getLanguage() {
    (localStorage.getItem('language') == null) ? setLanguage('en') : false;
    $.ajax({ 
    url:  '/language/' +  localStorage.getItem('language') + '.json', 
    dataType: 'json', async: false, dataType: 'json', 
    success: function (lang) { language = lang } });
}
function setLanguage(lang,data) {
    // Chamge all element
    adaptLanguage(data)
    localStorage.setItem('language', lang);
}
$(document).ready(function(){
    const Default_langauge = kr

    if (localStorage.getItem("username") === null) {
        localStorage.setItem('language','en');
      }
      setLanguage('en',Default_langauge) // kr or en
});

function adaptLanguage(data){
    $("#id_mainTitle").text(data.mainTitle)
    $("#id_text1").text(data.text1)
}n