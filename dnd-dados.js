// Dados de referência das fichas usadas pelo mestre e pelo jogador.

export const TIPOS_FICHA = [
  { id: "dnd5e", nome: "D&D 5ª Edição" },
  { id: "generico", nome: "Genérico (qualquer sistema)" },
];

export const ATRIBUTOS = [
  ["forca", "Força"],
  ["destreza", "Destreza"],
  ["constituicao", "Constituição"],
  ["inteligencia", "Inteligência"],
  ["sabedoria", "Sabedoria"],
  ["carisma", "Carisma"],
];

export const PERICIAS = [
  ["acrobacia", "Acrobacia", "destreza"],
  ["arcanismo", "Arcanismo", "inteligencia"],
  ["atletismo", "Atletismo", "forca"],
  ["atuacao", "Atuação", "carisma"],
  ["blefar", "Blefar (Enganação)", "carisma"],
  ["furtividade", "Furtividade", "destreza"],
  ["historia", "História", "inteligencia"],
  ["intimidacao", "Intimidação", "carisma"],
  ["intuicao", "Intuição", "sabedoria"],
  ["investigacao", "Investigação", "inteligencia"],
  ["lidarAnimais", "Lidar com Animais", "sabedoria"],
  ["medicina", "Medicina", "sabedoria"],
  ["natureza", "Natureza", "inteligencia"],
  ["percepcao", "Percepção", "sabedoria"],
  ["persuasao", "Persuasão", "carisma"],
  ["prestidigitacao", "Prestidigitação", "destreza"],
  ["religiao", "Religião", "inteligencia"],
  ["sobrevivencia", "Sobrevivência", "sabedoria"],
];

export function modificador(score) {
  return Math.floor((Number(score || 10) - 10) / 2);
}

export function formatMod(mod) {
  return mod >= 0 ? `+${mod}` : `${mod}`;
}

export function fichaVaziaDnd(nome) {
  const atributos = {};
  ATRIBUTOS.forEach(([chave]) => atributos[chave] = 10);

  const salvaguardas = {};
  ATRIBUTOS.forEach(([chave]) => salvaguardas[chave] = false);

  const pericias = {};
  PERICIAS.forEach(([chave]) => pericias[chave] = false);

  return {
    tipo: "dnd5e",
    nome,
    jogador: nome,
    classe: "", nivel: 1, antecedente: "", raca: "", tendencia: "", experiencia: 0,
    atributos,
    bonusProficiencia: 2,
    salvaguardas,
    pericias,
    inspiracao: false,
    ca: 10, iniciativa: 0, deslocamento: 9,
    pv: 10, pvMax: 10, pvTemp: 0,
    dadosVida: "1d8",
    mortesSucesso: 0, mortesFracasso: 0,
    ataques: [],
    outrasProficiencias: "",
    tracos: "", ideais: "", ligacoes: "", defeitos: "",
    anotacoes: "",
    inventario: []
  };
}

export function fichaVaziaGenerica(nome) {
  return {
    tipo: "generico",
    nome,
    classe: "", nivel: 1,
    pv: 10, pvMax: 10,
    pm: 0, pmMax: 0,
    atributos: { forca: 10, destreza: 10, constituicao: 10, inteligencia: 10, sabedoria: 10, carisma: 10 },
    anotacoes: "",
    inventario: []
  };
}

export function fichaVazia(nome, tipo = "dnd5e") {
  return tipo === "generico" ? fichaVaziaGenerica(nome) : fichaVaziaDnd(nome);
}
