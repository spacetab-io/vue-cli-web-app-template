import RequireContext = __WebpackModuleApi.RequireContext;

const iconsRequire = (ctx: RequireContext): string[] => {
  const keys = [...new Set(ctx.keys())];

  return keys.map((item: string) => ctx(item).default);
};

const icons = iconsRequire(require.context(
  '!@spacetabs/svg-sprite-loader?symbolId=app-icon-[name]!../../assets/icons/',
  true,
  /\.svg$/u,
));

export default icons;
