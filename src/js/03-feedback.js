import throttle from 'lodash.throttle';

const refs = {
 form: document.querySelector(".feedback-form"),
 textarea: document.querySelector(".feedback-form textarea"),
 }
 
let formData = {};
const STORAGE_KEY = "feedback-form-state";

window.addEventListener('load', savedFormData);
refs.form.addEventListener("input", throttle(onFormInput, 500));
refs.form.addEventListener("submit", throttle(onFormSubmit, 500));

savedFormData();

function onFormInput(event){
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    console.log(formData);
};

function onFormSubmit(event){
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function savedFormData(){
     const savedFormData = localStorage.getItem(STORAGE_KEY);
     const parsedFormData = JSON.parse(savedFormData);
  
      if (parsedFormData) {
    formData = parsedFormData;
    refs.input.value = formData.email || '';
    refs.textarea.value = formData.message || '';
    console.log(formData);
  }};
    //  if(savedFormData){
    //      console.log(savedFormData);
    //      refs.form.input.value = parsedFormData.email;
    //      refs.form.textarea.value = parsedFormData.message;
    //  }
    
//     
    

// let data={"email":"","message":""};
// form.addEventListener("input", Throttle((event) => {
//         if (event.target.nodeName==="INPUT") {
//             data.email = event.target.value;
//         } else if (event.target.nodeName==="TEXTAREA") {
//             data.message = event.target.value;
//         }
//         if (data) {
//             localStorage.setItem("feedback-form-state", JSON.stringify(data));
//         }
//     }, 500));
// if (localStorage.getItem("feedback-form-state")) { 
//         data = JSON.parse(localStorage.getItem("feedback-form-state"));
//     }
//     email.value = data.email;
//     message.value = data.message;


// window.addEventListener('load', ()=>{
//     let mail = localStorage.getItem("UserMail");
//     if (mail){
//         formRef.elements.email.textContent = mail;
//     }
//     console.log(mail);
//     let message = localStorage.getItem("UserMessage");
//     if(message) {
//         textAreaRef.elements.message.textContent = message;
//     }
//     console.log(message);
// }); 

// formRef.addEventListener("submit", (event)=>{
//     event.preventDefault();
//     console.log(event);
//     });

// formRef.elements.email.addEventListener ("input", (event)=>{
//     const email = event.target.value;
//     console.log(message);
//     localStorage.setItem("UserMail", email);
// });
// textAreaRef.addEventListener ("input", (event)=>{
//     const message = event.target.value;
//     console.log(message);
//     localStorage.setItem("UserMessage", message);
// });


