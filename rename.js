import path from 'path';

export default function renamePlugin(api) {
  return api.chainWebpack((config) => {
    config.entry('app').add(path.join(api.paths.absTmpPath, 'umi.ts'));
    // 移除旧的
    config.entryPoints.delete('umi');
    return Promise.resolve(config);
  });
}
