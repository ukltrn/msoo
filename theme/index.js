export const colors = {
    background: '#0F1F2F',
    surface: '#1E2E3E',

    text: '#fff',
    textSubtle: '#CDCDCD',

    primary: '#5588ff',
    onPrimary: '#000000',
    link: '#5588ff',

    border: '#1E2E3E',

    success: '#22CC55',
    error: '#ff6666',
};

export function ThemeProvider({ children }) {
    return children;
}
