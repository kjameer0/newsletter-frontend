function handleSubcribeButtonSubmit() {
  let form = document.querySelector(".subscribe-form");
  form.addEventListener("submit", emailSubmitHandler);
}
function emailSubmitHandler(evt) {
  try {
    evt.preventDefault();
    const emailRegex = /(^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$) | (^$)/;
    let formdata = new FormData(this);
    let input = formdata.get("email");
    let errorText = "";
    if (!emailRegex.test(input)) {
      if (input.length === 0) {
        errorText = "No email provided";
      } else {
        errorText = "Invalid email address";
      }
      throw new Error(errorText)
    }
    alert(input);
  } catch (error) {
    console.error(error.message || 'unknown error');
    activateErrorStateSubscribe(error.message)
  }
}

function activateErrorStateSubscribe(errorText) {

}
handleSubcribeButtonSubmit();
