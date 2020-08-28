import createError from 'http-errors';
import DashboardRepository from '../repositories/dashboardRepository';
import DashboardVisualizationsRepository from '../repositories/dashboardVisualizationsRepository';

export const getDashboards = async () => {
  const result = await DashboardRepository.getAllWithVisualizations();
  return result;
};

export const createDashboard = async (data) => {
  const result = await DashboardRepository.create(data);
  return result;
};

export const deleteDashboard = async (id) => {
  const item = await DashboardRepository.getById(id);
  if (!item) {
    throw createError(404, `Dashboard with id of ${id} not found`);
  }
  const result = await DashboardRepository.deleteById(id);
  return result;
};

export const updateDashboard = async (id, dataToUpdate) => {
  const item = await DashboardRepository.getById(id);
  if (!item) {
    throw createError(404, `Dashboard with id of ${id} not found`);
  }
  const result = await DashboardRepository.updateById(id, dataToUpdate);
  return result;
};

export const getDashboard = async (id) => {
  const item = await DashboardRepository.getWithVisualizations(id.id);
  if (!item) {
    throw createError(404, `Dashboard with id of ${id} not found`);
  }
  return item[0];
};

export const addVisualization = async (data) => {
  const result1 = await DashboardVisualizationsRepository.create(data);
  if (!result1) {
    return null;
  }
  const result = await getDashboard({ id: data.dashboards_id });
  return result;
};

export const deleteVisualization = async (id) => {
  const item = await DashboardVisualizationsRepository.getById(id);
  if (!item) {
    throw createError(404, `Dashboard-visualization link with id of ${id} not found`);
  }
  const result = await DashboardVisualizationsRepository.deleteById(id);
  return result;
};
