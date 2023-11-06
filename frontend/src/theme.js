const mainColors = {
    pink50: '#E42575',
}

const theme = {
    mainColors,
    config: {
      useLocalStorage: false,
    },
    fonts: {
      body:
        '"Inter", sans-serif',
      heading: "inherit",
      monospace: "Menlo, monospace",
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.125,
    },
    breakpoints: ["576px", "768px", "992px", "1200px"],
    text: {
      headline: {
        fontWeight: "fontWeights.body",
      },
    },
    initialColorModeName: "dark",
    colors: {
      gray0: '#0508104D',
      gray50: '#43464D',
      white: 'white',
      white10: '#CDCDCD',
      navy0: '#7184CF',
      navy10: '#3756D3',
      navy20: '#0F1935',
      navy30: '#162336',
      navy40: '#050810',
      navy50: '#080C16',
      logoColor: "#3756D3",
      secondaryText: '#AFAFAF',
      titleText: 'white',
      text: "white",
      svgs: "#C4E0EB",
      inverseText: "black",
      background: "#050810",
      navbar: "#1B1325",
      inverseBackground: "white",
      primary: "#3A6AD4",
      cardOutline: '#22192E',
      pink50: '#E42575',
      modes: {
        dark: {
          logoColor: "#3756D3",
          secondaryText: '#AFAFAF',
          titleText: 'white',
          text: "white",
          svgs: "#C4E0EB",
          inverseText: "black",
          background: "#050810",
          navbar: "#1B1325",
          inverseBackground: "white",
          primary: "#3A6AD4",
          cardOutline: '#22192E',
          pink50: '#E42575',
        },
      },
    },
    buttons: {
      primary: {
        backgroundColor: "black",
        color: "white",
        fontSize: "16px",
      },
    },
    styles: {
      h1: {
        variant: "text.headline",
        fontSize: 8,
      },
      h2: {
        variant: "text.headline",
        fontSize: 7,
      },
      h3: {
        variant: "text.headline",
        fontSize: 6,
      },
      h4: {
        variant: "text.headline",
        fontSize: 5,
      },
      h5: {
        variant: "text.headline",
        fontSize: 4,
      },
      h6: {
        variant: "text.headline",
        fontSize: 3,
      },
      h7: {
        variant: "text.headline",
        fontSize: 2,
      },
      h8: {
        variant: "text.headline",
        fontSize: 1,
      },
      h9: {
        variant: "text.headline",
        fontSize: 0,
      },
      a: {},
    },
  };
  
  export default theme;
  