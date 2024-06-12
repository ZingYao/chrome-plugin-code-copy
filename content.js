// 页面加载后执行
window.addEventListener('load', () => {
  const layui = window.layui;
  layui.use(() => {
    const layer = layui.layer;
    const $ = layui.$;
    const copyBtn = $('<button class="layui-btn plugin-copy-btn">插件复制</button>')

    // 为复制按钮添加点击事件
    $('.plugin-copy-btn').click(() => {
      layer.msg('tap')
    })
    const codeTags = $('code')

    // 遍历code标签
    codeTags.each((_, dom) => {
      $(dom).hover(() => {
        $(dom).append(copyBtn);
      }, () => {
        $('.plugin-copy-btn').remove();
      })

    })
  })
})