import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Typography } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import FilterListIcon from '@material-ui/icons/FilterList';
import GamesOutlinedIcon from '@material-ui/icons/GamesOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';
import EditIcon from '@material-ui/icons/Edit';

import useStyles from './styles';
import { FILTER, SUMMARIZE } from '../../containers/ViewVisualizationContainer/componentTypes';

const ViewVisualizationHeader = (props) => {
  const {
    onVisualizationSave,
    onVisualizationNameEdit,
    isVisualizationExist,
    name,
    description,
    visualizationType,
    onToggleRightSideBar,
  } = props;
  const classes = useStyles();

  return (
    <Grid className={classes.viewVisualizationHeader}>
      <Grid className={classes.viewVisualizationTitle} item container>
        <Typography className={classes.viewVisualizationTitleName}>
          <span className={classes.viewVisualizationTitleSection}>
            {isVisualizationExist ? 'Visualizations / ' : 'Create Visualization / '}
          </span>
          {isVisualizationExist ? name : `New ${visualizationType}`}
        </Typography>
        {isVisualizationExist && (
          <>
            {description && description.length && (
              <Tooltip
                classes={{
                  tooltip: classes.viewVisualizationTitleDescription,
                }}
                title={description}
              >
                <InfoIcon className={classes.viewVisualizationTitleIcon} />
              </Tooltip>
            )}

            <EditIcon className={classes.viewVisualizationTitleIcon} onClick={onVisualizationNameEdit} />
          </>
        )}
      </Grid>
      <Grid className={classes.viewVisualizationButtons} item container>
        <Button
          className={classes.viewVisualizationSaveButton}
          variant="contained"
          startIcon={<SaveIcon />}
          onClick={onVisualizationSave}
        >
          Save
        </Button>
        <Button
          className={classes.viewVisualizationFilterButton}
          variant="contained"
          startIcon={<FilterListIcon />}
          onClick={onToggleRightSideBar(FILTER)}
        >
          Filter
        </Button>
        <Button
          className={classes.viewVisualizationSummarizeButton}
          variant="contained"
          startIcon={<GamesOutlinedIcon />}
          onClick={onToggleRightSideBar(SUMMARIZE)}
        >
          Summarize
        </Button>
      </Grid>
    </Grid>
  );
};

ViewVisualizationHeader.propTypes = {
  onVisualizationSave: PropTypes.func,
  onVisualizationNameEdit: PropTypes.func,
  isVisualizationExist: PropTypes.bool,
  name: PropTypes.string,
  description: PropTypes.string,
  visualizationType: PropTypes.string,
  onToggleRightSideBar: PropTypes.func,
};

export default ViewVisualizationHeader;
