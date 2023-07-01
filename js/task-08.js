const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  //   const result =
  //     !email.value || !password.value
  //       ? alert("Пошта або пароль не введені")
  //       : {
  //           email: email.value,
  //           password: password.value,
  //         };

  //   console.log(result);
  //   event.currentTarget.reset();

  if (!email.value || !password.value) {
    return alert("Пошта або пароль не введені");
  } else {
    const loginObj = {
      email: email.value,
      password: password.value,
    };

    console.log(loginObj);
    event.currentTarget.reset();
  }
}

// Задокоментовано спосіб за допомогою тернарного оператора,
// Тільки якщо виводиться alert - в консоль буде падати undefined
