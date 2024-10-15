
const addToLocalStorage = () => {
    const inputId = document.getElementById('input-id')
    const id = inputId.value;
    const inputValue = document.getElementById('input-value')
    const value = inputValue.value;
    if (id&&value) {
    localStorage.setItem(id, value);    
        
    }
    inputId.value = '';
    inputValue.value = '';
}