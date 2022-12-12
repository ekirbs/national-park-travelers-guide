var data = {
    "menu": [

        {
            "name": "Connecticut", "link": "#", "submenu": [
                { "name": "Coltsville National Historical Park ", "link": "#", "submenu": null },
                { "name": "Weir Farm National Historical Park", "link": "#", "submenu": null },

            ]
        },
        {
            "name": "Delaware", "link": "#", "submenu": [
                { "name": "First State National Park", "link": "#", "submenu": null },

            ]
        },

        {
            "name": "Maryland", "link": "#", "submenu": [
                { "name": "Fort McHenry National Monument and Historic Shrine", "link": "#", "submenu": null },
                { "name": "Hampton ", "link": "#", "submenu": null },
                { "name": "Harriet Tubman National Historical Park", "link": "#", "submenu": null },
                { "name": "Harriet Tubman Underground Railroad", "link": "#", "submenu": null },
                { "name": "Thomas Stones National Historic Site", "link": "#", "submenu": null }
            ]
        },
        {
            "name": "Massachusettes", "link": "#", "submenu": [
                { "name": "Adams Historical Park", "link": "#", "submenu": null },
                { "name": "Boston National Historic Park", "link": "#", "submenu": null },
                { "name": "Boston African Amrican National Historic Site", "link": "#", "submenu": null },
                { "name": "Boston Harbor Islands National Recreation Area", "link": "#", "submenu": null },
                { "name": "Cape Cod National Seashore", "link": "#", "submenu": null },
                { "name": "Fredrick Law Olmsted National Historic Site", "link": "#", "submenu": null },
                { "name": "John Fitzgerald Kennedy National Historic Site", "link": "#", "submenu": null },
                { "name": "Longfellow House Washingtons Headquarters National Historic Site", "link": "#", "submenu": null },
                { "name": "Lowell National Historical Park", "link": "#", "submenu": null },
                { "name": "Minute Man National Historical Park", "link": "#", "submenu": null },
                { "name": "New Bedford Whaling National Historical Park", "link": "#", "submenu": null },
                { "name": "Salem Maritime National Historic Site", "link": "#", "submenu": null },
                { "name": "Saugus Iron Works National Historic Site", "link": "#", "submenu": null },
                { "name": "Springfield Armory Museum", "link": "#", "submenu": null },

            ]
        },

        {
            "name": "New Jersey", "link": "#", "submenu": [
                { "name": "Delaware Water Gap National Recreation Area", "link": "#", "submenu": null },
                { "name": "Gateway National Recreation Area", "link": "#", "submenu": null },
                { "name": "Great Egg Harbor National Park", "link": "#", "submenu": null },
                { "name": "Morristown National Historical Park", "link": "#", "submenu": null },
                { "name": "Paterson Great Falls National Historical Park", "link": "#", "submenu": null },
                { "name": "Statue of Liberty and Ellis Island", "link": "#", "submenu": null },
                { "name": "Thomas Edison National Historical Park", "link": "#", "submenu": null },
            ]
        },

        {
            "name": "New Hampshire", "link": "#", "submenu": [
                { "name": "Saint Gaudens National Park", "link": "#", "submenu": null },

            ]
        },

        {
            "name": "New York", "link": "#", "submenu": [
                { "name": "African Burial Ground National Monument", "link": "#", parkCode: "ACDA", "submenu": null },
                { "name": "Castle Clinton National Momument", "link": "#", "submenu": null },
                { "name": "Eleanor Roosevelt National Historic Site", "link": "#", "submenu": null },
                { "name": "Federal Hall", "link": "#", "submenu": null },
                { "name": "Fire Island National Seashore", "link": "#", "submenu": null },
                { "name": "Fort Stanwix National Monument", "link": "#", "submenu": null },
                { "name": "General Grant National Memorial ", "link": "#", "submenu": null },
                { "name": "Governors Island", "link": "#", "submenu": null },
                { "name": "Hamilton Grange National Memorial", "link": "#", "submenu": null },
                { "name": "Home of Franklin D. Roosevelt", "link": "#", "submenu": null },
                { "name": "Martin Van Buren Historic Site", "link": "#", "submenu": null },
                { "name": "Sagamore Hill National Historic Site", "link": "#", "submenu": null },
                { "name": "Saint Paul's Church", "link": "#", "submenu": null },
                { "name": "Saratoga National Historical Park", "link": "#", "submenu": null },
                { "name": "Stonewall National Monument", "link": "#", "submenu": null },
                { "name": "Theodore Roosevelt Birthplace", "link": "#", "submenu": null },
                { "name": "Vanderbilt Mansion Historic Site", "link": "#", "submenu": null },
                { "name": "Women's Rights Pioneers Monument", "link": "#", "submenu": null },
            ]
        },


        {
            "name": "Pennsylvania", "link": "#", "submenu": [
                { "name": "Allengheny Portage Railroad", "link": "#", "submenu": null },
                { "name": "Appalachian Trail Conservancy", "link": "#", "submenu": null },
                { "name": "Edgar Allan Poe National Historic Site", "link": "#", "submenu": null },
                { "name": "Eisenhower National Historic Site", "link": "#", "submenu": null },
                { "name": "Flight 93 National Memorial", "link": "#", "submenu": null },
                { "name": "Fort Necessity National Battlefield", "link": "#", "submenu": null },
                { "name": "Friendship Hill National Historic Site", "link": "#", "submenu": null },
                { "name": "Gettysburg National Military Park Museum and Visitor Center", "link": "#", "submenu": null },
                { "name": "Hopewell Furnace National Historic Site", "link": "#", "submenu": null },
                { "name": "Independence National Historical Park", "link": "#", "submenu": null },
                { "name": "Johnstown Flood National Memorial", "link": "#", "submenu": null },
                { "name": "Steamtown National Historic Site", "link": "#", "submenu": null },
                { "name": "Thaddeus Kosciuszko National Memorial", "link": "#", "submenu": null },
                { "name": "Upper Delaware National Park", "link": "#", "submenu": null },
                { "name": "Valley Forge National Park", "link": "#", "submenu": null },

            ]
        },

        {
            "name": "Rhode Island", "link": "#", "submenu": [
                { "name": "Blackstone River Valley Historical Park", "link": "#", "submenu": null },
                { "name": "Roger Williams National Memorial", "link": "#", "submenu": null },
            ]
        },

        {
            "name": "Vermont", "link": "#", "submenu": [
                { "name": "Marsh Billings Rockefeller National Historical Park", "link": "#", "submenu": null },

            ]
        },
    ]
};

