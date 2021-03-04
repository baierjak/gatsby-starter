export const hero = ({theme: {colors}}) => ({
    position: "relative",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto 1fr",
    padding: "57px 0",

    ":after": {
        position: "absolute",
        display: "block",
        content: '""',
        height: "1px",
        width: "100vw",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: colors.dividerGrey
    },

    mobileMax: {
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto auto auto",
        padding: "32px 0",

        ":after": {
            display: "none"
        }
    }
})

export const header = () => ({
    gridColumn: "1/2",
    gridRow: "1/2",
    padding: "40px 40px 40px 0",
    display: "flex",
    alignItems: "flex-end",

    mobileMax: {
        padding: "0 0 40px"
    }
})

export const title = () => ({
    gridColumn: "1/2",
    gridRow: "2/3",
    maxWidth: "560px",
    paddingRight: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    mobileMax: {
        padding: "0 0 64px"
    }
})

export const titleHighlighted = ({theme: {colors}}) => ({
    color: colors.brandBlue
})

import {HeroImage} from "../dependencies"

export const image = () => ({
    gridColumn: "2/3",
    gridRow: "1/3",
    height: "370px",

    ":after": {
        content: `""`,
        display: "block",
        position: "absolute",
        width: "100%",
        height: "370px",
        backgroundImage: `url("./images/hero.png")`,
        // backgroundImage: `url("${HeroImage}")`,
        backgroundRepeat: "no-repeat",
    },

    mobileMax: {
        gridColumn: "1/2",
        gridRow: "3/4",
        paddingLeft: "30px",
        paddingBottom: "76px"
    }
})

export const actions = ({theme: {colors}}) => ({
    display: "none",

    mobileMax: {
        gridColumn: "1/2",
        gridRow: "3/4",
        display: "block",
        margin: "auto 0",
        zIndex: 10,
    }
})

export const button = ({theme: {colors}}) => ({
    // @TODO: Font Rubik-Regular
    position: "relative",
    left: "-12px",
    display: "inline-flex",
    color: colors.white,
    background: colors.brandBlue,
    borderRadius: "12px",
    padding: "12px 24px",
    cursor: "pointer"
})
