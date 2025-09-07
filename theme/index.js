export const colors = {
    background: '#0F1F2F',
    surface: '#1E2E3E',

    text: '#FEFEFE',
    textSubtle: '#CDCDCD',

    primary: '#1D4ED8',
    onPrimary: '#FFFEEE',
    link: '#1D4ED8',

    border: '#1E2E3E',

    success: '#22CC55',
    error: '#AA4422',
};

export function ThemeProvider({ children }) {
    return children;
}
