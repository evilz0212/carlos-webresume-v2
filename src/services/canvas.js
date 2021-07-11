import P5 from "p5"

let p5, pCir
let canvasType

// 參數
const color_list = {
	background: "#f5f5f5",
	track_line: "#E1C782",
	gold_01: "#937218",
	gold_02: "#D4AF37",
	gold_03: "#E1C782",
	gold_04: "#DACCA9",
	gold_05: "#FFF5D7",
	linear_01_01: "#947034",
	linear_01_02: "#E0BD69",
	linear_02_01: "#F8EF92",
	linear_02_02: "#E1AB3F",
	linear_03_01: "#E0BD69",
	linear_03_02: "#C29E54",
}

// 資源
let img_planet = []
let img_planet_opacity = []

// 組件
let track = {
	color: "track_line",
	opacity: 0.2,
	width: 2,
	r_inside: 600, // 內側直徑
	r_outside: 2400, // 外側直徑
	space: 150, // 軌道間隔
}
let arc = []
let planets = []
let planets_opacity = []

function drawCanvas() {
	p5.background(color("background"))

	// 繪圖組
	if (canvasType == "main") {
		drawPlanet(planets_opacity)
		drawTrack()
		drawArc()
		drawStar()
		drawPlanet(planets)
	} else if (canvasType == "background") {
	}

	// 繪圖：軌道
	function drawTrack() {
		p5.push()
		p5.translate(p5.width / 2, p5.height / 2)
		p5.noFill()
		p5.stroke(color(track.color, track.opacity))
		p5.strokeWeight(track.width)

		for (let i = track.r_inside; i < track.r_outside; i += track.space) {
			p5.circle(0, 0, i)
		}
		p5.pop()
	}

	// 繪圖：中心恆星
	function drawStar() {
		p5.push()
		p5.translate(p5.width / 2, p5.height / 2)
		p5.imageMode(p5.CENTER)
		let z = p5.sin(p5.frameCount / 200) * 15 // 膨脹係數：速度、幅度
		p5.rotate(p5.frameCount / 200)
		p5.image(
			img_planet[0],
			0,
			0,
			track.r_inside - track.space - z,
			track.r_inside - track.space - z
		)
		p5.pop()
	}

	// 繪圖：軌道弧線
	function drawArc() {
		p5.push()
		p5.translate(p5.width / 2, p5.height / 2)

		p5.noFill()
		p5.strokeCap(p5.SQUARE)

		for (let i = 0; i < arc.length; i++) {
			const e = arc[i]

			p5.push()
			p5.stroke(color(e.color, e.opacity))
			p5.strokeWeight(e.width)
			// 概念：時間的前進倒轉 (mouseX 控制)
			let mouseMove = (p5.mouseX * e.speed) / 2 // 依據 mouseX, 基礎速度 增加旋轉幅度
			let change = ((mouseMove * e.direction) / e.r / e.deg) * 60000 // 方向性、質量、距離加權
			p5.rotate(p5.frameCount * e.direction * e.speed + change)
			p5.arc(0, 0, e.r, e.r, p5.radians(e.start), p5.radians(e.start + e.deg))
			p5.pop()
		}
		p5.pop()
	}

	// 繪圖：漂浮行星
	function drawPlanet(planetArray) {
		p5.push()
		for (let i = 0; i < planetArray.length; i++) {
			const e = planetArray[i]

			p5.push()
			p5.translate(
				e.x + p5.frameCount * e.moveX * e.speed,
				e.y + p5.frameCount * e.moveY * e.speed
			)
			p5.rotate(e.deg)
			p5.image(e.img, 0, 0, e.r, e.r)
			p5.pop()
		}
		p5.pop()
	}
}

// 繪製並載入所有圖形
function loadImages() {
	img_planet.push(lerpCircle(color("linear_01_01"), color("linear_01_02")))
	img_planet.push(lerpCircle(color("linear_02_01"), color("linear_02_02")))
	img_planet.push(lerpCircle(color("linear_03_01"), color("linear_03_02")))
	img_planet_opacity.push(lerpCircle(color("linear_01_01", 0.5), color("linear_01_02", 0.5)))
	img_planet_opacity.push(lerpCircle(color("linear_02_01", 0.5), color("linear_02_02", 0.5)))
	img_planet_opacity.push(lerpCircle(color("linear_03_01", 0.5), color("linear_03_02", 0.5)))
}
// 生成組件陣列：行星群
function createPlanetArray() {
	for (let i = 0; i < 20; i++) {
		planets.push({
			img: p5.random(img_planet),
			x: p5.random(p5.width * 1.1),
			y: p5.random(p5.height * 1.1),
			r: p5.min(p5.abs(p5.tan(p5.random(10, 80))) * 15, 250),
			deg: p5.random(360),
			moveX: p5.random(-1, 1),
			moveY: p5.random(-1, 1),
			speed: p5.random(0.3),
		})
	}
	for (let i = 0; i < 50; i++) {
		planets_opacity.push({
			img: p5.random(img_planet_opacity),
			x: p5.random(p5.width * 1.1),
			y: p5.random(p5.height * 1.1),
			r: p5.min(p5.abs(p5.tan(p5.random(5, 60))) * 10, 150),
			deg: p5.random(360),
			moveX: p5.random(-1, 1),
			moveY: p5.random(-1, 1),
			speed: p5.random(0.05),
		})
	}
}
// 生成組件陣列：軌道弧線
function createArcArray() {
	let track_colors = ["linear_01_01", "linear_01_02", "gold_01"]

	for (let i = track.r_inside; i < track.r_outside; i += track.space) {
		arc.push({
			color: p5.random(track_colors),
			opacity: p5.random(0.8, 1),
			width: p5.random(3, 3),
			r: i,
			deg: p5.random(60, 120), // 弧長(角度單位)
			start: p5.random(360), // 初始位置
			speed: p5.random(0.0005, 0.005), // 移動速度
			direction: p5.random([-1, 1]),
		})
	}
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
		createArcArray()
		createPlanetArray()
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

export default (type) => {
	canvasType = type
	new P5(script)
}
