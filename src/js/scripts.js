const form = document.querySelector("#form");
const form1 = document.querySelector("#form1");
// selecionar cada imput sao valores indepedentes
const nameInput = document.querySelector("#name");
const premioInput = document.querySelector("#premio");
const colorInput = document.querySelector("#color");
const emailInput = document.querySelector("#email");

// função validação
form1.addEventListener("submit", (event) => {
  event.preventDefault();
  // verifica se o premio está vazio o
  if (premioInput.value === "") {
    alert("Por favor, preencha o Valor do prêmio");
    return;
  }
  // se o email está preenchido e se é valido
  if (colorInput.value === "") {
    alert("Por favor, escolha a cor");
    return;
  }
  form1.submit();
});

form.addEventListener("submit", (event) => {
  //    validar antes de enviar
  event.preventDefault();

  // verifica se o nome está vazio o
  if (nameInput.value === "") {
    alert("Por favor, preencha seu nome");
    return;
  }

  // se o email está preenchido e se é valido
  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Por favor, preencha seu email");
    return;
  }
  //  se todos os campos estiverem corretamente preenchido envie o formulário (form)

  form.submit();
});

// função que valida email
function isEmailValid(email) {
  // cria uma regex para validar o email
  const emailRegex = new RegExp(
    // usuario12@host.com.br
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );
  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}

seletor = document.querySelector("input");
escolherCor();
function escolherCor() {
  document.body.style.backgroundColor = seletor.value;
}