// Parses the data and creates the menu
function parseMenu(element, menu) {
    for (var i = 0; i < menu.length; i++) {
        var nestedli = document.createElement('li');
        nestedli.setAttribute('style', 'display:none;');
        nestedli.setAttribute('onmouseenter', "showNodes(this)");
        nestedli.setAttribute('onmouseleave', "hideNodes(this)");
        var link = document.createElement('a');
        link.setAttribute('href', menu[i].link);
        link.appendChild(document.createTextNode(menu[i].name));
        nestedli.appendChild(link);
        if (menu[i].submenu != null) {
            var subul = document.createElement('ul');
            nestedli.appendChild(subul);
            parseMenu(subul, menu[i].submenu);
        }
        element.appendChild(nestedli);

    }
}
// Shows the drop down elements 
function showNodes(element) {

    var menu = document.getElementById('drop-down');
    menu.style.display = "block";
    var lis = element.querySelectorAll("ul > li");
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.display = "block";
    }
}

// Hides the drop down elements
function hideNodes(element) {

    var lis = element.querySelectorAll("ul > li");
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.display = "none";
    }
}

// Shows the drop down
function showParks() {

    var menu = document.getElementById('drop-down');
    menu.style.display = "block";
    var lis = document.querySelectorAll("#drop-down > li");
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.display = "block";
    }
}

// Hide the drop down
function hideParks() {
    var menu = document.getElementById('drop-down');
    menu.style.display = "none";
}

// When the window loads, create the menu from the data
window.onload = function () {
    var menu = document.getElementById('drop-down');
    parseMenu(menu, data.menu);
}; 