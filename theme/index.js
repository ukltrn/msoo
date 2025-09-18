export const colors = {
    background: '#0F1F2F',
    surface: '#1E2E3E',
    card: '#2E3E4E',


    text: '#fff',
    textSubtle: '#CDCDCD',

    primary: '#5588ff',
    onPrimary: '#0F1F2F',

    border: '#1E2E3E',
    shadow: '#111',

    success: '#22CC55',
    error: '#ff6666',
};

export function ThemeProvider({ children }) {
    return children;
}
