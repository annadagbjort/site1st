const link = "https://spreadsheets.google.com/feeds/list/1rIXlDzuwzWPQYyZpTYXn4ADYLlPCJKlxKY7C9JI0GKY/od6/public/values?alt=json";

window.addEventListener("DOMContentLoaded", getData);

function getData() {
    fetch(link)
        .then(res => res.json())
        .then(handleData);
}

function handleData(data) {
    const myData = data.feed.entry;
    console.log("myData - Console");
    console.log(myData);
    myData.forEach(showData);
}

function showData(singleRowData) {
    console.log("singleRowData - console");
    console.log(singleRowData.gsx$vara.$t);

    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);
    const h2 = clone.querySelector("h2");
    h2.textContent = singleRowData.gsx$vara.$t;

    const h4_span = clone.querySelector("h4 span");
    h4_span.textContent = singleRowData.gsx$verð.$t;








document.querySelector("main").appendChild(clone);
}
