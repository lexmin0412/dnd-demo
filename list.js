const CLASS_FOCUS_CENTER_ABLE = 'focus-center-able' // 中间聚焦可插入样式
const CLASS_FOCUS_CENTER_DISABLED = 'focus-center-disabled'
const CLASS_FOCUS_TOP_ABLE = 'focus-top-able'
const CLASS_FOCUS_TOP_DISABLED = 'focus-top-disabled'
const CLASS_FOCUS_BOTTOM_ABLE = 'focus-bottom-able'
const CLASS_FOCUS_BOTTOM_DISABLED = 'focus-bottom-disabled'

// 位置标识
const TOP = 'top'
const CENTER = 'center'
const BOTTOM = 'bottom'

// 添加元素样式
function addDomClass(dom, classname) {
	dom.classList.add(classname)
}

// 移除元素样式
function removeDomClass(dom, classname) {
	dom.classList.remove(classname)
}

// 获取当前鼠标在元素中的位置 top-顶部 center-中间 bottom-底部
function getCurrentCursorPositionInDomElement(event) {
	const pageY = event.pageY - event.target.offsetTop;
	const ypercent = pageY / event.target.clientHeight * 100; // 转百分比
	if ( ypercent < 20 ) {
		return TOP
	}
	if ( ypercent < 80 ) {
		return CENTER
	}
	return BOTTOM
}
