const targetBody = document.querySelectorAll('#NM_FAVORITE > div.group_nav , #header > div > div > div.service_area , #NM_INT_LEFT , #shopcast , #gnb , #footer , #timesquare , #container > div:nth-child(1) , #NM_scroll_top_btn , #NM_darkmode_btn');
for(const target of targetBody) {
    target.remove()
};
let wrap = document.querySelector('#wrap');
wrap.setAttribute('style', 'overflow: inherit');
let container = document.querySelector('#container');
container.setAttribute('style', 'position: fixed;');