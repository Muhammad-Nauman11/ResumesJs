
var dict=
{
    "objectives":
        [
            "p",
            [
                "Looking for opportunities to utilize my skills and knowledge. Excited to work on design and development of smart web and desktop applications. "
            ]
        ],
    "skills":
        [
            "li",
            [
            "Programming (Python, C++, Assembly Language)",
            "CAD & CAM (Solidworks, Autocad, 3Ds Max)",
            "PLC (Siemens, Allen Bradley)",
            "MATLAB (Signal Processing, Control System, Data Acquisition)"
            ]
        ],
    "hobbies":
        [
            "li",
            [
            "Video Gaming",
            "Book Reading",
            "Watching Movies",
            "Exploring software"
            ]
        ],
    "activities":
        [
            "li",
            [
            "Won ASME general knowledge quiz competition",
            "Participated in NCRA industrial product competition"
            ]
        ]
}


function ShowContent(id)
{

    var parent=document.getElementById(id);//document.getElementsByName(ob);
    parent.classList.toggle("active")
    if(parent.classList.contains("active")){
        for (let i = 0; i < dict[id][1].length; i++) {

            var element=document.createElement(dict[id][0]);  
            element.textContent=dict[id][1][i];
            parent.appendChild(element);
        }
    }
    else
    {
        var child = parent.lastElementChild; 
        while (child) {
            parent.removeChild(child);
            child = parent.lastElementChild;
        }
    }
}
