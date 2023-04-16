import { useEffect, useRef } from "react";
import Menu from "../components/Menu";

const Map = (props) => {
  const canvasRef = useRef(null);

  //Colors
  const CIRCLE_COLOR = "green";
  const LINE_COLOR = "black";
  const NAVIGATE_COLOR = "red";

  // Dimensions
  const CIRCLE_RADIUS = 10;
  const PADDING = 20;
  const START_FIELD = 50;
  const HALL = {
    width: 70,
    height: 50,
  };
  const SHELF = {
    width: 45,
    height: 45,
  };

  const LINE_WIDTH = 2;

  // Function that generates map on canvas using funcions above
  function define_coords(section, position, CANVAS) {
    if (position < 1 || position > 10) {
      console.error("Bad data");
      return false;
    }

    let x, y;
    const section_code = section.charCodeAt(0);
    const section_height = SHELF.height * 2 + HALL.height;

    if (section_code >= 65 && section_code <= 67) {
      x = LINE_WIDTH;
      y =
        CANVAS.height -
        PADDING -
        START_FIELD -
        SHELF.height -
        section_height * (section_code - 65) -
        LINE_WIDTH * 5 * (section_code - 65);
    } else if (section_code >= 68 && section_code <= 70) {
      x = CANVAS.width - SHELF.width * 5;
      y =
        CANVAS.height -
        PADDING -
        START_FIELD -
        SHELF.height -
        section_height * (70 - section_code) -
        LINE_WIDTH * 5 * (70 - section_code);
    } else {
      console.error("Bad data");
      return false;
    }

    if (position >= 1 && position <= 5) {
      x += SHELF.width * (position - 1);
    } else {
      x += SHELF.width * (position - 6);
      y -= HALL.height * 2;
    }

    return [x, y];
  }

  // Function that draws actual position of the user
  function draw_actual_position(x, y, MID, CANVAS, CTX) {
    if (!x && !y) {
      x = MID;
      y = CANVAS.height - CIRCLE_RADIUS - PADDING;
    } else {
      let result = define_coords(x, y > 5 ? y - 5 : y);
      x = result[0] + SHELF.width / 2;
      y = result[1] - HALL.height / 2 - LINE_WIDTH;
    }

    CTX.beginPath();
    CTX.arc(x, y, CIRCLE_RADIUS, 0, 2 * Math.PI);
    CTX.fillStyle = CIRCLE_COLOR;
    CTX.fill();
  }

  // Function that marks shelfs that user is heading to
  function mark_shelf(section, position, CTX) {
    if (position < 1 || position > 10) {
      console.error("Bad data");
      return false;
    }

    let result = define_coords(section, position);
    let x = result[0];
    let y = result[1];

    CTX.fillStyle = NAVIGATE_COLOR;
    CTX.fillRect(x, y, SHELF.width - LINE_WIDTH, SHELF.height);
  }

  // Function to setup initual values of CTX
  function setup_path(CTX) {
    CTX.beginPath();
    CTX.lineWidth = LINE_WIDTH;
    CTX.strokeStyle = LINE_COLOR;
  }

  // Function that draws shelfs on canvas
  function draw_shelfs(a, b, CTX, CANVAS, MID) {
    for (let i = a; i < b; i++) {
      // Draw left side
      CTX.moveTo(
        MID - HALL.width / 2,
        CANVAS.height - PADDING - START_FIELD - SHELF.height - HALL.height * i
      );
      CTX.lineTo(
        LINE_WIDTH,
        CANVAS.height - PADDING - START_FIELD - SHELF.height - HALL.height * i
      );
      CTX.lineTo(
        LINE_WIDTH,
        CANVAS.height - PADDING - START_FIELD - HALL.height * i
      );
      for (let j = 1; j <= 5; j++) {
        CTX.lineTo(
          j * SHELF.height,
          CANVAS.height - PADDING - START_FIELD - HALL.height * i
        );
        CTX.lineTo(
          j * SHELF.height,
          CANVAS.height - PADDING - START_FIELD - SHELF.height - HALL.height * i
        );
        CTX.moveTo(
          j * SHELF.height,
          CANVAS.height - PADDING - START_FIELD - HALL.height * i
        );
      }

      // Draw right side
      CTX.moveTo(
        MID + HALL.width / 2,
        CANVAS.height - PADDING - START_FIELD - SHELF.height - HALL.height * i
      );
      CTX.lineTo(
        CANVAS.width - LINE_WIDTH,
        CANVAS.height - PADDING - START_FIELD - SHELF.height - HALL.height * i
      );
      CTX.lineTo(
        CANVAS.width - LINE_WIDTH,
        CANVAS.height - PADDING - START_FIELD - HALL.height * i
      );
      for (let j = 1; j <= 5; j++) {
        CTX.lineTo(
          CANVAS.width - j * SHELF.height,
          CANVAS.height - PADDING - START_FIELD - HALL.height * i
        );
        CTX.lineTo(
          CANVAS.width - j * SHELF.height,
          CANVAS.height - PADDING - START_FIELD - SHELF.height - HALL.height * i
        );
        CTX.moveTo(
          CANVAS.width - j * SHELF.height,
          CANVAS.height - PADDING - START_FIELD - HALL.height * i
        );
      }
    }
  }

  const generate_map = (CANVAS, CTX, MID) => {
    // Draw first row
    setup_path(CTX);

    // Draw left side
    draw_shelfs(0, 1, CTX, CANVAS, MID);

    CTX.stroke();

    // Draw row 2 and 3
    setup_path(CTX);

    draw_shelfs(2, 4, CTX, CANVAS, MID);

    CTX.stroke();

    // Draw row 4 and 5
    setup_path(CTX);

    draw_shelfs(5, 7, CTX, CANVAS, MID);

    CTX.stroke();

    // Draw row 6
    setup_path();

    draw_shelfs(8, 9, CTX, CANVAS, MID);

    CTX.stroke();
    generate_map();
  };

  useEffect(() => {
    const CANVAS = canvasRef.current;
    const CTX = CANVAS.getContext("2d");
    const MID = CANVAS.width / 2;
    generate_map(CANVAS, CTX, MID);
  }, [generate_map]);

  return (
    <main className="h-[90vh] bg-background flex flex-col px-[20px]">
      <canvas ref={canvasRef} width="520" height="520" />
      <Menu />
    </main>
  );
};

export default Map;
