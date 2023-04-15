$(window).bind('load', () => {
    generate_map();
});

//Colors
const circle_color = "green";
const line_color = "black";

// Dimensions
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
const mid = canvas.width / 2;
const circle_radius = 10;
const padding = 20;
const start_field = 50;
const hall = {
    "width": 67,
    "height": 50
}
const shelf = {
    "width": 45,
    "height": 45
}
const line_width = 4;

function draw_actual_position(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, circle_radius, 0, 2 * Math.PI);
    ctx.fillStyle = circle_color;
    ctx.fill();
}

function setup_path() {
    ctx.beginPath();
    ctx.lineWidth = line_width;
    ctx.strokeStyle = line_color;
}

function draw_shelfs(a, b) {
    for (let i = a; i < b; i++) {
        // Draw left side
        ctx.moveTo(mid - hall.width / 2, canvas.height - padding - start_field - shelf.height - hall.height * i);
        ctx.lineTo(line_width, canvas.height - padding - start_field - shelf.height - hall.height * i);
        ctx.lineTo(line_width, canvas.height - padding - start_field - hall.height * i);
        for (let j = 1; j <= 5; j++) {
            ctx.lineTo(j * shelf.height, canvas.height - padding - start_field - hall.height * i);
            ctx.lineTo(j * shelf.height, canvas.height - padding - start_field - shelf.height - hall.height * i);
            ctx.moveTo(j * shelf.height, canvas.height - padding - start_field - hall.height * i)
        }

        // Draw right side
        ctx.moveTo(mid + hall.width / 2, canvas.height - padding - start_field - shelf.height - hall.height * i);
        ctx.lineTo(canvas.width - line_width, canvas.height - padding - start_field - shelf.height - hall.height * i);
        ctx.lineTo(canvas.width - line_width, canvas.height - padding - start_field - hall.height * i);
        for (let j = 1; j <= 5; j++) {
            ctx.lineTo(canvas.width - j * shelf.height, canvas.height - padding - start_field - hall.height * i);
            ctx.lineTo(canvas.width - j * shelf.height, canvas.height - padding - start_field - shelf.height - hall.height * i);
            ctx.moveTo(canvas.width - j * shelf.height, canvas.height - padding - start_field - hall.height * i)
        }
    }
}

function generate_map() {
    // Draw starting point
    draw_actual_position(mid, canvas.height - circle_radius - padding);

    // Draw first row
    setup_path()

    // Draw left side
    draw_shelfs(0, 1);

    ctx.stroke();

    // Draw row 2 and 3
    setup_path()

    draw_shelfs(2, 4);

    ctx.stroke();

    // Draw row 4 and 5
    setup_path()

    draw_shelfs(5, 7);

    ctx.stroke();

    // Draw row 6
    setup_path()

    draw_shelfs(8, 9);

    ctx.stroke();



}