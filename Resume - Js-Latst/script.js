
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
