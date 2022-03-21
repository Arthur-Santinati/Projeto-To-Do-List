const apagaTudo = document.getElementById('apaga-tudo'); // botao limpa tudo
const apagaFinalizados = document.getElementById('remover-finalizados');
const apagaSelecionado = document.getElementById('remover-selecionado');
const buttonTarefa = document.getElementById('criar-tarefa'); // botao
const inputTarefa = document.getElementById('texto-tarefa'); // input
const listaTarefas = document.getElementById('lista-tarefas'); // ol

function braba(minhaLi) {
  minhaLi.addEventListener('click', () => {
    for (let i = 0; i < listaTarefas.children.length; i += 1) {
      const lista = listaTarefas.children[i];
      if (lista.classList.contains('selected')) {
        lista.classList.remove('selected');
      }
    }
    minhaLi.classList.add('selected');
  });
}
// limpa o input no final, cria uma li quando eu adiciono uma tarefa
buttonTarefa.addEventListener('click', () => {
  const taskElement = document.createElement('li');
  const valueInput = inputTarefa.value;
  taskElement.className = 'task-element';
  taskElement.innerText = valueInput;
  listaTarefas.appendChild(taskElement);
  inputTarefa.value = '';
  braba(taskElement);
});
// apagando toda a lista quando eu clico no botão
apagaTudo.addEventListener('click', () => {
  listaTarefas.innerHTML = '';
});
// riscando os elementos que eu clico duas vezes

listaTarefas.addEventListener('dblclick', (riscado) => {
  if (riscado.target.classList.contains('completed')) {
    riscado.target.classList.remove('completed');
  } else {
    riscado.target.classList.add('completed');
  }
});

// apaga os riscados quando eu clico no botao
apagaFinalizados.addEventListener('click', () => {
  for (let index = listaTarefas.children.length - 1; index >= 0; index -= 1) {
    const element = listaTarefas.children[index];
    // const elementsClass = listaTarefas.classList.add('completed');
    if (element.classList.contains('completed')) {
      element.remove();
    }
  }
});

apagaSelecionado.addEventListener('click', () => {
  for (let index = 0; index < listaTarefas.children.length; index += 1) {
    const element = listaTarefas.children[index];
    if (element.classList.contains('selected')) {
      element.remove();
    }
  }
});

// buttonTarefa.addEventListener('click', () => {
//   const taskElement = document.createElement('li');
//   const valueInput = inputTarefa.value;
//   taskElement.className = 'task-element';
//   taskElement.innerText = valueInput;
//   listaTarefas.appendChild(taskElement);
// });
