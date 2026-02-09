// const style = window.getComputedStyle(document.body)

// function paintBackground (ctx, canvas) {
//   ctx.fillStyle = style.getPropertyValue('--sea-blue-dark')
//   ctx.fillRect(0, 0, canvas.width, canvas.height)
// }

// // create canvas and set its size
console.log('JS loaded')
// const canvas = document.getElementById('canvas')
// canvas.width = window.innerWidth
// canvas.height = window.innerHeight

// // create grass
// // x: center position (65 = middle of 130px canvas)
// // length: how squiggly the strand is
// // amplitude: strand height
// // frequency: how fast it undulates
// const grassColors = [
//   style.getPropertyValue('--grass-yellow'),
//   style.getPropertyValue('--grass-yellow-dark'),
//   style.getPropertyValue('--sand-yellow'),
//   style.getPropertyValue('--grass-green'),
//   style.getPropertyValue('--grass-olive'),
//   style.getPropertyValue('--grass-green-dark'),
// ]
// const grass = Array.from({ length: 300 }, () => ({
//   x: Math.random() * canvas.width,
//   color:
//     grassColors[Math.floor(Math.random() * (grassColors.length - 0 + 1)) + 0], //randomly selects color from list
//   height: (Math.random() * canvas.height) / 4,
//   length: Math.random() * 0.003 + 0.005,
//   amplitude: Math.random() * 5 + 25,
//   frequency: Math.random() * 0.02 + 0.005
// }))
// const increments = grass.map(strand => strand.frequency)

// function animate (ctx, canvas) {
//   requestAnimationFrame(() => animate(ctx, canvas))
//   // ctx.clearRect(0, 0, canvas.width, canvas.height);
//   paintBackground(ctx, canvas)
//   ctx.lineWidth = 3

//   grass.forEach((strand, index) => {
//     ctx.beginPath()
//     ctx.moveTo(strand.x, 0)
//     const height = strand.height // Grass height
//     const { frequency, length, amplitude } = strand
//     let increment = increments[index]

//     let y = canvas.height // Start drawing from the base of the grass
//     const startX = strand.x

//     ctx.moveTo(startX, y)
//     ctx.strokeStyle = strand.color
//     for (y = canvas.height; y > canvas.height - height; y--) {
//       ctx.lineTo(startX + Math.sin(y * length + increment) * amplitude, y)
//     }

//     ctx.stroke()
//     increments[index] += frequency
//   })
// }

// if (canvas.getContext) {
//   const ctx = canvas.getContext('2d')
//   // drawing code here
//   paintBackground(ctx, canvas)
//   animate(ctx, canvas)
// } else {
//   // canvas-unsupported code here
// }
