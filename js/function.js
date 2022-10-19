// main function
function pasangAtribut(element, attributes){
    Object.keys(attributes).forEach(attr => {
        element.setAttribute(attr, attributes[attr]);
    })
}
