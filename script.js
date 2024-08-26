const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Dancer, visual, face, center, vocal, líder, rapper ou maknae? Responda as perguntas do quiz abaixo, para saber qual posição você seria se estivesse debutando em grupo de k-pop! E não se esqueça de compartilhar e comentar qual foi a sua posição. Dancer, visual, face, center, vocal, líder, rapper ou maknae? Responda as perguntas do quiz abaixo, para saber qual posição você seria se estivesse debutando em grupo de k-pop! E não se esqueça de compartilhar e comentar qual foi a sua posição.",
        alternativas: [
            {
                texto: "Música clássica, indie, um estilo mais calmo...",
                afirmacao: "Você é uma pessoa com um estilo mais calmo. "
            },
            {
                texto: "hip-hop, rap, k-pop, pop...",
                afirmacao: "Você é uma pessoa com uma vibe mais animada "
            }
        ]
    },
    {
        enunciado: "Com a descoberta deste novo grupo, logo você se depara com opções e grandes empresas da Coréia do Sul para decidir qual você e seu grupo irão debutar para assim começarem seus MVs, disco, shows... ( entre as mais famosas)?",
        alternativas: [
            {
                texto: "JYP Entertainment. Seu nome remete às iniciais do fundador, o músico Park Jin-Young. Constituída em 1997, lançou vários grupos de sucesso, como TWICE, GOT7, ITZY, Boy Story e NMIXX. É responsável por uma das maiores atuais do k-pop, Stray Kids.",
                afirmacao: "Uau! você tem um gosto bem peculiar, prefere algo mais animado e eletrizante"
            },
            {
                texto: "Hybe Corp. A empresa teve origem em 2005, com a Big Hit Entertainment, criada pelo compositor e produtor Bang Si-hyuk. O artista, que antes trabalhava na JYP, uma das chamadas “Big Three”, é conhecido como o mentor do BTS.",
                afirmacao: "Sentiu mais a vontade por ser uma empresa bem conhecida mundialmente para não correr riscos"
            }
        ]
    },
    {
        enunciado: "Depois de você ter sido escolhido na empresa, logo voce deu de cara com muitos participantes mas tendo em mente que pode escolher essas suas opções da quantidade de membros no seu grupo",
        alternativas: [
            {
                texto: "3 a 6 pessoas, pois nao gosto muito de socializar e prefiro para poder focar mais em meus objetivos com meus colegas",
                afirmacao: "Você é uma pessoa muito na sua, e prefere apenas o pequeno grupo para poder se adpatar melhor"
            },
            {
                texto: "7 ou mais pessoas, gosto de interagtir e ser bastante cominicativa com os outros tendo facilidade em lidar com grandes grupos",
                afirmacao: "Você é mais do tipo comunicativo(a), gosta de ser aminado(a) e social com a galera em sua volta"
            }
        ]
    },
    {
        enunciado: "No final sua ultima parte foi de escolher entre um grande lider ou um caçula do grupo. Qual foi sua escolha?",
        alternativas: [
            {
                texto: "Unnie Line (Lider)",
                afirmacao: "Sendo considerado um pai(mae) do grupo, sempre se preocupando e estando ali para ajudar o próximo no que for preciso."
            },
            {
                texto: "Maknae Line (o mais novo do grupo).",
                afirmacao: "Te consideram com o bebê do grupo, o mais novo aquele que todos adoram, e e o mais notavel "
            }
        ]
    },
    {
        enunciado: "No final você deparou com o resultado do seu teste e pediram para dar a opiniao do que voce preferia ser",
        alternativas: [
            {
                texto: "você seria um ótimo dancer. Você iria arrasar nas coreografias e dar seu nome no break dance durante as performances do grupo, essa seria sua posição se debutasse em um grupo.",
                afirmacao: "Foi uma otima escolha, Aquele que se destaca nas apresentações e faz bem as coreografias, além de ensiná-las aos outros. Seu corpo é bem flexível e pode fazer coisas incríveis."
            },
            {
                texto: "voce seria um ótimo visual.A posição de visual no kpop pode se assemelhar a anterior, mas nesse caso trata-se daquele(a) integrante que é considerado(a), pelo público, o(a) mais bonito(a) de acordo com os padrões de beleza de seu país.",
                afirmacao: "Sua beleza é o que mais chamaria atenção no grupo, sem contar na sua voz. Ser o (a) visual te daria bastante popularidade e reconhecimento. Você seria bastante vaidoso (a). "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Dancer, visual, face, center, vocal, líder, rapper ou maknae? Responda as perguntas do quiz abaixo, para saber qual posição você seria se estivesse debutando em grupo de k-pop! E não se esqueça de compartilhar e comentar qual foi a sua posição. Dancer, visual, face, center, vocal, líder, rapper ou maknae? Responda as perguntas do quiz abaixo, para saber qual posição você seria se estivesse debutando em grupo de k-pop! E não se esqueça de compartilhar e comentar qual foi a sua posição.",
        alternativas: [
            {
                texto: "Música clássica, indie, um estilo mais calmo...",
                afirmacao: "Você é uma pessoa com um estilo mais calmo. "
            },
            {
                texto: "hip-hop, rap, k-pop, pop...",
                afirmacao: "Você é uma pessoa com uma vibe mais animada "
            }
        ]
    },
        {
        enunciado: "Com a descoberta deste novo grupo, logo você se depara com opções e grandes empresas da Coréia do Sul para decidir qual você e seu grupo irão debutar para assim começarem seus MVs, disco, shows... ( entre as mais famosas)?",
        alternativas: [
            {
                texto: "JYP Entertainment. Seu nome remete às iniciais do fundador, o músico Park Jin-Young. Constituída em 1997, lançou vários grupos de sucesso, como TWICE, GOT7, ITZY, Boy Story e NMIXX. É responsável por uma das maiores atuais do k-pop, Stray Kids.",
                afirmacao: "Uau! você tem um gosto bem peculiar, prefere algo mais animado e eletrizante"
            },
            {
                texto: "Hybe Corp. A empresa teve origem em 2005, com a Big Hit Entertainment, criada pelo compositor e produtor Bang Si-hyuk. O artista, que antes trabalhava na JYP, uma das chamadas “Big Three”, é conhecido como o mentor do BTS.",
                afirmacao: "Sentiu mais a vontade por ser uma empresa bem conhecida mundialmente para não correr riscos"
            }
        ]
    },
        {
        enunciado: "Depois de você ter sido escolhido na empresa, logo voce deu de cara com muitos participantes mas tendo em mente que pode escolher essas suas opções da quantidade de membros no seu grupo",
        alternativas: [
            {
                texto: "3 a 6 pessoas, pois nao gosto muito de socializar e prefiro para poder focar mais em meus objetivos com meus colegas",
                afirmacao: "Você é uma pessoa muito na sua, e prefere apenas o pequeno grupo para poder se adpatar melhor"
            },
            {
                texto: "7 ou mais pessoas, gosto de interagtir e ser bastante cominicativa com os outros tendo facilidade em lidar com grandes grupos",
                afirmacao: "Você é mais do tipo comunicativo(a), gosta de ser aminado(a) e social com a galera em sua volta"
            }
        ]
    },
   {
        enunciado: "No final sua ultima parte foi de escolher entre um grande lider ou um caçula do grupo. Qual foi sua escolha?",
        alternativas: [
            {
                texto: "Unnie Line (Lider)",
                afirmacao: "Sendo considerado um pai(mae) do grupo, sempre se preocupando e estando ali para ajudar o próximo no que for preciso."
            },
            {
                texto: "Maknae Line (o mais novo do grupo).",
                afirmacao: "Te consideram com o bebê do grupo, o mais novo aquele que todos adoram, e e o mais notavel "
            }
        ]
    },
    {
        enunciado: "No final você deparou com o resultado do seu teste e pediram para dar a opiniao do que voce preferia ser",
        alternativas: [
            {
                texto: "você seria um ótimo dancer. Você iria arrasar nas coreografias e dar seu nome no break dance durante as performances do grupo, essa seria sua posição se debutasse em um grupo.",
                afirmacao: "Foi uma otima escolha, Aquele que se destaca nas apresentações e faz bem as coreografias, além de ensiná-las aos outros. Seu corpo é bem flexível e pode fazer coisas incríveis."
            },
            {
                texto: "voce seria um ótimo visual.A posição de visual no kpop pode se assemelhar a anterior, mas nesse caso trata-se daquele(a) integrante que é considerado(a), pelo público, o(a) mais bonito(a) de acordo com os padrões de beleza de seu país.",
                afirmacao: "Sua beleza é o que mais chamaria atenção no grupo, sem contar na sua voz. Ser o (a) visual te daria bastante popularidade e reconhecimento. Você seria bastante vaidoso (a). "
            }
        ]
    },
];

