export interface AlgorithmLine {
  depth: number;
  html: string;
}

export interface AlgorithmData {
  title: string;
  lines: AlgorithmLine[];
}

// Math fragments share one font and size with the KaTeX formulas of the post.
const math = (content: string) => `<span class="math">${content}</span>`;
const v = (name: string) => `<i class="mi">${name}</i>`;
const sub = (content: string) => `<sub>${content}</sub>`;
const sup = (content: string) => `<sup>${content}</sup>`;

const lambda = v("λ");
const initialize = `Initialize ${math(lambda)} randomly`;
const until = `<b>until</b> <i>ELBO grows no more</i>;`;
const qi = `${v("q")}${sub(v("i"))}(${v("θ")}${sub(v("i"))}|${v("λ")}${sub(v("i"))})`;
const q = `${v("q")}(${v("θ")}|${lambda})`;

export const algorithms: Record<string, AlgorithmData> = {
  vi: {
    title: "Algorithm 1: VI algorithm.",
    lines: [
      { depth: 0, html: initialize },
      { depth: 0, html: "<b>repeat</b>" },
      {
        depth: 1,
        html: `Update ${math(`${v("λ")}${sub(v("i"))}`)} of every ${math(qi)}`,
      },
      { depth: 1, html: "Recalculate ELBO" },
      { depth: 0, html: until },
    ],
  },
  cavi: {
    title: "Algorithm 2: CAVI algorithm.",
    lines: [
      { depth: 0, html: initialize },
      { depth: 0, html: "<b>repeat</b>" },
      {
        depth: 1,
        html: `<b>for</b> <i>each local variational parameter</i> ${math(`∈ ${lambda}${sub("<i>local</i>")}`)} <b>do</b>`,
      },
      {
        depth: 2,
        html: `Update ${math(`${lambda}${sub(`<i>local</i>${sub(v("i"))}`)}`)} with its derived formula`,
      },
      {
        depth: 1,
        html: `Update each global variational parameter ${math(`∈ ${lambda}${sub("<i>global</i>")}`)} with its derived formula`,
      },
      { depth: 1, html: "Recalculate ELBO" },
      { depth: 0, html: until },
    ],
  },
  gavi: {
    title: "Algorithm 3: GAVI algorithm.",
    lines: [
      { depth: 0, html: initialize },
      { depth: 0, html: "<b>repeat</b>" },
      {
        depth: 1,
        html: math(
          `${lambda} = ${lambda} − ${v("ρ")}∇${sub(lambda)}<i>ELBO</i>(${lambda}, ${v("X")})`,
        ),
      },
      { depth: 1, html: "Recalculate ELBO" },
      { depth: 0, html: until },
    ],
  },
  svi: {
    title: "Algorithm 4: SVI algorithm.",
    lines: [
      { depth: 0, html: initialize },
      { depth: 0, html: "<b>repeat</b>" },
      { depth: 1, html: "Sample a data batch of X" },
      { depth: 1, html: "Compute its local parameter" },
      { depth: 1, html: "Update the current estimate of the global parameters" },
      {
        depth: 1,
        html: math(
          `${lambda}${sup(v("t"))} = (1 − ${v("ρ")}${sub(v("t"))})${lambda}${sup(`${v("t")}−1`)} + ${v("ρ")}${sub(v("t"))}${lambda}&#770;`,
        ),
      },
      { depth: 0, html: until },
    ],
  },
  bbvi: {
    title: "Algorithm 5: BBVI algorithm.",
    lines: [
      {
        depth: 0,
        html: `Input: data x, joint distribution p, mean field variational family 1. ${initialize}, t=1`,
      },
      { depth: 0, html: "<b>repeat</b>" },
      { depth: 1, html: "x = sample a batch of data X" },
      { depth: 1, html: `// Draw S samples from ${math(q)}` },
      { depth: 1, html: `<b>for</b> <i>s=1 in S</i> <b>do</b>` },
      { depth: 2, html: math(`${v("z")}[${v("s")}] ∼ ${q}`) },
      { depth: 1, html: `${math(v("η"))} = <i>t</i>th value of Robbins Monro sequence` },
      {
        depth: 1,
        html: math(
          `${lambda} = ${lambda} + ${v("η")} <span class="frac"><span>1</span><span>${v("S")}</span></span> Σ${sub(`${v("s")}=1`)}${sup(v("S"))} [ln ${v("p")}(${v("x")}, ${v("θ")}${sub(v("s"))}) − ln ${v("q")}(${v("θ")}${sub(v("s"))}|${lambda})] ∇${sub(lambda)} [ln ${v("q")}(${v("θ")}${sub(v("s"))}|${lambda})]`,
        ),
      },
      { depth: 1, html: "t = t + 1" },
      { depth: 0, html: until },
    ],
  },
};
