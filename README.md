# Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

### Table of contents
## Overview
### The challenge
Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
### Screenshot
#### Desktop
![image](https://github.com/Dtoo007/Newsletter-sign-up-form/assets/77025398/6bdc6822-4253-487f-9c62-e50df9bfc3e6)
#### Desktop: Hover state
![image](https://github.com/Dtoo007/Newsletter-sign-up-form/assets/77025398/6bb5b99d-6ce5-41e5-b3be-dd8057f46cfa)
#### Email formatting: The email address is not formatted correctly
![image](https://github.com/Dtoo007/Newsletter-sign-up-form/assets/77025398/2c700fd9-ade3-4034-b33c-740d8b2026e4)
#### Email formatting: The email address is formatted correctly
![image](https://github.com/Dtoo007/Newsletter-sign-up-form/assets/77025398/7bbfe485-00f9-4cf1-bb8d-42abfcfec115)
#### Desktop: Success message 
![image](https://github.com/Dtoo007/Newsletter-sign-up-form/assets/77025398/2a06c1e5-22b1-4c62-a87d-facc016bb80c)
#### Mobile
![20240428_054207](https://github.com/Dtoo007/Newsletter-sign-up-form/assets/77025398/49a10f07-08d1-4e24-bbb2-6abcec065cad)
#### Mobile: Success message
![20240428_054222](https://github.com/Dtoo007/Newsletter-sign-up-form/assets/77025398/f2d99507-9573-4150-9ffe-759fe3584d1f)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned
- CSS
  - styling of list item
  - styling of input filed 
- ReactJs
  - hook - usestate
  - props drilling 
  - component lifting up
  - regular expression for a valid email format

This function validates an email address using a regular expression and stores the result in the ``` validEmail ```  variable. Additionally, it checks the length of the text in the input field. This feature allows users to clear the input field entirely to remove any error messages and reset the input field's background color, which indicates an incorrect email format.

```  function handleValid (e) {
    const inputValue = e.target.value;
    setEmail(inputValue)
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue)
    setCheckMail(validEmail);
    if(inputValue.length == 0) {
      setInputState('input');
      setSubmitted(false);
    }
 ```



## Author
- [Frontend Mentor](https://www.frontendmentor.io/profile/Dtoo007)
- [X (formerly known as Twitter )](https://twitter.com/CuriosityPrompt)






