import P5 from "p5"

let p5

// 參數
const color_list = {
	track_line: "#E1C782",
	circle_gold_darken: "#947034",
	circle_gold_light: "#E0BD69",
}

// 資源
let img_circle = []

// 組件
let arc = {
	color: "circle_gold_darken",
	width: 6,
	r: 1000,
	deg: 60,
}

function drawCanvas() {
	p5.background("#f5f5f5")

	// 繪圖組
	drawTrack()
	drawCenterCircle()
	drawArc()

	// 繪圖：軌道
	function drawTrack() {
		p5.push()
		p5.translate(p5.width / 2, p5.height / 2)
		p5.noFill()
		p5.stroke(color("track_line", 0.3))
		p5.strokeWeight(2)
		// 內側直徑、外側直徑、軌道間隔
		for (let i = 1000; i < 1800; i += 100) {
			p5.circle(0, 0, i)
		}
		p5.pop()
	}

	// 繪圖：中心球體
	function drawCenterCircle() {
		p5.push()
		p5.translate(p5.width / 2, p5.height / 2)
		p5.imageMode(p5.CENTER)
		let z = p5.sin(p5.frameCount / 100) * 30
		p5.image(img_circle[0], 0, 0, 300 - z, 300 - z)

		p5.pop()
	}

	// 繪圖：軌道弧線
	function drawArc() {
		p5.push()
		p5.translate(p5.width / 2, p5.height / 2)

		p5.noFill()
		p5.stroke(color(arc.color))
		p5.strokeWeight(arc.width)
		p5.strokeCap(p5.SQUARE)
		p5.arc(0, 0, arc.r, arc.r, 0, p5.radians(arc.deg))
		p5.pop()
	}
}

// 繪製並載入所有圖形
function loadImages() {
	img_circle.push(lerpCircle(color("circle_gold_light"), color("circle_gold_darken")))
}

// =================================================================
// Tools
// =================================================================
// 色票轉換
function color(color_name, alpha = 1) {
	let c = color_list[color_name]
	return p5.color(`rgba(${p5.red(c)}, ${p5.green(c)}, ${p5.blue(c)}, ${alpha})`)
}

// 繪製漸層圓形 img
function lerpCircle(c1, c2) {
	let x = 0
	let y = 0
	let w = 1000
	let h = 1000

	let img = p5.createImage(w, h)
	img.loadPixels()

	// 從 y 軸開始繪製 h 高度
	for (let i = y; i <= y + h; i++) {
		let inter = i / p5.abs(h - y) // 漸層位置
		let c = p5.lerpColor(c1, c2, inter) // 漸層顏色

		for (let j = x; j < x + w; j++) {
			if (p5.dist(j, i, (x + w) / 2, (y + h) / 2) < w / 2) {
				img.set(j, i, c)
			}
		}
	}
	img.updatePixels()
	return img
}

// =================================================================
// Main
// =================================================================
// 運行畫板
function script(_p5) {
	p5 = _p5

	// 初始化
	p5.setup = () => {
		const canvas = p5.createCanvas(window.innerWidth, window.innerHeight)
		canvas.parent("vue-canvas")

		loadImages()
	}

	// 畫布繪圖
	p5.draw = () => {
		drawCanvas()
	}

	// 視窗大小重置
	p5.windowResized = () => {
		p5.resizeCanvas(window.innerWidth, window.innerHeight)
	}
}

export default () => {
	new P5(script)
}
