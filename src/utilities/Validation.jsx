export const checkValidity =(email,password)=>{
    const isEmail=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    // const isName=/^[a-zA-Z]+$/.test(userName);

    if(!isEmail) return"Email ID is not valid";
    if(!isPassword) return"Password is not valid";
    // if(!isName) return"Name is not valid";

    return null;
}