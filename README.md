# 拖拽

洞悉拖拽本质，实现终极目标。

- [x] 列表拖放
- [x] 树结构支持
  - [x] 支持拖放定位自定义样式
	- [x] 树结构样式适配
	- [x] 多重嵌套实现
- [ ] 支持自定义启用/禁用拖拽元素
  - [ ] 支持自定义禁用提示
- [ ] 支持禁止某类元素拖放到另外一类元素，通过字段进行标识
- [ ] 支持移动端
- [ ] 数据驱动
  - [ ] 数据驱动展开与关闭
- [ ] 缓动动画

## 1. 元素默认不可拖拽，要让其变成可拖拽，使用 `draggable` 属性

```html
<div class="item" draggable="true">item1</div>
```

## 1.1 元素默认不可被放置到其他元素中，为了允许拖放，需要阻止这种默认行为

```html
<div class="item" ondragover="allowDrop(event)">item2</div>

<script>
	// 允许拖拽到当前元素
	function allowDrop(event) {
		event.preventDefault()
	}
</script>
```

## 2. 如何传递数据？

首先确定我们想要传递的数据是什么，拖拽的目的是什么，比如我们拖拽的目的是将当前元素移动到另一个元素，则直接将id传递过去，等到拖拽完成时通过id获取元素追加到目标元素内即可。

```html
<div class="item" id="item1" draggable="true" ondragstart="onDragStart(event)">item1</div>

<script>
	// 开始拖拽，设置拖拽数据
	function onDragStart(event) {
		event.dataTransfer.setData('id', event.target.id)
	}
</script>
```

## 3. 拖拽完成时通过传递的数据进行操作

```html
<div
	class="item"
	ondragover="allowDrop(event)"
	ondrop="onDrop(event)"
>item2</div>

<script>
	// 停止拖拽松开鼠标 通过拖拽数据中传递的id找到原来的元素移动到目标元素中
	function onDrop(event) {
		const data = event.dataTransfer.getData('id')
		event.target.appendChild(document.getElementById(data))
	}
</script>
```
