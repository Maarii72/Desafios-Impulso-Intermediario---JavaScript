# Desafios-Impulso-Intermediario---JavaScript
Este repositório contém a atividade prática que faz parte do Impulso Fullstack Web Developer pela [Digital Innovation One](https://digitalinnovation.one/).

## Atividades

### Desafios
1. 1 / 4 - Degustação de vinho
2. 2 / 4 - Consumo Médio do Automóvel
3. 3 / 4 - A Corrida de Tartarugas
4. 4 / 4 - Pedro Bento e o Mundo de OZ

### 1 / 4 - Degustação de vinho
Degustação de vinho às escuras é a habilidade de identificar um vinho usando apenas seus sentidos do olfato e paladar.

Durante uma competição de degustação, uma garrafa de vinho é aberta e dividia em taças para que os cinco competidores possam provar. Eles podem cheiras, saborear e avaliar a bebida para conseguir identificar qual o tipo do vinho, sendo: (1) Cabernet; (2) Merlot; (3) Pinot Noir. No final, as respostas são verificadas para determinar o número de suposições corretas.

Dado o qual foi o tipo do vinho e as respostas fornecidas, determine o número de participantes que receberam a resposta correta.

**Entrada**
A primeira linha contém um inteiro T representando o tipo de vinho (1 ≤ T ≤ 4). A segunda linha contém cinco inteiros A, B, C, D e E, que indica a resposta dada por cada competidor (1 ≤ A, B, C, D, E ≤ 4).

**Saída**
A saída contém um inteiro representando o número de concorrentes que obtiveram a resposta correta.

| Exemplos de Entrada  | Exemplos de Saída   |
| ------- | -------- |
| 1<br>1 2 3 2 1  | 2    |
| 3<br>4 1 1 2 1   | 0    |

### 2 / 4 - Consumo Médio do Automóvel
Você deve calcular o consumo médio de um automóvel onde será informada a distância total percorrida (em Km) e o total de combustível consumido (em litros).

**Entrada**
Você receberá dois valores: um valor inteiro X com a distância total percorrida (em Km), e um valor real Y que representa o total de combustível consumido, com um dígito após o ponto decimal.

**Saída**
Exiba o valor que representa o consumo médio do automóvel (3 casas após a vírgula), incluindo no final a mensagem "km/l".

| Exemplos de Entrada  | Exemplos de Saída   |
| ------- | -------- |
| 500<br>35.0  | 14.286 km/l    |
| 2254<br>124.4   | 18.119 km/l    |
| 4554<br>464.6   | 9.802 km/l    |

### 3 / 4 - A Corrida de Tartarugas
A corrida de tartarugas é um esporte que cresceu muito nos últimos anos, fazendo com que vários competidores se dediquem a capturar tartarugas rápidas, e treina-las para faturar milhões em corridas pelo mundo. Porém a tarefa de capturar tartarugas não é uma tarefa muito fácil, pois quase todos esses répteis são bem lentos. Cada tartaruga é classificada em um nível dependendo de sua velocidade:


Nível 1: Se a velocidade é menor que 10 cm/h .
Nível 2: Se a velocidade é maior ou igual a 10 cm/h e menor que 20 cm/h .
Nível 3: Se a velocidade é maior ou igual a 20 cm/h .

Sua tarefa é identificar qual o nível de velocidade da tartaruga mais veloz de um grupo.

**Entrada**
A entrada consiste de múltiplos casos de teste, e cada um consiste em duas linhas: A primeira linha contém um inteiro L (1 ≤ L ≤ 500) representando o número de tartarugas do grupo, e a segunda linha contém L inteiros Vi (1 ≤ Vi ≤ 50) representando as velocidades de cada tartaruga do grupo.

**Saída**
Para cada caso de teste, imprima uma única linha indicando o nível de velocidade da tartaruga mais veloz do grupo.

| Exemplos de Entrada  | Exemplos de Saída   |
| ------- | -------- |
| 10<br>10 10 10 10 15 18 20 15 <br>11 10 <br>10
<br>1 5 2 9 5 5 8 4 4 3
<br>10
<br>19 9 1 4 5 8 6 11 9 7  | 3<br>1<br>2<br>    |

### 4 / 4 - Pedro Bento e o Mundo de OZ
No jogo, O Mundo de Oz, Pedro Bento é o líder do Tribunal, por causa disso ele é uma das pessoas mais importantes do mundo, no jogo. Além disso, Pedro Bento possui um grande tesouro, o qual possui diversos tipos de jóias.

Pedro Bento está muito curioso para saber quantos tipos de jóias diferentes seu tesouro possui.

Sabendo que você é o melhor programador do mundo, Pedro Bento te contratou para verificar quantos tipos de jóias distintas ele tem em seu tesouro.

**Entrada**
A entrada consiste de várias linhas e cada uma contém uma string que descreve uma das jóias de Pedro Bento. Essa string é composta apenas dos caracteres '(' e ')', a soma do tamanho de todas as string não excede 106.

**Saída**
Imprima quantos tipos de jóias distintas Pedro Bento possui.

| Exemplos de Entrada  | Exemplos de Saída   |
| ------- | -------- |
| ((<br>))<br>((<br>))<br>(  | 3    |
