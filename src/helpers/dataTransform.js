export const filterToGen = (data, gen) => {
  return data.generations.filter((g) => g.id.replace(/_/g, '-') === gen)[0];
};

export const filterToEngine = (data, gen, engine) => {
  const generation = filterToGen(data, gen);
  return generation.engines.filter((e) => e.id === engine)[0];
};

export const parseCategory = (category) => {
  const parseTo = {
    general: 'General Discussions',
    problems: 'Technical Problems and Service',
    events: 'Meetings and Events'
  }
  return parseTo[category];
}
