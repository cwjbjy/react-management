const msgPath = process.env.HUSKY_GIT_PARAMS;
const msg = require("fs").readFileSync(msgPath, "utf-8").trim();

const commitReg =
  /^(revert: )?(feat|fix|revert|docs|style|ui|refactor|perf|test|build|ci|chore|types|typo|wip|merge)(\(.+\))?: .{1,50} \((((bug|story)#\d+)|#000)\)( \(\w+\))?$/;

if (!commitReg.test(msg)) {
  console.error(
    ` ERROR  无效的提交格式。\n\n` +
      `  ${msg}\n\n` +
      `  请确认提交格式是否正确。 期望的格式如下示例:\n\n` +
      `  fix: 修复xxx不显示问题 (bug#666)\n` +
      `  feat(f9): 添加XXX模块 (story#123)\n\n`
  );
  process.exit(1);
}
