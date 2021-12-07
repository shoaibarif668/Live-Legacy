

// let userData = JSON.parse(localStorage.get("data"));
let sidebarData = "" //Sidebar Data To Be Mapped

let menuData = [
    {
        menuFunction:`openMediaTab()`,
        menuId:`media__parent`,
        menuName:`Media Library`,
        menuIcon:`fa fa-hashtag`,
        iconRightId:`mediaIconRight`,
        iconDownId:`mediaIconDown`,
        visibleIconClass:`openMediaTab`,
        //Menu Tabs
        tabShowId:`tab__action__media`,
        defaultTabShowClass:`closed`,
        tabs:[
            // {
            //     tabLink:subFolder ? "./photos.html" : "./user/photos.html", //Subfolder is a variable defined to check if the page you are standing on is a subfolder or not
            //     tabName:`Photos`,
            // },
            // {
            //     tabLink:subFolder ? "./video.html" : "./user/video.html", //Subfolder is a variable defined to check if the page you are standing on is a subfolder or not
            //     tabName:`Videos`,
            // },
            {
                tabLink:subFolder ? "./user-gallery.html" : "./user/user-gallery.html", //Subfolder is a variable defined to check if the page you are standing on is a subfolder or not
                tabName:`Gallery`,
            },
        ]
    },
    {
        menuFunction:`openUserTab()`,
        menuId:`user__parent`,
        menuName:`Profile Management`,
        menuIcon:`fa fa-user`,
        iconRightId:`userIconRight`,
        iconDownId:`userIconDown`,
        visibleIconClass:`openUserTab`,
        //Menu Tabs
        tabShowId:`user__tab__action__media`,
        defaultTabShowClass:`user__closed`,
        tabs:[
            {
                tabLink:subFolder ? "./profile.html" : "./user/profile.html", //Subfolder is a variable defined to check if the page you are standing on is a subfolder or not
                tabName:`Update Profile`,
            },
            {
                tabLink:subFolder ? "./set-profile.html" : "./user/set-profile.html", //Subfolder is a variable defined to check if the page you are standing on is a subfolder or not
                tabName:`Set Profile Picture`,
            },
            {
                tabLink:subFolder ? `./user-profile.html?user=${userData._id}` : `./user/user-profile.html?user=${userData._id}`, //Subfolder is a variable defined to check if the page you are standing on is a subfolder or not
                tabName:`View Profile`,
            },
        ]
    },
]

function dashboardSidebar(){
    for (let i=0;i<menuData.length;i++){
        sidebarData+="<div class='sidebar__menu__single__item'>";
            sidebarData+=`<a class="nav-link" id="${menuData[i].menuId}"  href="#" onclick="${menuData[i].menuFunction}">`
                sidebarData+=`<span> <i class="${menuData[i].menuIcon}"></i> </span>`
                sidebarData+=`${menuData[i].menuName}`
                sidebarData+=`<i class="fa fa-arrow-right ${menuData[i].visibleIconClass}" id="${menuData[i].iconRightId}"></i>`
                sidebarData+=`<i class="fa fa-arrow-down" id="${menuData[i].iconDownId}"></i>`
            sidebarData+=`</a>`
            sidebarData+=`<div class="${menuData[i].defaultTabShowClass}" id="${menuData[i].tabShowId}">`
                for(let j=0;j<menuData[i].tabs.length;j++){
                    sidebarData+=`<div id="example-collapse-text">`
                        sidebarData+=`<a class="nav-link" href="${menuData[i].tabs[j].tabLink}">`
                            sidebarData+=`${menuData[i].tabs[j].tabName}`
                        sidebarData+=`</a>`
                    sidebarData+=`</div>`
                }                
            sidebarData+=`</div>`
        sidebarData+='</div>'

    }
    
    $('#sidebarWrapper').append(sidebarData); //tbody where the data is appended
}
dashboardSidebar()