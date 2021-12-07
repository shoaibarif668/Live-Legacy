const cursor = document.querySelector('.cursor');
const hoverEvents = document.querySelectorAll('.cursorEvent');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
        })

        document.addEventListener('click', () => {
            cursor.classList.add("expand");

            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500)
        })
for (let i = 0; i < hoverEvents.length; i++) {
    hoverEvents[i].addEventListener('mouseover', () => {
        cursor.classList.add("hoverExpand");
    })
    hoverEvents[i].addEventListener('mouseout', () => {
        cursor.classList.remove("hoverExpand");
    })
}
