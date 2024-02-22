export default (title = "Hello World") => {
    const ele = document.createElement("div");
    ele.innerHTML = title;
    return ele;
}