# Node Mailng Service

![Simbolo do NodeJS ao lado de uma imagem que representa um envio de email](https://www.pedrobarboza.com/_next/image?url=%2Fnode-mailing-service.png&w=640&q=75)

Serviço de envio de email construído com NodeJS e a biblioteca Nodemailer.

---

## Como rodar

Primeiro, você precisará preencher as seguintes variáveis de ambiente:

OBS: Nesse projeto eu fixei o host de envio de emails com o valor `smtp.office365.com`, logo é necessário que o email configurado em `NODEMAILER_USER` seja do domínio `@outlook.com`.
```.env
# Esse é o email que será usado para enviar os emails
NODEMAILER_USER=email@email.com

# Senha da conta de email selecionada
NODEMAILER_PASS=senha_da_conta_do_email_selecionado

# Email que aparecerá como o remetente do email. 
# Grande parte dos provedores exigem que o remetente seja igual ao endereço de onde são enviados os emails.
NODEMAILER_SENDER=email@email.com
```

Instale as dependências:
```bash
$ yarn
```

Gere o build do projeto:
```
$ yarn build
```

Inicie o projeto:
```
$ yarn start
```

Se quiser rodar em desenvolvimento:
```
$ yarn dev
```

Ou use o comando abaixo para poder ver o logs da aplicação
```
$ yarn dev:DEBUG
```

Após iniciar a aplicação, a rota `POST - /sendMail` ficará disponível.

Para enviar um email através dela, preencha o corpo da requisição seguindo o modelo abaixo:
```json
{
  "to": "email@email.com"
  "subject": "Assunto do email"
  "text": "Conteúdo de texto simples do email"
  "html": "Conteúdo do email em HTML"
}
```
Essa chamada retornará um objeto com os campos `accepted`, que é um array que contém os endereços que aceitaram o email enviado,
e `rejected`, que é um array que contém os endereços que rejeitaram o email enviado.
```json
{
  "accepted": ["email@email.com"]
  "rejected": []
}
```


