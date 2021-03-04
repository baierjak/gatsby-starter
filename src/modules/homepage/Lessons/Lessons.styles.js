export const lessons = () => ({
    display: "flex",
    flexDirection: "column",
    paddingTop: "40px",
})

export const list = () => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    columnGap: "90px",
    marginTop: "10px",

    mobileMax: {
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto"
    }
})

export const item = () => ({
    mobileMax: {
        marginBottom: "20px"
    }
})

export const itemImage = () => ({
    "> img": {
        display: "block",
        width: "100%",
        objectFit: "cover",
        borderRadius: "24px"
    }
})

export const itemInfo = () => ({
    display: "flex",
    flexDirection: "column"
})

export const properties = () => ({
    display: "flex",
    marginTop: "16px"
})

export const property = ({theme: {colors}}) => ({
    background: colors.brandLightBlue,
    borderRadius: "12px",
    padding: "8px 12px",
    marginRight: "8px",

    ":last-of-type": {
        marginRight: 0
    },

    "> span": {
        fontSize: "14px",
        lineHeight: "16px"
    }
})

export const empty = ({theme: {colors}}) => ({
    gridColumn: "1/4",
    display: "flex",
    justifyContent: "center",
    padding: "40px 0",

    "> h4": {
        color: colors.darkerGrey
    }
})
