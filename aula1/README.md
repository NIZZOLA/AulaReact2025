# Aula 1
Conceito: criar um aplicativo básico em React com a criação das rotas para páginas

## Passo 1 - criação do projeto:
No prompt de comando, digite o comando:

```bash
npx create-react-app meuapp
```

Depois que ele for executado, você deverá entrar na pasta do projeto:

```bash
cd meuapp
```

Instalar o pacote de roteamento:

```bash
npm install react-router-dom
```

E através do comando:

```bash
code .
```

Que vai abrir o editor VSCode para editar os arquivos.

Também já execute o comando:

```bash
npm start
```

Ele vai iniciar o servidor, carregando a aplicação no seu navegador através de um endereço que no padrão é: `localhost:3000`

Caso tudo isso dê certo, você verá a seguinte tela no seu navegador:

![Tela do navegador com o site rodando](images/image01.png)

Observações:   
Em caso de erros no passo inicial, checar se na pasta do seu usuário no Windows existe uma pasta appdata/roaming/npm, caso ela não existir, crie sem nenhum item dentro.

## Passo 2 - Modificando o projeto base

O projeto base que foi criado possui a seguinte estrutura
![Tela do navegador com o site rodando](images/image02.png)

Teremos que criar 2 novas pastas dentro de Src:  
- components   
- pages   
   
Dentro de Components, crie 2 arquivos:   
- Navbar.css   
- Navbar.jsx   
   
Dentro de pages, crie 3 arquivos:   
- About.jsx   
- Contact.jsx   
- Home.jsx   

Agora teremos que colocar o código em cada um dos arquivos:  
Arquivo: Navbar.jsx   
[Ver código completo](./meu-app-router/src/components/Navbar.jsx)

Arquivo: Navbar.css   
[Ver código completo](./meu-app-router/src/components/Navbar.css)

Arquivo: About.jsx   
[Ver código completo](./meu-app-router/src/components/About.jsx)

Arquivo: Contact.jsx   
[Ver código completo](./meu-app-router/src/components/Contact.jsx)

Arquivo: Home.jsx   
[Ver código completo](./meu-app-router/src/components/Home.jsx)

Feito isso, agora só falta implementar as mudanças no arquivo App.js o qual já foi criado baseado no template, mas que deve ser modificado ficando assim:   
Arquivo: App.jsx   
[Ver código completo](./meu-app-router/src/App.jsx)


Neste arquivo está o ponto mais importante, pois vemos que estão sendo criadas as rotas que apontam para os endereços das páginas   
Rota	Componente
/	Home
/about	About
/contact	Contact

Vemos no topo que os comandos “import” estão incluindo os componentes criados nos arquivos Home.jsx, About.jsx e Contact.jsx para serem referência nos comandos “Route” , assim como o componente “Navbar” que é o menu da aplicação.
```bash
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
```

Vemos no layout que o componente “<Navbar />” inserido no corpo do App.js é o responsável pela exibição do menu da aplicação.


