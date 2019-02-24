import { createTree } from '../playground';

describe('playground', () => {
  it('should perform playground tasks', () => {
    // Place your playground tests here.
    const bTree = createTree();

    console.log(bTree.toString());

    expect(bTree.contains(373488)).toBeTruthy();
    expect(bTree.contains(777673)).toBeTruthy();
    expect(bTree.contains(373488)).toBeTruthy();
    expect(bTree.contains(863025)).toBeTruthy();
  });
});
