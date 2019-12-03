/**
 * 动态导入所有svg
 * 但是非静态引入虽然方便，但是无法 tree-shaking
 */
let importAll = requireContext => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('../../icons/', true, /\.svg$/));
} catch (error) {
  // console.log(error);
}