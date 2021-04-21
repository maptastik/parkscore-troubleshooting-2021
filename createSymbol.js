export default function createSymbol(color) {
    return {
      type: "simple-fill", // autocasts as new SimpleFillSymbol()
      color: color,
      outline: {
        width: 0.2,
        color: [0, 0, 0, 0.1]
      }
    }
  }

