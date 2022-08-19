
const dataDictionary=
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
        ],

        
    "project1":
    [
        "li",
        [
            "Designed 2D adventure puzzle games, AI software, desktop applications and programs to aid in processing data.",
            "Debugged errors in NIST Bit Testing Program. Earned Level One Seller Award in two months."
        ]
    ],
    "project2":
    [
        "li",
        [
            "Design and Development of delta pick and place robot using Raspberry pi, machine vision and Python Kivy."
        ]
    ],
    "project3":
    [
        "li",
        [
            "Developed a stamping mechanism controlled by Allen Bradley PLC.",
            "Designed the traffic signal lights project RS Logix 500 software."
        ]
    ],
    "project4":
    [
        "li",
        [
            "Modelled the dynamics of prosthetic ankle, simulate it on MATLAB."
        ]
    ],
    "project5":
    [
        "li",
        [
            "Worked on integration of software and hardware using TM4c123, FSR, LCD.",
            "Designed Arduino based autonomous vacuum cleaner robot.",
            "Worked on position control of stepper motor driven robotic arm using raspberry pi."
        ]
    ],
    "project6":
    [
        "li",
        [
            "Designed an adventure puzzle Game \"Maze Runner\". Added a lot of features to increase interest of the gamers. Designed an algorithm to generate random maze and to solve that maze."
        ]
    ]
}


function ShowContent(obj,id)
{
    var objImg = obj.querySelector('img');
    var parent=document.getElementById(id);
    parent.classList.toggle("active")
    ToggleContent(parent,id,objImg)
}
function ToggleContent(parent,id,objImg)
{
    if(parent.classList.contains("active")){
        createTags(parent,id,objImg)
    }
    else
    {
        removeTags(parent,objImg)
    }
}


function createTags(parent,id,objImg)
{
    for (let i = 0; i < dataDictionary[id][1].length; i++) {

        var element=document.createElement(dataDictionary[id][0]);  
        element.textContent=dataDictionary[id][1][i];
        parent.appendChild(element);
    }
    objImg.src="up.png";
}


function removeTags(parent,objImg)
{
    var child = parent.lastElementChild; 
    while (child) {
        parent.removeChild(child);
        child = parent.lastElementChild;
    }
    objImg.src="down.png";

}

function ToggleShowAll(isActive)
{
    var iImage=0;
    var images = document.getElementsByTagName('img'); 
    for (const [key, value] of Object.entries(dataDictionary)) 
    {
        var parent=document.getElementById(key);
        iImage+=1;
        if(isActive)//if all hidden content is already not shown then show it
        {
            if(!parent.classList.contains("active"))
            {
                parent.classList.toggle("active")
                ToggleContent(parent,key,images[iImage])
            }
        }
        else
        {
            if(parent.classList.contains("active"))
            {
                parent.classList.toggle("active")
                ToggleContent(parent,key,images[iImage])
            }
        }
        
    }
}
function ShowAll(itself)
{
    console.log('it comes')
    if(AreAllActive())
    {
        if(!itself.classList.contains("active"))
        {
            itself.classList.toggle("active")
        }
    }
    itself.classList.toggle("active")
    ToggleShowAll(itself.classList.contains("active"));
}

//Check if all hidden content is already displayed or not
function AreAllActive()
{
    for (const [key, value] of Object.entries(dataDictionary)) {
        var parent=document.getElementById(key);
        if(!parent.classList.contains("active"))
        {
            return false;
        }
      }
    return true;
}
