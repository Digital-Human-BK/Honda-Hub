export const mapErrors = (err) => {
  if (Array.isArray(err)) {
    return err;
  } else if (err.name === 'ValidationError') {
    return Object.values(err.errors).map((e) => ({ msg: e.message }));
  } else if (typeof err.message == 'string') {
    return [{ msg: err.message }];
  } else {
    return [{ msg: 'Request error' }];
  }
};

export const mapCategories = (category) => {
  const parseTo = {
    general: 'General Discussions',
    problems: 'Technical Problems',
    events: 'Meetings and Events',
  };
  return parseTo[category];
};

export const mapIcons = (category) => {
  const icons = {
    general: 'fa-solid fa-comments',
    problems: 'fa-solid fa-car-burst',
    events: 'fa-solid fa-users',
  };
  return icons[category];
};

export const mapDate = (rawDate) => {
  const formatDate = new Date(rawDate);
  const date = formatDate.toLocaleString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
  const time = formatDate.toLocaleTimeString('en-GB');

  return [date, time];
};

export const formatQuote = (text, author, date, time) => {
  if (text.length > 300) {
    return `"${text.slice(0,300)}..."\n ~Posted by: ${author} at ${date}, ${time}~\n\n`;
  }

  return `"${text}"\n ~Posted by: ${author} at ${date}, ${time}~\n\n`;
};

export const filterToGen = (data, gen) => {
  return data.generations.filter((g) => g.id.replace(/_/g, '-') === gen)[0];
};

export const filterToEngine = (data, gen, engine) => {
  const generation = filterToGen(data, gen);
  return generation.engines.filter((e) => e.id === engine)[0];
};
