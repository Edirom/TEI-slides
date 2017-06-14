
var c = new CETEI(),
    teiFile = 'tutorial.xml'; // change here for your presentation

/***********************************
* Adding Behaviors
* for more information see the description at https://github.com/TEIC/CETEIcean
***********************************/
c.addBehaviors({"handlers":{
    "body": function(elt) {
        // Adding necessary class .reveal to the tei-body element
        elt.className = 'reveal';
        // Create a new div container as a wrapper for the slides and add the necessary class .slides
        var div = document.createElement("div");
        div.className = 'slides';
        div.innerHTML = elt.innerHTML;
        return div;
    },
    "div": function(elt) {
        if(elt.getAttribute('rend') == 'slide') {
            // Turn the tei-div@type=slide elements to HTML section elements
            var sec = document.createElement("section");
            sec.innerHTML = elt.innerHTML;
            elt.parentElement.replaceChild(sec, elt);
        }
        else if (elt.getAttribute('rend') == 'section') {
            /*  Turn the tei-div@type=section elements to HTML section elements (as a front slide)
             *  NB: The section headings are currently gathered at the beginning, that's an error ;)
             */ 
            var sec = document.createElement("section"),
                content = elt.innerHTML,
                parent = elt.parentElement;
            sec.innerHTML = '<h1>'+elt.firstElementChild.innerHTML+'</h1>';
            
            parent.replaceChild(sec, elt);
            for (let child of Array.from(elt.children)) {
                parent.appendChild(child);
            }
        }
    }
}});


c.getHTML5(teiFile, function(data) {
    document.getElementById("TEI").innerHTML = "";
    document.getElementById("TEI").appendChild(data);
});
