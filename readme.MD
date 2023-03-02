
# Casa de Câmbio

Esse projeto foi feito para praticar o conceito de Promises e operações assíncronas. Foi utilizado o método fetch para fazer requisições à API [Exchange Rate](https://exchangerate.host/).

Foi utilizado o framework Bootstrap para realizar a estilização da página. Dessa forma, o HTML fica responsivo funcionando em telas de diversos tamanhos.

A API [Sweet Alert 2](https://sweetalert2.github.io/) foi utilizada para adicionar funcionalidades às caixas de diálogo que aparecem quando a chamada à API Exchange Rate não é feita com sucesso.

A API de Exchange Rate é um serviço gratuito simples e leve para taxas de câmbio atuais, históricas e taxas de câmbio de criptomoedas. São taxas confiáveis e atualizadas, obtidas diretamente dos bancos de dados da União Europeia.
## Aprendizados

* Aplicar corretamente operações assíncronas;
* Utilizar Promises para lidar com códigos assíncronos;
* Utilizar a função fetch para fazer requisições externas;
* Praticar o uso do framework Bootstrap;
* Criar uma página web responsiva.

## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:jpvsouza/casa-de-cambio.git
```

Entre no diretório do projeto

```bash
  cd casa-de-cambio
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```


## Screenshots

![App Screenshot](https://github.com/jpvsouza/casa-de-cambio/blob/main/screenshot.png?raw=true)


## Autor

- [@jpvsouza](https://www.github.com/jpvsouza)


## Deploy

Para fazer o deploy desse projeto rode

```bash
  npm run build
```

Depois 

```bash
  surge dist
```

## Demonstração

https://jpvsouza-casa-de-cambio.surge.sh/

