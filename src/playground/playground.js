// Place your playground code here.

import BTree from '../data-structures/tree/binary-search-tree/BinarySearchTree';

const compy = (a, b) => {
  if (a === b) {
    return 0;
  }

  return a < b ? -1 : 1;
};

export const createTree = () => {
  console.log('creating tree');

  const bTree = new BTree(compy);

  bTree.insert(103709);
  bTree.insert(148209);
  bTree.insert(167638);
  bTree.insert(236279);
  bTree.insert(282028);
  bTree.insert(373488);
  bTree.insert(433286);
  bTree.insert(439131);
  bTree.insert(486657);
  bTree.insert(487754);
  bTree.insert(498453);
  bTree.insert(502310);
  bTree.insert(528760);
  bTree.insert(529309);
  bTree.insert(543180);
  bTree.insert(549769);
  bTree.insert(572977);
  bTree.insert(777673);
  bTree.insert(861301);
  bTree.insert(863025);

  return bTree;
};

export const ting = () => {
  return 0;
};
