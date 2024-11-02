CREATE TABLE IF NOT EXISTS category (
  categoryId SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS recipe (
  recipeId SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  categoryId INT REFERENCES category(categoryId),
  portions INT,
  ingredients TEXT[],
  prepare TEXT
);

/* INSERTS */
INSERT INTO categories (categoryName) VALUES
  ('Tortas'),
  ('Bolos'),
  ('Sobremesas'),
  ('Refeições'),
  ('Sucos'),
  ('Pães'),
  ('Biscoitos');

INSERT INTO recipe (name, categoryId, portions, ingredients, prepare)
VALUES (
    'Carne com batata e creme de queijo',
    (SELECT categoryId FROM category WHERE name = 'Refeições'),
    2, 
    ARRAY[
        '400g de contra filé', 
        'sal', 
        'chimichurri', 
        'pimenta do reino', 
        'azeite', 
        'páprica picante', 
        '250g de creme de leite', 
        '50g de parmesão ralado', 
        'noz moscada', 
        'salsinha', 
        '5 batatas inglesas médias'
    ],
    'Corte as batatas em cubinhos ainda com a casca e tempere com sal, azeite e páprica picante. Leve ao forno. Doure a carne em um fio de azeite e tempere com o sal, pimenta do reino e chimichurri. Quando a carne dourar, reserve, e na mesma frigideira coloque o creme de leite, o queijo parmesão ralado e a noz moscada. Misture bem até o queijo derreter e depois misture a carne ao creme de queijo. Sirva com as batatas e salsinha picada por cima.'
);

INSERT INTO recipe (name, categoryId, portions, ingredients, prepare)
VALUES (
    'Torta de Frango', 
    (SELECT categoryId FROM category WHERE name = 'Tortas'), 
    8,
    ARRAY[
        '1½ xícara de farinha de trigo', 
        '½ caixinha de creme de leite', 
        '100g de manteiga', 
        'Sal a gosto', 
        '1 colher de fermento químico em pó', 
        '300g de frango desfiado, cozido e temperado', 
        '100g de requeijão cremoso', 
        '1 caixinha de creme de leite', 
        '2 ovos', 
        '50g de mussarela ralada'
    ], 
    'Massa: Misture a farinha, creme de leite, manteiga, sal e fermento até formar uma massa uniforme. Espalhe a massa em uma forma de fundo removível, faça furinhos no fundo e asse a 200°C por 15 minutos. Recheio: Misture o frango desfiado com o requeijão cremoso. Cobertura: Misture o creme de leite, ovos e a mussarela (reserve um pouco da mussarela para cobrir no final). Montagem: Coloque o recheio de frango na massa pré-assada, cubra com a mistura da cobertura e finalize com o restante da mussarela. Leve ao forno novamente até dourar.'
);

INSERT INTO recipe (name, categoryId, portions, ingredients, prepare)
VALUES (
    'Sopa de Tomate com Molho Pesto e Queijo Quente', 
    (SELECT categoryId FROM category WHERE name = 'Refeições'), 
    4, 
    ARRAY[
        '3 tomates italianos', 
        '½ pimentão vermelho', 
        '½ cebola', 
        'Alho a gosto', 
        'Sal a gosto', 
        'Páprica defumada a gosto', 
        'Pimenta do reino a gosto', 
        'Azeite a gosto', 
        '½ cenoura', 
        '½ cebola', 
        'Manjericão a gosto', 
        '125g de creme de leite', 
        '½ xícara de manjericão', 
        '1 colher de sopa de castanha', 
        '1 dente de alho pequeno', 
        '3-4 colheres de azeite', 
        '2 colheres de sopa de parmesão', 
        'Queijo minas a gosto', 
        'Queijo parmesão a gosto', 
        'Pão de forma', 
        'Manteiga a gosto'
    ], 
    'No forno: Picar os tomates, pimentão, cebola e alho, temperar com sal, páprica defumada, pimenta do reino e regar com azeite. Assar no forno. Na panela: Picar a cenoura, cebola e alho, refogar e adicionar os ingredientes assados no forno. Acrescentar manjericão e bater no liquidificador. Voltar a mistura para a panela e adicionar o creme de leite. Molho pesto: Macerar o alho com sal, adicionar manjericão e castanhas picadas, macerar novamente, adicionar o parmesão e azeite aos poucos até obter a consistência desejada. No queijo quente: Ralar os queijos, passar manteiga em todos os lados do pão, montar o sanduíche com os queijos e molho pesto e tostar na frigideira.'
);

INSERT INTO recipe (name, categoryId, portions, ingredients, prepare)
VALUES (
    'Cookie de Whey', 
    (SELECT categoryId FROM category WHERE name = 'Biscoitos'), 
    13, 
    ARRAY[
        '124 colheres de sopa de iogurte natural proteico', 
        '2 colheres de sopa de óleo de coco', 
        '2 colheres de chá de essência de baunilha', 
        '55g de açúcar demerara', 
        '127g de farinha de aveia', 
        '56g de proteína em pó', 
        '5g de fermento químico em pó', 
        '1 pitada de sal', 
        '3 colheres de sopa de gotas de chocolate meio amargo', 
        '25g de castanhas de caju picadas'
    ], 
    'Pré-aqueça o forno a 180ºC. Em uma vasilha, misture o iogurte, o óleo de coco e a essência de baunilha até ficar homogêneo. Acrescente o açúcar, a farinha de aveia, a proteína em pó e misture novamente até formar uma massa. Adicione o fermento em pó e misture bem. Acrescente as gotas de chocolate, as castanhas e uma pitada de sal, misture novamente. Em uma forma untada com óleo de coco, disponha a massa em bolinhas levemente afastadas e asse por aproximadamente 20 minutos.'
);

INSERT INTO recipe (name, categoryId, portions, ingredients, prepare)
VALUES (
    'Bolo de Cenoura', 
    (SELECT categoryId FROM category WHERE name = 'Bolos'), 
    15, 
    ARRAY[
        '300g de cenouras médias', 
        '150g de ovos', 
        '110g de óleo', 
        '5g de fermento em pó', 
        '250g de farinha de trigo', 
        '200g de açúcar',
        '20g de margarina (para a cobertura)', 
        '200g de leite condensado', 
        '30g de chocolate em pó', 
        '240g de leite'
    ], 
    'Coloque no liquidificador a cenoura descascada e picada, os ovos inteiros e o óleo, e bata até formar um creme. Em uma vasilha separada, coloque o trigo e o açúcar. Junte o creme do liquidificador e bata por alguns minutos. Por último, coloque o fermento em pó e mexa bem. Coloque para assar em forno médio, preaquecido, por aproximadamente 40 minutos, ou até dourar. Para a cobertura, coloque todos os ingredientes em uma panela e mexa até engrossar.'
);

INSERT INTO recipe (name, categoryId, portions, ingredients, prepare)
VALUES (
    'Pão de Mel', 
    (SELECT categoryId FROM category WHERE name = 'Pães'), 
    15,
    ARRAY[
        '250g de leite', 
        '260g de farinha de trigo peneirada', 
        '55g de chocolate em pó', 
        '180g de açúcar mascavo', 
        '10g de bicarbonato de sódio', 
        '2g de cravo em pó', 
        '4g de canela em pó', 
        '150g de mel', 
        '130g de doce de leite', 
        '500g de cobertura de chocolate meio-amargo'
    ], 
    'Leve o leite ao fogo até abrir fervura, desligue e reserve. Em uma tigela grande, peneire a farinha de trigo, o chocolate em pó, o bicarbonato, o cravo e a canela. Acrescente o açúcar mascavo (caso tenha alguns torrões de açúcar, desmanche-os todos), misture bem, adicione o mel e o leite quente. Misture até obter uma massa lisa, ou seja, a massa fica mais encorpada. Unte e enfarinhe forminhas próprias para pão de mel e despeje a massa até metade. Ligue o forno em 180º para pré-aquecer. Coloque todas as forminhas com a massa em uma assadeira e leve ao forno. Nos primeiros 10 minutos, abaixe a temperatura do forno para 160º; passados esses 10 minutos, aumente a temperatura para 180º novamente e asse por mais ou menos 30 minutos ou até que ao enfiar um palito, o mesmo saia limpo. Não deixe dentro do forno após desligá-lo, para que não sequem. Espere amornar, desenforme e coloque os pães de mel em uma superfície forrada com papel manteiga ou papel alumínio. Após esfriar, corte-os ao meio e utilize o recheio escolhido. Uma vez recheados, feche os pães novamente e cubra com o chocolate meio amargo derretido em banho-maria.'
);

INSERT INTO recipe (name, categoryId, portions, ingredients, prepare)
VALUES (
    'Suco Laramora', 
    (SELECT categoryId FROM category WHERE name = 'Bebidas'), 
    2,
    ARRAY[
        '200ml de suco de laranja',
        '150g de morangos congelados',
        '100g de água'
    ], 
    'Corte as laranjas, esprema-as e coloque o suco em um copo. No liquidificador, bata os morangos com 100ml de água. Coloque o suco de morango por cima do suco de laranja.'
);

INSERT INTO recipe (name, categoryId, portions, ingredients, prepare)
VALUES (
    'Suco de Abacaxi com Maracujá', 
    (SELECT categoryId FROM category WHERE name = 'Bebidas'), 
    3,
    ARRAY[
        '200g de abacaxi', 
        '200g de maracujás',
        '400ml de água',
        '10g de hortelã',
        '20g de açúcar ou adoçante a gosto'
    ], 
    'Bata todos os ingredientes em um liquidificador, peneire e sirva gelado.'
);

INSERT INTO categories (categoryName) VALUES
  ('Tortas'),
  ('Bolos'),
  ('Sobremesas'),
  ('Refeições'),
  ('Sucos'),
  ('Pães'),
  ('Biscoitos');
