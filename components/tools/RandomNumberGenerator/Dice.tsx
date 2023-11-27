interface Props {
  face: number;
}

const WHITE = "white";
const BLACK = "black";
const FACE_SIZE = 42;
const DOT_SIZE = 10;
const DOT_PADDING = 4;

export const Dice = ({ face }: Props) => {
  if (face === 1) {
    return (
      <div
        style={{
          alignItems: "center",
          backgroundColor: WHITE,
          borderRadius: "8px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          maxHeight: `${FACE_SIZE}px`,
          minHeight: `${FACE_SIZE}px`,
          maxWidth: `${FACE_SIZE}px`,
          minWidth: `${FACE_SIZE}px`,
        }}
      >
        <div
          style={{
            backgroundColor: BLACK,
            borderRadius: "20px",
            maxHeight: `${DOT_SIZE}px`,
            minHeight: `${DOT_SIZE}px`,
            maxWidth: `${DOT_SIZE}px`,
            minWidth: `${DOT_SIZE}px`,
          }}
        ></div>
      </div>
    );
  } else if (face === 2) {
    return (
      <div
        style={{
          backgroundColor: WHITE,
          borderRadius: "8px",
          maxHeight: `${FACE_SIZE}px`,
          minHeight: `${FACE_SIZE}px`,
          maxWidth: `${FACE_SIZE}px`,
          minWidth: `${FACE_SIZE}px`,
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: BLACK,
            borderRadius: "20px",
            maxHeight: `${DOT_SIZE}px`,
            minHeight: `${DOT_SIZE}px`,
            maxWidth: `${DOT_SIZE}px`,
            minWidth: `${DOT_SIZE}px`,
            position: "absolute",
            top: DOT_PADDING,
            left: DOT_PADDING,
          }}
        />
        <div
          style={{
            backgroundColor: BLACK,
            borderRadius: "20px",
            maxHeight: DOT_SIZE,
            minHeight: DOT_SIZE,
            maxWidth: DOT_SIZE,
            minWidth: DOT_SIZE,
            position: "absolute",
            top: FACE_SIZE - DOT_SIZE - DOT_PADDING,
            left: FACE_SIZE - DOT_SIZE - DOT_PADDING,
          }}
        />
      </div>
    );
  } else if (face === 3) {
    return (
      <div
        style={{
          backgroundColor: WHITE,
          borderRadius: "8px",
          maxHeight: `${FACE_SIZE}px`,
          minHeight: `${FACE_SIZE}px`,
          maxWidth: `${FACE_SIZE}px`,
          minWidth: `${FACE_SIZE}px`,
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: BLACK,
            borderRadius: "20px",
            maxHeight: `${DOT_SIZE}px`,
            minHeight: `${DOT_SIZE}px`,
            maxWidth: `${DOT_SIZE}px`,
            minWidth: `${DOT_SIZE}px`,
            position: "absolute",
            top: DOT_PADDING,
            left: DOT_PADDING,
          }}
        />
        <div
          style={{
            backgroundColor: BLACK,
            borderRadius: "20px",
            maxHeight: DOT_SIZE,
            minHeight: DOT_SIZE,
            maxWidth: DOT_SIZE,
            minWidth: DOT_SIZE,
            position: "absolute",
            top: FACE_SIZE / 2 - DOT_SIZE / 2,
            left: FACE_SIZE / 2 - DOT_SIZE / 2,
          }}
        />
        <div
          style={{
            backgroundColor: BLACK,
            borderRadius: "20px",
            maxHeight: DOT_SIZE,
            minHeight: DOT_SIZE,
            maxWidth: DOT_SIZE,
            minWidth: DOT_SIZE,
            position: "absolute",
            top: FACE_SIZE - DOT_SIZE - DOT_PADDING,
            left: FACE_SIZE - DOT_SIZE - DOT_PADDING,
          }}
        />
      </div>
    );
  } else if (face === 4) {
    return (
      <div
        style={{
          backgroundColor: WHITE,
          borderRadius: "8px",
          maxHeight: `${FACE_SIZE}px`,
          minHeight: `${FACE_SIZE}px`,
          maxWidth: `${FACE_SIZE}px`,
          minWidth: `${FACE_SIZE}px`,
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: BLACK,
            borderRadius: "20px",
            maxHeight: `${DOT_SIZE}px`,
            minHeight: `${DOT_SIZE}px`,
            maxWidth: `${DOT_SIZE}px`,
            minWidth: `${DOT_SIZE}px`,
            position: "absolute",
            top: DOT_PADDING,
            left: DOT_PADDING,
          }}
        />
        <div
          style={{
            backgroundColor: BLACK,
            borderRadius: "20px",
            maxHeight: DOT_SIZE,
            minHeight: DOT_SIZE,
            maxWidth: DOT_SIZE,
            minWidth: DOT_SIZE,
            position: "absolute",
            top: DOT_PADDING,
            left: FACE_SIZE - DOT_SIZE - DOT_PADDING,
          }}
        />
        <div
          style={{
            backgroundColor: BLACK,
            borderRadius: "20px",
            maxHeight: DOT_SIZE,
            minHeight: DOT_SIZE,
            maxWidth: DOT_SIZE,
            minWidth: DOT_SIZE,
            position: "absolute",
            top: FACE_SIZE - DOT_SIZE - DOT_PADDING,
            left: DOT_PADDING,
          }}
        />
        <div
          style={{
            backgroundColor: BLACK,
            borderRadius: "20px",
            maxHeight: DOT_SIZE,
            minHeight: DOT_SIZE,
            maxWidth: DOT_SIZE,
            minWidth: DOT_SIZE,
            position: "absolute",
            top: FACE_SIZE - DOT_SIZE - DOT_PADDING,
            left: FACE_SIZE - DOT_SIZE - DOT_PADDING,
          }}
        />
      </div>
    );
  } else if (face === 5) {
    return (
      <div
        style={{
          backgroundColor: WHITE,
          borderRadius: "8px",
          maxHeight: `${FACE_SIZE}px`,
          minHeight: `${FACE_SIZE}px`,
          maxWidth: `${FACE_SIZE}px`,
          minWidth: `${FACE_SIZE}px`,
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: BLACK,
            borderRadius: "20px",
            maxHeight: `${DOT_SIZE}px`,
            minHeight: `${DOT_SIZE}px`,
            maxWidth: `${DOT_SIZE}px`,
            minWidth: `${DOT_SIZE}px`,
            position: "absolute",
            top: DOT_PADDING,
            left: DOT_PADDING,
          }}
        />
        <div
          style={{
            backgroundColor: BLACK,
            borderRadius: "20px",
            maxHeight: DOT_SIZE,
            minHeight: DOT_SIZE,
            maxWidth: DOT_SIZE,
            minWidth: DOT_SIZE,
            position: "absolute",
            top: DOT_PADDING,
            left: FACE_SIZE - DOT_SIZE - DOT_PADDING,
          }}
        />
        <div
          style={{
            backgroundColor: BLACK,
            borderRadius: "20px",
            maxHeight: DOT_SIZE,
            minHeight: DOT_SIZE,
            maxWidth: DOT_SIZE,
            minWidth: DOT_SIZE,
            position: "absolute",
            top: FACE_SIZE / 2 - DOT_SIZE / 2,
            left: FACE_SIZE / 2 - DOT_SIZE / 2,
          }}
        />
        <div
          style={{
            backgroundColor: BLACK,
            borderRadius: "20px",
            maxHeight: DOT_SIZE,
            minHeight: DOT_SIZE,
            maxWidth: DOT_SIZE,
            minWidth: DOT_SIZE,
            position: "absolute",
            top: FACE_SIZE - DOT_SIZE - DOT_PADDING,
            left: DOT_PADDING,
          }}
        />
        <div
          style={{
            backgroundColor: BLACK,
            borderRadius: "20px",
            maxHeight: DOT_SIZE,
            minHeight: DOT_SIZE,
            maxWidth: DOT_SIZE,
            minWidth: DOT_SIZE,
            position: "absolute",
            top: FACE_SIZE - DOT_SIZE - DOT_PADDING,
            left: FACE_SIZE - DOT_SIZE - DOT_PADDING,
          }}
        />
      </div>
    );
  } else if (face === 6) {
    return (
      <div
        style={{
          backgroundColor: WHITE,
          borderRadius: "8px",
          maxHeight: `${FACE_SIZE}px`,
          minHeight: `${FACE_SIZE}px`,
          maxWidth: `${FACE_SIZE}px`,
          minWidth: `${FACE_SIZE}px`,
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: BLACK,
            borderRadius: "20px",
            maxHeight: `${DOT_SIZE}px`,
            minHeight: `${DOT_SIZE}px`,
            maxWidth: `${DOT_SIZE}px`,
            minWidth: `${DOT_SIZE}px`,
            position: "absolute",
            top: DOT_PADDING,
            left: DOT_PADDING,
          }}
        />
        <div
          style={{
            backgroundColor: BLACK,
            borderRadius: "20px",
            maxHeight: DOT_SIZE,
            minHeight: DOT_SIZE,
            maxWidth: DOT_SIZE,
            minWidth: DOT_SIZE,
            position: "absolute",
            top: DOT_PADDING,
            left: FACE_SIZE - DOT_SIZE - DOT_PADDING,
          }}
        />
        <div
          style={{
            backgroundColor: BLACK,
            borderRadius: "20px",
            maxHeight: DOT_SIZE,
            minHeight: DOT_SIZE,
            maxWidth: DOT_SIZE,
            minWidth: DOT_SIZE,
            position: "absolute",
            top: FACE_SIZE / 2 - DOT_SIZE / 2,
            left: DOT_PADDING,
          }}
        />
        <div
          style={{
            backgroundColor: BLACK,
            borderRadius: "20px",
            maxHeight: DOT_SIZE,
            minHeight: DOT_SIZE,
            maxWidth: DOT_SIZE,
            minWidth: DOT_SIZE,
            position: "absolute",
            top: FACE_SIZE / 2 - DOT_SIZE / 2,
            left: FACE_SIZE - DOT_SIZE - DOT_PADDING,
          }}
        />
        <div
          style={{
            backgroundColor: BLACK,
            borderRadius: "20px",
            maxHeight: DOT_SIZE,
            minHeight: DOT_SIZE,
            maxWidth: DOT_SIZE,
            minWidth: DOT_SIZE,
            position: "absolute",
            top: FACE_SIZE - DOT_SIZE - DOT_PADDING,
            left: DOT_PADDING,
          }}
        />
        <div
          style={{
            backgroundColor: BLACK,
            borderRadius: "20px",
            maxHeight: DOT_SIZE,
            minHeight: DOT_SIZE,
            maxWidth: DOT_SIZE,
            minWidth: DOT_SIZE,
            position: "absolute",
            top: FACE_SIZE - DOT_SIZE - DOT_PADDING,
            left: FACE_SIZE - DOT_SIZE - DOT_PADDING,
          }}
        />
      </div>
    );
  }
};
