import { Store } from 'react-notifications-component';


 function message({ title, msg, type, duration }){
  let notification = {
    title: title ,
    message: msg ,
    type: type ,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated animate__fadeIn"], // `animate.css v4` classes
    animationOut: ["animate__animated animate__fadeOut"],
    dismiss: {
      duration: duration ? duration: 4000,
      onScreen: true,
      showIcon:true,
    },
  }

 return Store.addNotification(notification);
}

export default message;

// success
// danger
// info
// default
// warning