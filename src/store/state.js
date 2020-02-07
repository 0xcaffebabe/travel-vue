let defaultCity = '漳州'

try{
    defaultCity = localStorage.city || '漳州'
}catch (e) {}

export default {
    city: defaultCity
}
