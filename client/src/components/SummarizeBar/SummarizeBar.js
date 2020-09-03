import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './styles';
import GroupByList from './GroupByList';

const summarizes = [
  { id: 0, name: 'count', operation: 'COUNT' },
  { id: 1, name: 'Sum of', operation: 'SUM' },
  { id: 2, name: 'Average of', operation: 'AVG' },
];

const SummarizeBar = ({ currentVisualization, updateVisualization }) => {
  const classes = useStyles();
  const [currentSummarize, setCurrentSummarize] = useState(null);
  const [currentGroupBy, setCurrentGroupBy] = useState(null);
  const [isSummarize, setIsSummarize] = useState(false);
  const [isInitializeSummarize, setIsInitializeSummarize] = useState(true);

  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const deleteSummarize = (e) => {
    e.stopPropagation();
    setIsSummarize(false);
    setCurrentGroupBy(null);
    setCurrentSummarize(null);
    setIsInitializeSummarize(false);
  };

  const deleteGroupBy = (e) => {
    e.stopPropagation();
    setCurrentGroupBy(null);
  };

  // initial summarize
  if (currentVisualization.config.isSummarize && isInitializeSummarize && !isSummarize) {
    setIsSummarize(true);
    setCurrentGroupBy(currentVisualization.config.summarize.groupBy);
    const summarizeIndex = summarizes.findIndex(
      (item) => item.name === currentVisualization.config.summarize.select.as
    );
    setCurrentSummarize(summarizes[summarizeIndex]);
  }

  const updateConfig = () => {
    const newConfig = { ...currentVisualization.config };
    if (isSummarize) {
      newConfig.axisData.XAxis.key = currentGroupBy;
      newConfig.axisData.XAxis.label = currentGroupBy;
      newConfig.axisData.YAxis.key = currentSummarize.name;
      newConfig.axisData.YAxis.label = currentSummarize.name;
      newConfig.isSummarize = true;
      const summarize = {
        select: {
          operation: currentSummarize.operation,
          column: '*',
          as: currentSummarize.name,
        },
        groupBy: currentGroupBy,
      };
      newConfig.summarize = summarize;
    } else {
      newConfig.summarize = {
        select: {},
        groupBy: '',
      };
      newConfig.isSummarize = false;
    }
    updateVisualization(newConfig);
  };

  const selectSummarize = (summarize) => () => {
    setCurrentSummarize(summarize);
    setIsSummarize(true);
    setMenuAnchorEl(null);
  };
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <div>
        <h3>Summarize by</h3>
        {isSummarize && (
          <>
            <Button className={classes.summarizeByButton} variant="contained" fullWidth onClick={handleMenuClick}>
              {currentSummarize.name}
              <CloseIcon onClick={deleteSummarize} />
            </Button>
          </>
        )}
        {!isSummarize && (
          <>
            <Button className={classes.addMetricButton} fullWidth onClick={handleMenuClick}>
              Add a metric
            </Button>
          </>
        )}
        <Menu
          id="add-menu"
          anchorEl={menuAnchorEl}
          keepMounted
          open={Boolean(menuAnchorEl)}
          onClose={() => setMenuAnchorEl(null)}
        >
          {summarizes.map((summarize) => (
            <MenuItem key={summarize.id} onClick={selectSummarize(summarize)}>
              {summarize.name}
            </MenuItem>
          ))}
        </Menu>
      </div>
      {isSummarize && (
        <div>
          <h3>Group by</h3>
          {currentVisualization.schema.map((column) => (
            <GroupByList
              key={column.column_name}
              type={column.data_type}
              name={column.column_name}
              isActive={column.column_name === currentGroupBy}
              setCurrentGroupBy={setCurrentGroupBy}
              deleteGroupBy={deleteGroupBy}
            />
          ))}
        </div>
      )}
      <Button
        className={classes.summarizeDoneButton}
        disabled={isSummarize && !currentGroupBy}
        variant="contained"
        onClick={updateConfig}
      >
        DONE
      </Button>
    </div>
  );
};

SummarizeBar.propTypes = {
  currentVisualization: PropTypes.object,
  updateVisualization: PropTypes.func,
};

export default SummarizeBar;