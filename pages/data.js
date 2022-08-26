const dataInformation = [
    {
        title: 'CommonVoice',
        description: `O objetivo dessa aplicação é utilizar diversos algoritmos de aprendizado de máquina 
        para solucionar com a maior acurácia possível um problema de classificação. Essa problema consiste basicamente
        em encontrar qual faixa etária uma voz de uma pessoa se encontra. `,
        image: 'images/portfolio/img.png',
        type: 3,
        language: 'Python'
    }, {
        title: 'oil-company',
        description: `Esse software foi desenvolvido para um trabalho final da materia de Automação em Tempo Real. 
      O intuito desse trabalho é aplicar o conhecimento de programação concorrente e paralela no Ambiente Windows.
      Nesse sentido, foi implementado uma arquitetura Multithread e Multiprogramming, na qual esses softwares se
      comunicam através de Pipes, arquivo mapeado em memória e arquivo em disco. Assim, foi possível usar os recursos
      da API do Windows (CreateProcess, WaitForSingleObject, CreateMutex, CreateSemaphore) dentre outros. 
      `,
        image: 'images/portfolio/img.png',
        type: 2,
        language: 'C++'
    }, {
        title: 'PCA',
        description: `Essa aplicação têm como objetivo utilizar o algoritmo de PCA 
        que têm como papel reduzir a dimensionalidade de um problema observando a sua taxa de variação. Assim, será possível 
        reduzir a dimensionalidade de um problema e reduzir o custo computacional para resolução de um problema de classificação.
        Foi utilizado essa técnica para resolução de um problema de reconhecimento facial. `,
        image: 'images/portfolio/img.png',
        type: 3,
        language: 'Python'
    }
    , {
        title: 'KDE',
        description: `Foi implementado o algoritmo de aprendizado de maquina KDE na base de dados
         mlbench.spirals e ver o seu resultado perante a classificação desse tipo de problema`,
        image: 'images/portfolio/img.png',
        type: 3,
        language: 'R'
    },
    {
        title: 'gaussianMixture',
        description: `Foi implementado o algoritmo de aprendizado de máquina referente ao método de aprendizado de maquina
      Mistura de Gaussiana e também o algoritmo para fazer cluster nos dados. Por fim, foi aplicado esse algoritmo de classificação
      na base de dados mlbench.spirals
      para ver o seu desempenho referente a porcentagem de acerto(acurácia) para os dados de testes.`,
        image: 'images/portfolio/img.png',
        type: 3,
        language: 'R'
    },
    {
        title: 'Clustering',
        description: `O objetivo desse algoritmo é implementar a clusterização de uma base de dados qualquer atráves da
      técnica em encontrar os K vizinhos mais próximos, promovendo assim o agrupamento de dados que estão próximos
      entre si.`,
        image: 'images/portfolio/img.png',
        type: 3,
        language: 'R'
    },
    {
        title: 'Bayes',
        description: `Foi implementado o algoritmo de classificação usando o teorema Bayesiano. Após isso,
       foi testado em uma base de dados gerados de duas classes e observou-se o resultado perante a classificação dessas amostras`,
        image: 'images/portfolio/img.png',
        type: 3,
        language: 'Python'
    },
    {
        title: 'LSSVM',
        description: `O objetivo dessa aplicação é usar o algoritmo LSSVM no dataset Glass e observar o resultado perante
        a acurácia e  Matriz de Confusão.`,
        image: 'images/portfolio/img.png',
        type: 3,
        language: 'R'
    },
    {
        title: 'SVM',
        description: `O objetivo dessa aplicação é entender o funcionamento e usar o algoritmo SVM em diferentes datesets e 
        observar o seu resultado perante a acurácia e  Matriz de Confusão e ver o impacto da utilização de diversos
        tipos de Kernels têm para a solução final do problema.`,
        image: 'images/portfolio/img.png',
        type: 3,
        language: 'Python e R'
    },
    {
        title: 'KNN',
        description: `O objetivo desse código é desenvolver o algoritmo de classificação KNN que consiste em encontrar
        a classe de uma amostra usando como base a classe dos seus K vizinhos mais próximos. `,
        image: 'images/portfolio/img.png',
        type: 3,
        language: 'Python'
    },
    {
        title: 'Automatic-vault',
        description: `Esse software foi desenvolvido como trabalho final da matéria Sistemas Digitais. O objetivo desse
      software é aplicar o conhecimento de criação de um processador usando portas lógicas, codificadores e decodificadores,
      multiplexadores, demultiplexadores, flip-flop dentre outros numa aplicação de um cofre automático. Assim, foi desenvolvido
      a maquina de estados e passou isso para uma tabela verdade para poder criar o Bloco de Controle e 
      implementação do bloco Operacional, que será composto por Somador, Multiplicador para fazer as operações matemáticas.
      Depois disso ser feito, foi desenvolvido o código em VHDL referente o funcionamento do Cofre Automático com senha.`,
        image: 'images/portfolio/img.png',
        type: 2,
        language: 'VHDL'

    },
    {
        title: 'Traveling-Salesman',
        description: `Essa é uma aplicação feita para um trabalho final de Teoria da decisão. O objetivo desse programa
      é resolver o problema de otimização Multiobjetivo do Caixeiro Viajante na qual consiste em encontrar uma rota com o menor tempo e a menor distância.
      Assim, foi implementado algorítmos de otimização(Epsilon-Restricted e Weighted Sum Method) e
      algoritmos de análise de decisão multicritério(ELECTRE I, AHP e GVNS).
      `,
        image: 'images/portfolio/img.png',
        type: 3,
        language: 'MatLab'
    },
    {
        title: 'MatrixMips',
        description: `Esse software foi desenvolvido como trabalho final da disciplina Arquitetura de Computadores. O
      objetivo desse software é implementar uma calculadora que faz Soma, multiplicação e Transposta de 2 matrizes em Assembly.`,
        image: 'images/portfolio/img.png',
        type: 2,
        language: 'Assembly'
    },
    {
        title: 'aws-client',
        description: `Essa é uma aplicação para a parte do FrontEnd que têm o papel de treinar os conhecimentos em Javascript, React e NextJS,
      conectando em um servidor implementado em Node que simula a parte de Registrar e Logar em um site do mundo real. Essa
      aplicação foi publicada na Amazon AWS usando o EC2.`,
        image: 'images/portfolio/img.png',
        type: 1,
        language: 'Javascript'
    },
    {
        title: 'aws-server',
        description: `Essa é uma aplicação para a parte do BackEnd que têm como papel de receber endpoints para fazer o login ou
      registrar um novo usuario nessa aplicação Web. Os dados são inseridos em um banco de dados local da aplicação
      (SQLite). Assim, qualquer requisição do Cliente para logar ou registrar, será enviado através de uma API a resposta
      para a requisição e os dados inseridos a partir dela.`,
        image: 'images/portfolio/img.png',
        type: 1,
        language: 'Javascript'
    },

]

export default dataInformation