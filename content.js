// 页面加载后执行
window.addEventListener('load', () => {
  const layui = window.layui;
  layui.use(() => {
    const layer = layui.layer;
    const $ = layui.$;
    const copyBtn = $('<button class="layui-btn plugin-copy-btn">插件复制</button>')

    const codeTags = $('code')

    // 遍历code标签
    codeTags.each((_, dom) => {
      $(dom).hover(() => {
        $(dom).append(copyBtn);
        // 为复制按钮添加点击事件
        $('.plugin-copy-btn').click((dom) => {
          console.log('dom',$(dom))
          const target = $(dom).parent()
          target.focus();
          const range = document.createRange();
          const selection = window.getSelection();
          range.selectNodeContents(target[0]);
          selection.removeAllRanges();
          selection.addRange(range);
        })
      }, () => {
        $('.plugin-copy-btn').remove();
      })

    })
  })
})