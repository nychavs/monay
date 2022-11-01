import useLocalStorage from 'use-local-storage';

function Dark(){
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
    
    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    } 
    return theme
}
export default Dark;