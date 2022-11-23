const targetBody = document.querySelectorAll('#NM_FAVORITE > div.group_nav , #header > div > div > div.service_area , #NM_INT_LEFT , #shopcast , #gnb , #footer , #timesquare')
for(const target of targetBody) {
    target.remove()
}
let wrap = document.querySelector('#wrap')
wrap.setAttribute('style', 'overflow: inherit')
