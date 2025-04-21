
---

### 📁 `README.md` – Projeto: Login Automático com Selenium


# 🤖 Automação de Login com Selenium WebDriver

Este projeto é um script simples de automação de testes de login usando **Selenium WebDriver com JavaScript (Node.js)**. Ele simula um usuário acessando o site de testes [`the-internet.herokuapp.com`](https://the-internet.herokuapp.com/login), preenchendo os campos de login e verificando o sucesso da operação.

---

## 🚀 Tecnologias Usadas

- [Node.js](https://nodejs.org/)
- [Selenium WebDriver](https://www.selenium.dev/)
- [ChromeDriver](https://sites.google.com/chromium.org/driver/)

---

## 🧪 Como executar o teste

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

2. Instale as dependências:

```bash
npm install selenium-webdriver
```

3. Execute o script:

```bash
node index.js
```

---

## 🖥️ O que o script faz

- Acessa a página de login
- Preenche os campos de usuário e senha
- Clica no botão de login
- Espera a confirmação de sucesso
- Exibe mensagens no console durante todo o processo

---

## ✅ Dados de Teste

| Campo    | Valor                   |
|----------|-------------------------|
| Usuário  | `tomsmith`              |
| Senha    | `SuperSecretPassword!`  |


---

## 📚 Aprendizados

- Prática com Node.js + Selenium
- Manipulação de elementos HTML via `By.id`, `By.name`, `By.xpath`
- Uso de `await`, `try/catch` e controle de execução com `async`

---

## 🤓 Autora

Feito com 💙 por [Karol](https://github.com/seu-usuario) — focada em QA, automação e tecnologia com propósito 🚀

---

## 📌 Notas

Esse é um projeto iniciante, ideal pra quem está começando com automação de testes. Em breve, será estendido para testes com múltiplos cenários e integração com frameworks de testes como **Mocha**, **Jest** e **Cypress**.

```
