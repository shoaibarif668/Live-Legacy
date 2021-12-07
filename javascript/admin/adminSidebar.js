let sidebarData = "" //Sidebar Data To Be Mapped

let menuData = [
    {
        menuFunction:`openMediaTab()`,
        menuId:`media__parent`,
        menuName:`Media Management`,
        menuIcon:`fa fa-hashtag`,
        iconRightId:`mediaIconRight`,
        iconDownId:`mediaIconDown`,
        visibleIconClass:`openMediaTab`,
        //Menu Tabs
        tabShowId:`tab__action__media`,
        defaultTabShowClass:`closed`,
        tabs:[
            {
                tabLink:subFolder ? "./pending-posts.html" : "./admin/pending-posts.html", //Subfolder is a variable defined to check if the page you are standing on is a subfolder or not
                tabName:`Pending Posts`,
            },
            {
                tabLink:subFolder ? "./approved-posts.html" : "./admin/approved-posts.html", //Subfolder is a variable defined to check if the page you are standing on is a subfolder or not
                tabName:`Approved Posts`,
            },
        ]
    },
    {
        menuFunction:`openUserTab()`,
        menuId:`user__parent`,
        menuName:`User Management`,
        menuIcon:`fa fa-users`,
        iconRightId:`userIconRight`,
        iconDownId:`userIconDown`,
        visibleIconClass:`openUserTab`,
        //Menu Tabs
        tabShowId:`user__tab__action__media`,
        defaultTabShowClass:`user__closed`,
        tabs:[
            {
                tabLink:subFolder ? "./user's-list.html" : "./admin/user's-list.html", //Subfolder is a variable defined to check if the page you are standing on is a subfolder or not
                tabName:`User's List`,
            },
            {
                tabLink:subFolder ? "./create-user.html" : "./admin/create-user.html", //Subfolder is a variable defined to check if the page you are standing on is a subfolder or not
                tabName:`Create User`,
            },
        ]
    },
    {
        //Menu
        menuFunction:`openConsultTab()`,
        menuId:`consult__parent`,
        menuName:`Consultation`,
        menuIcon:`uil uil-meeting-board`,
        iconRightId:`consultIconRight`,
        iconDownId:`consultIconDown`,
        visibleIconClass:`openConsultTab`,
        //Menu Tabs
        tabShowId:`consult__tab__action__media`,
        defaultTabShowClass:`consult__closed`,
        tabs:[
            {
                tabLink:subFolder ? "./upcoming-meetings.html" : "./admin/upcoming-meetings.html", //Subfolder is a variable defined to check if the page you are standing on is a subfolder or not
                tabName:`Meetings`,
            }
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