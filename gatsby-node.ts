import type { GatsbyNode } from 'gatsby';
import path from 'path';

export const createPages: GatsbyNode['createPages'] = async ({ actions }) => {
  const { createPage, createSlice } = actions;

  // createPage({
  //   path: '/theme-toggle-button',
  //   component: path.resolve('./src/components/toggle-theme.component.tsx'),
  //   ownerNodeId: `123456`,
  //   context: {
  //     LULE: 'LUKA TIM',
  //   },
  // });

  createSlice({
    id: `theme-toggle`,
    component: path.resolve('./src/components/toggle-theme.component.tsx'),
  });
};
