// 页面加载后执行
window.addEventListener('load', () => {
  const layui = window.layui;
  layui.use(() => {
    const layer = layui.layer;
    const $ = layui.$;
    const copyBtn = $('<input type="button" value="插件复制" class="layui-btn plugin-copy-btn" />')

    const codeTags = $('code')

    // 遍历code标签
    codeTags.each((_, dom) => {
      $(dom).hover(() => {
        switch (window.location.hostname) {
          case 'blog.csdn.net':
            //csdn button 位置修正
            const left = $('.pre-numbering').width() + 3
            copyBtn.css({
              'left': left + 'px'
            })
        }
        $(dom).append(copyBtn);
        // 为复制按钮添加点击事件
        $('.plugin-copy-btn').click(() => {
          const target = $('.plugin-copy-btn').parent();
          target.focus();
          const range = document.createRange();
          const selection = window.getSelection();
          range.selectNodeContents(target[0]);
          selection.removeAllRanges();
          selection.addRange(range);
          navigator.clipboard.writeText(range.toString());
          selection.removeAllRanges();
          layer.msg("复制成功");
        })
      }, () => {
        $('.plugin-copy-btn').remove();
      })

    })
  })
})