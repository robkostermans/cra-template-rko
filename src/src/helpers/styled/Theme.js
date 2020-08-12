/**
 * Suport functions
 */

const color = (rgb, alpha = 1) => {
  return `rgba(${rgb},${alpha})`;
};

const hsla = (rgb, lightness = 0, alpha = 1) => {
  rgb = rgb.split(", ");

  let r = rgb[0] / 255;
  let g = rgb[1] / 255;
  let b = rgb[2] / 255;

  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);

  let h = (max + min) / 2;
  let s = (max + min) / 2;
  let l = (max + min) / 2 + lightness / 100;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l >= 0.5 ? d / (2 - (max + min)) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + 0) * 60;
        break;
      case g:
        h = ((b - r) / d + 2) * 60;
        break;
      case b:
        h = ((r - g) / d + 4) * 60;
        break;
      default:
        break;
    }
  }

  h = Math.round(h);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return `hsla(${h}, ${s}%, ${l}%, ${alpha})`;
};

/**
 * BASE THEME + VARIATIONS
 */

const palette = {
  c1: "12, 1, 22", // black
  c2: "255, 255, 255", /// white
  c3: "114, 108, 122", // gray
  c31: "35, 25, 43", // gray with opacity 0.2 recalculated

  c4: "112, 112, 112", //gray
  c5: "194, 94, 119", //red
  c6: "210, 164, 76", // yellow
  c7: "220, 230, 231", // lightgray
  c71: "248, 250, 250", // lightgray  with opacity 0.2 recalculated

  c8: "76, 210, 117", // green
  c9: "132, 0, 255", // purple

  c10: "213, 213, 213", // light gray

  //c11: "12, 37, 69", // blue
  c11: "10, 180, 255", // blue

  c12: "25, 43, 41", // green
};

const baseTheme = {
  importFont: "@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,700,900&display=swap');",
  font: "'Poppins', sans-serif;",
  textDark: color(palette.c1),

  priority: {
    0: color(palette.c3),
    1: color(palette.c5),
    2: color(palette.c6),
    3: color(palette.c8),
  },

  widgetBackgroundBlue: color(palette.c11, 0.2),
  widgetBackgroundGreen: color(palette.c8, 0.2),
  widgetBackgroundRed: color(palette.c5, 0.2),
};

export const Theme = {
  light: {
    ...baseTheme,

    logoForeground: color(palette.c9, 1),
    iconForeground: color(palette.c9, 1),
    iconForegroundHighLight: color(palette.c2, 1),
    canvas: color(palette.c2),
    canvas40: color(palette.c7, 0.4),
    canvas90: color(palette.c7, 0.9),

    canvas40Highlight: color(palette.c9, 0.4),
    background: color(palette.c71),
    foreground: color(palette.c1),
    subForeground: color(palette.c10),

    text: color(palette.c1),
    subtext: color(palette.c1, 0.4),
    accent: color(palette.c9),

    button: color(palette.c8),
    buttonHover: hsla(palette.c8, 0),

    tab: color(palette.c9, 0.4),
    tabInactve: color(palette.c9, 0.2),

    spinner: color(palette.c9),
  },

  dark: {
    ...baseTheme,
    logoForeground: color(palette.c2, 1),
    iconForeground: color(palette.c2, 1),
    iconForegroundHighLight: color(palette.c2, 1),
    canvas: color(palette.c1),
    canvas40: color(palette.c1, 0.4),
    canvas90: color(palette.c1, 0.9),
    canvas40Highlight: color(palette.c9, 0.4),

    background: color(palette.c31),
    foreground: color(palette.c2),
    subForeground: color(palette.c3),
    text: color(palette.c2),
    subtext: color(palette.c2, 0.4),
    accent: color(palette.c9),

    button: color(palette.c8),
    buttonHover: hsla(palette.c8, 20),

    tab: color(palette.c8, 0.4),
    tabInactve: color(palette.c8, 0.2),

    spinner: color(palette.c2),
  },
};
