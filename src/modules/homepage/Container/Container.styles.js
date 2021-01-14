export const main = () => ({})

export const title = ({ theme: { colors } }) => ({
    color: colors.fuchsia,
    
    '& .ant-slider': {
        color: 'blue',
    },
    
    tabletLarge: {
        color: colors.red,
    }
})
