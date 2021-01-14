export const header = () => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end"
})

export const logo = ({theme: {colors}}) => ({
    fontSize: "56px",
    lineHeight: "56px",
    color: colors.brandBlue,
    marginRight: "88px"
})

export const navigation = () => ({
    margin: "0 auto",
})

export const hamburger = () => ({
    display: "none",

    mobileMax: {
        display: "block"
    }
})

export const menu = () => ({
    display: "flex",
    paddingLeft: 0,

    "> li": {
        listStyle: "none",
        marginRight: "46px",

        ":last-of-type": {
            marginRight: 0
        }
    },

    mobileMax: {
        display: "none"
    }
})
