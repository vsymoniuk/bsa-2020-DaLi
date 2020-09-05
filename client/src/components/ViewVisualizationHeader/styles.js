import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  viewVisualizationHeader: {
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 40px',
    width: '100%',
    boxSizing: 'border-box',
  },

  viewVisualizationTitle: {
    alignItems: 'center',
  },

  viewVisualizationTitleName: {
    fontWeight: '500',
    fontSize: '20px',
  },

  viewVisualizationTitleSection: {
    color: 'gray',
  },

  viewVisualizationTitleDescription: {
    fontSize: '13px',
  },
  viewVisualizationTitleIcon: {
    color: 'gray',
    fontSize: '22px',
    cursor: 'pointer',
    marginLeft: '20px',
  },

  viewVisualizationButtons: {
    flexDirection: 'row',
    height: '40px',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  viewVisualizationSaveButton: {
    color: 'white',
    textTransform: 'none',
    background: '#3ca1de',
    '&:hover': {
      background: '#3ca1de',
    },
    borderRadius: '5px',
    marginLeft: '10px',
  },

  viewVisualizationFilterButton: {
    color: 'rgb(113, 114, 173)',
    backgroundColor: 'rgba(113, 114, 173, 0.2)',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'rgba(113, 114, 173, 0.5)',
    },
    borderRadius: '5px',
    marginLeft: '10px',
  },

  viewVisualizationSummarizeButton: {
    color: 'white',
    backgroundColor: 'rgba(136, 191, 77, 0.8)',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'rgba(136, 191, 77, 1)',
    },
    borderRadius: '5px',
    marginLeft: '10px',
  },

  viewVisualizationDeleteButton: {
    color: 'white',
    textTransform: 'none',
    background: 'red',
    '&:hover': {
      background: 'red',
    },
    borderRadius: '5px',
    marginRight: '20px',
  },
}));

export default useStyles;
