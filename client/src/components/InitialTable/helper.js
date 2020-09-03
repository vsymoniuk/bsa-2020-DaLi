import moment from 'moment';

const getDate = (date, period) => {
  let formattedDate = moment(date).format('MMMM DD, YYYY');
  if (formattedDate === 'Invalid date') return '';

  switch (period) {
    case 'month': {
      formattedDate = moment(date).format('MMMM, YYYY');
      break;
    }
    case 'year': {
      formattedDate = moment(date).format('YYYY');
      break;
    }
    case 'week': {
      formattedDate = moment(date).format('WW, YYYY');
      break;
    }
    case 'day': {
      formattedDate = moment(date).format('DD MMMM,YYYY');
      break;
    }
    case 'quarter': {
      formattedDate = moment(date).format('Q, YYYY');
      break;
    }
    default: {
      break;
    }
  }

  return formattedDate;
};

export const formatDate = (data, config) => {
  if (config.isSummarize && config.summarize.groupBy.type === 'date') {
    const dateColumn = config.summarize.groupBy.as;
    return data.map((row) => {
      row[dateColumn] = getDate(row[dateColumn], config.summarize.groupBy.period);
      return row;
    });
  }
  return data;
};
